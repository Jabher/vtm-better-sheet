import { useEffect, useState } from "react";
import { pick } from "ramda";

type Event =
  | `change:${string}`
  | `change:_reporder:${string}`
  | `remove:repeating_${string}`
  | `sheet:opened`
  | `clicked:${string}`
  | `sheet:compendium-drop`;

type WorkerEvent = {
  sourceAttribute: string;
  sourceType: "player" | "sheetworker";
  previousValue: string | number;
  newValue: string | number;
  // removedInfo: never, // todo
  // triggerName: never // todo
};

type WorkerEventCallback = (eventInfo?: WorkerEvent) => any;

// todo compat layer
export type WorkerApi = {
  on: (events: Event | Event[], callback: WorkerEventCallback) => void;
  getAttrs: <T extends [...string[]]>(...attrs: T) => Promise<Record<T[number], string>>;
  setAttrs: (attrs: Record<string, string | number>) => Promise<void>;
  // getSectionIDs: never // todo
  // generateRowID: never //todo
  // removeRepeatingRow: never //todo
  // setSectionOrder: never //todo
  // getTranslationByKey: never //todo
  // getTranslationLanguage: never //todo
  // setDefaultToken: never //todo
};

export type Worker = (api: WorkerApi) => void;
export const useWorker = (worker: Worker) => {
  const [form, setForm] = useState<HTMLFormElement | null>(null);
  useEffect(() => {
    if (!form) return;
    const state: Record<string, string | number> = {};
    const eventListeners: Partial<Record<Event, Set<WorkerEventCallback>>> = {};
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
          await api.setAttrs({ [name]: value });
          isUpdating = false;
          if (isChanging) {
            changingPool.add(name);
            return;
          }
          const oldState = setEntries();
          const event: WorkerEvent = {
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
          const event: WorkerEvent = {
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
    const api: WorkerApi = {
      on(events: Event | Event[], callback: WorkerEventCallback) {
        for (const event of Array.isArray(events) ? events : [events]) {
          eventListeners[event] ??= new Set();
          eventListeners[event]!.add(callback);
        }
      },
      async getAttrs<T extends [...string[]]>(...keys: T) {
        return pick(keys, state) as Record<T[number], string>;
      },
      async setAttrs(attrs: Record<string, string | number>) {
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
          console.log({
            inputs,
            selects,
            textareas,
            others,
          });
          for (const el of others) {
            if (value != undefined) {
              console.log("setting", value, el);
            }
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
      },
    };
    worker(api);
    for (const event of eventListeners["sheet:opened"] || []) {
      event();
    }

    for (const [key, value] of Object.entries(state)) {
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
        if (value != undefined && value != el.textContent) {
          console.log("setting", value, el);
        }
        el.textContent = String(value);
      }
    }
  }, [form, worker]);

  return setForm;
};
