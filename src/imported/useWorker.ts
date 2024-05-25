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
    const eventListeners: Partial<Record<string, Set<(event?: any) => void>>> = {};
    const setEntries = () => {
      const oldState = { ...state };
      const entries = ([...new FormData(form).entries()] as [string, string | number][])
        .filter((e) => e[0].startsWith("attr_"))
        .map((e) => [e[0].replace("attr_", ""), e[1]] as const);
      Object.assign(state, Object.fromEntries(entries));
      return oldState;
    };
    setEntries();
    form.addEventListener("submit", (e) => e.preventDefault());

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
    globalThis.getTranslationByKey = (key: string) => translation[key];
    // @ts-expect-error roll20
    globalThis.getActiveCharacterId = () => "test";

    const updateInputs = (attrs: Record<string, string | number>) => {
      for (const [key, value] of Object.entries(attrs)) {
        for (const el of form.querySelectorAll<HTMLInputElement>(`input[name="attr_${key}"]`)) {
          switch (el.type) {
            case "radio":
              if (el.checked != (el.value == value)) {
                console.debug("updating radio value", el.checked, value, el);
                el.checked = el.value == String(value);
              }
              break;
            case "checkbox":
              if (el.checked != Boolean(value)) {
                console.debug("updating checkbox value", el.checked, value, el);
                el.checked = Boolean(value);
              }
              break;
            default:
              if (el.value != String(value)) {
                console.debug("updating select value", el.value, value, el);
                el.value = String(value);
              }
          }
        }
        for (const el of form.querySelectorAll<HTMLSelectElement>(`select[name="attr_${key}"]`)) {
          if (el.value != String(value)) {
            console.debug("updating select value", el.value, value, el);
            el.value = String(value);
          }
        }
        for (const el of form.querySelectorAll<HTMLTextAreaElement>(`textarea[name="attr_${key}"]`)) {
          if (el.value != String(value)) {
            console.debug("updating textarea value", el.value, value, el);
            el.value = String(value);
          }
        }
      }
    };
    const updateValues = (attrs: Record<string, string | number>) => {
      for (const [key, value] of Object.entries(attrs)) {
        const others = form.querySelectorAll<HTMLElement>(`[name="attr_${key}"]:not(input, select, textarea)`);

        for (const el of others) {
          if (el.textContent != String(value)) {
            console.debug("updating el value", el.textContent, value, el);
            el.textContent = String(value);
          }
        }
      }
    };

    // @ts-expect-error roll20
    globalThis.setAttrs = (attrs: Record<string, string | number>, cb) => {
      updateInputs(attrs);
      updateValues(attrs);
      Object.assign(state, attrs);
      cb();
    };
    worker();
    for (const callback of eventListeners["sheet:opened"] || []) {
      callback();
    }

    updateInputs(state);
    updateValues(state);

    let isChanging = false;
    const changingPool = new Set<string>();
    let isUpdating = false;
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
          updateValues({ [name]: value });
          isUpdating = false;
          if (isChanging) {
            changingPool.add(name);
            return;
          }
          const oldState = setEntries();
          isChanging = true;
          const event = {
            sourceAttribute: name,
            sourceType: "player",
            previousValue: oldState[name],
            newValue: state[name],
          };
          if (name) {
            console.debug("event happened", `change:${name}`, event);
          }
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
  }, [form, worker]);

  return setForm;
};
