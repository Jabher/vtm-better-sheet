// eslint-disable-next-line import/no-unresolved
import generateUUID from '../../util/generateUUID';

/**
 * @classdesc A shim to provide jquery functionality to sheet workers
 */
export default class JqueryShim {
  /**
   * @constructor
   *
   * @param {string} selector - The selector to target the correct html elements. Will
   * be scoped to the charsheet iframe
   * @param {MessagePort} port - The port used for messaging between the sheetworker and
   * the vtt js
   * @param {object} workerGlobals - An object containing relevant sheet worker variables
   */
  constructor(selector, port, workerGlobals) {
    this.selector = selector;
    this.port = port;
    this.worker = workerGlobals;
  }

  /**
   * Sets up an event listener for the sheet worker. Limits events to an allowed list
   * to prevent overly frequent triggers
   *
   * @param {string} event - The type of event to listen to. Must be in the allowed eventType list
   * @param {function} callback - The callback to execute when the event is triggered
   *
   * @returns {JqueryShim} - Returns the class instance so that function calls can
   * potentially be stacked
   */
  on(event, callback) {
    // Make sure the event is on our allowed list
    const eventTypes = ['change', 'click', 'hover', 'mouseenter', 'mouseleave'];
    if (!eventTypes.includes(event)) {
      // eslint-disable-next-line no-console
      console.error(`Sheet Worker Error: "${event}" is not a supported event trigger.`);
      return this;
    }
    // A request id to match the event to it's callback
    const requestId = generateUUID();
    this.worker.registeredCallbacks[requestId] = callback;

    this.port.postMessage({
      type: 'addListener',
      selector: this.selector,
      characterId: this.worker.activeCharacterId,
      event,
      requestId,
    });

    return this;
  }

  /**
   * Helper function to handle "simple" jquery functions, basically anything with no return value
   * or callback (fire and forget).
   *
   * @param {string} type - The name of the jquery function
   * @param {object} params - The parameters for the function call
   *
   * @returns {JqueryShim} - Returns the class instance so that function calls can
   * potentially be stacked
   */
  simpleFunction(type, params) {
    // These functions all require an active character, they won't be available from the top level
    // of the sheet worker
    if (!this.worker.activeCharacterId) {
      // eslint-disable-next-line no-console
      console.error(`Sheet Worker Error: attempted to call ${type}, but no character is active in the sandbox.`);
      return this;
    }

    this.port.postMessage({
      selector: this.selector,
      characterId: this.worker.activeCharacterId,
      type,
      ...params,
    });

    return this;
  }

  /**
   * Shim for the jquery addClass function
   *
   * @param {string} classes - The name of classes to add
   *
   * @returns {JqueryShim} - Returns the class instance so that function calls can
   * potentially be stacked
   */
  addClass(classes) {
    return this.simpleFunction('addClass', { classes });
  }

  /**
   * Shim for the jquery removeClass function
   *
   * @param {string} classes - The name of classes to remove
   *
   * @returns {JqueryShim} - Returns the class instance so that function calls can
   * potentially be stacked
   */
  removeClass(classes) {
    return this.simpleFunction('removeClass', { classes });
  }

  /**
   * Shim for the jquery toggleClass function
   *
   * @param {string} classes - The name of classes to toggle
   *
   * @returns {JqueryShim} - Returns the class instance so that function calls can
   * potentially be stacked
   */
  toggleClass(classes) {
    return this.simpleFunction('toggleClass', { classes });
  }
}
