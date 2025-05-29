// @ts-expect-error roll20
import { worker } from "./worker-logic.js";

const scope = typeof globalThis !== "undefined" ? globalThis : window;

// @ts-expect-error hack
if (!scope.workerInitialized) {
  // @ts-expect-error hack
  scope.workerInitialized = true;
  worker();
}
