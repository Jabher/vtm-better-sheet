import { useEffect, useState } from "react";
import { pick } from "ramda";
import translation from "../translation.json";
import { I18n } from "../types.ts";

export type Worker = () => void;
export const useWorker = (worker: Worker) => {
  const [form, setForm] = useState<HTMLFormElement | null>(null);
  useEffect(() => {
    if (!form) return;
    for (const el of form.querySelectorAll<HTMLElement>("[data-i18n]")) {
      el.textContent = translation[el.dataset.i18n as I18n];
    }
    const o = new MutationObserver(() => {
      for (const el of form.querySelectorAll<HTMLElement>("[data-i18n]")) {
        el.textContent = translation[el.dataset.i18n as I18n];
      }
    });
    o.observe(form, {
      subtree: true,
      childList: true,
    });
    return () => o.disconnect();
  }, [form]);
  useEffect(() => {
    if (!form) return;
    const state: Record<string, string | number> = {};
    const eventListeners: Partial<Record<string, Set<Function>>> = {};
    const setEntries = () => {
      const oldState = { ...state };
      const entries = ([...new FormData(form).entries()] as [string, string | number][])
        .filter((e) => e[0].startsWith("attr_"))
        .map((e) => [e[0].replace("attr_", ""), e[1]] as const);
      Object.assign(state, Object.fromEntries(entries));
      return oldState;
    };
    setEntries();
    let isChanging = false;
    const changingPool = new Set<string>();
    let isUpdating = false;
    form.addEventListener("submit", (e) => e.preventDefault());
    for (const eventName of ["input", "change"]) {
      form.addEventListener(eventName, async (e) => {
        const { name: attrName, value } = e.target as HTMLInputElement;
        if (!attrName.startsWith("attr_")) {
          return;
        }
        const name = attrName.replace("attr_", "");
        if (isUpdating) {
          return;
        }
        {
          isUpdating = true;
          // @ts-expect-error roll20
          await new Promise((resolve) => setAttrs({ [name]: value }, resolve));
          isUpdating = false;
          if (isChanging) {
            changingPool.add(name);
            return;
          }
          const oldState = setEntries();
          const event = {
            sourceAttribute: name,
            sourceType: "player",
            previousValue: oldState[name],
            newValue: state[name],
          };
          isChanging = true;
          for (const callback of eventListeners[`change:${name}`] || []) {
            callback(event);
          }
        }
        for (const key of changingPool) {
          const oldState = setEntries();

          changingPool.delete(key);
          const event = {
            sourceAttribute: name,
            sourceType: "player",
            previousValue: oldState[key],
            newValue: state[key],
          };
          for (const callback of eventListeners[`change:${key}`] || []) {
            callback(event);
          }
        }
        isChanging = false;
      });
    }
    const formulas = new WeakMap<HTMLInputElement, string>();
    // @ts-expect-error roll20
    globalThis.on = (events: string, callback: WorkerEventCallback) => {
      for (const event of events.split(/ +/)) {
        eventListeners[event] ??= new Set();
        eventListeners[event]?.add(callback);
      }
    };
    // @ts-expect-error roll20
    globalThis.getAttrs = <T extends string>(keys: [...T[]], callback: (args: Record<T, number>) => void) => {
      // @ts-expect-error roll20
      callback(pick(keys, state));
    };

    // @ts-expect-error roll20
    globalThis.getActiveCharacterId = () => "test";

    // @ts-expect-error roll20
    globalThis.setAttrs = (attrs: Record<string, string | number>) => {
      for (const [key, value] of Object.entries(attrs)) {
        const inputs = form.querySelectorAll<HTMLInputElement>(`input[name="attr_${key}"]`);
        const selects = form.querySelectorAll<HTMLSelectElement>(`select[name="attr_${key}"]`);
        const textareas = form.querySelectorAll<HTMLTextAreaElement>(`textarea[name="attr_${key}"]`);
        const others = form.querySelectorAll<HTMLElement>(`[name="attr_${key}"]:not(input, select)`);
        for (const input of inputs) {
          switch (input.type) {
            case "radio":
              input.checked = input.value == String(value);
              break;
            case "checkbox":
              input.checked = Boolean(value);
              break;
            default:
              if (input.value != String(value)) input.value = String(value);
          }
        }
        for (const select of selects) {
          if (select.value != String(value)) select.value = String(value);
        }
        for (const select of textareas) {
          if (select.value != String(value)) select.value = String(value);
        }
        for (const el of others) {
          el.textContent = String(value);
        }
      }
      Object.assign(state, attrs);
      for (const el of form.querySelectorAll<HTMLInputElement>("input:disabled")) {
        if (!formulas.has(el)) {
          formulas.set(el, el.value);
        }
        const formula = formulas.get(el);
        if (!formula) {
          console.log("formula missing", formula, el);
          return;
        }
        // eslint-disable-next-line unicorn/prefer-string-replace-all
        const res = formula.replace(/@\{([\w_]+)\}/g, (_, ...args) => state[args[0]] as string);
        el.value = eval(res);
      }
    };
    worker();
    for (const callback of eventListeners["sheet:opened"] || []) {
      callback();
    }

    for (const [key, value] of Object.entries(state)) {
      const inputs = form.querySelectorAll<HTMLInputElement>(`input[name="attr_${key}"]`);
      const selects = form.querySelectorAll<HTMLSelectElement>(`select[name="attr_${key}"]`);
      const textareas = form.querySelectorAll<HTMLTextAreaElement>(`textarea[name="attr_${key}"]`);
      const others = form.querySelectorAll<HTMLElement>(`[name="attr_${key}"]:not(input, select)`);
      for (const el of inputs) {
        switch (el.type) {
          case "radio":
            if (el.checked != (el.value == value)) {
              console.info("updating radio value", el.checked, value, el);
              el.checked = el.value == String(value);
            }
            break;
          case "checkbox":
            if (el.checked != Boolean(value)) {
              console.info("updating checkbox value", el.checked, value, el);
              el.checked = Boolean(value);
            }
            break;
          default:
            if (el.value != String(value)) {
              console.info("updating select value", el.value, value, el);
              el.value = String(value);
            }
        }
      }
      for (const el of selects) {
        if (el.value != String(value)) {
          console.info("updating select value", el.value, value, el);
          el.value = String(value);
        }
      }
      for (const el of textareas) {
        if (el.value != String(value)) {
          console.info("updating textarea value", el.value, value, el);
          el.value = String(value);
        }
      }
      for (const el of others) {
        if (el.textContent != String(value)) {
          console.info("updating el value", el.textContent, value, el);
          el.textContent = String(value);
        }
      }
    }
  }, [form, worker]);

  return setForm;
};
