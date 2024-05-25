// function isRunningOnServer() {
//   return self.dispatchEvent == undefined;
// }
//
// function setActiveCharacterId(charId: string): string {
//   const oldAcid = getActiveCharacterId();
//   const msg = { id: "0", type: "setActiveCharacter", data: charId };
//   // if in a browser, use "dispatchEvent" to process the message
//   // otherwise, use the API (server) message processor, "onmessage"
//   if (isRunningOnServer()) {
//     self.onmessage?.({ data: msg });
//   } else {
//     self.dispatchEvent(Object.assign(new CustomEvent("message"), { data: msg }));
//   }
//   return oldAcid; //return what the value used to be, so calling code can be a little cleaner
// }
//
// const _sIn = setInterval;
// // @ts-expect-error intended
// setInterval = function (callback: () => void, timeout: number) {
//   const acid = getActiveCharacterId();
//   _sIn(() => {
//     const prevAcid = setActiveCharacterId(acid);
//     callback();
//     setActiveCharacterId(prevAcid);
//   }, timeout);
// };
// const _sto = setTimeout;
// // @ts-expect-error intended
// setTimeout = function (callback: () => void, timeout: number) {
//   const acid = getActiveCharacterId();
//   _sto(() => {
//     const prevAcid = setActiveCharacterId(acid);
//     callback();
//     setActiveCharacterId(prevAcid);
//   }, timeout);
// };
//
// export function getAttrsAsync(props: string[]) {
//   const acid = getActiveCharacterId();
//   let prevAcid: string;
//   return new Promise((resolve, reject) => {
//     prevAcid = setActiveCharacterId(acid);
//     try {
//       getAttrs(props, (values) => {
//         resolve(values);
//       });
//     } catch {
//       reject();
//     }
//   }).finally(() => {
//     setActiveCharacterId(prevAcid);
//   });
// }
//
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function setAttrsAsync(propObj: Record<string, string | number>, options: any) {
//   const acid = getActiveCharacterId();
//   let prevAcid: string;
//   return new Promise((resolve, reject) => {
//     prevAcid = setActiveCharacterId(acid);
//     try {
//       setAttrs(propObj, options, (values) => {
//         resolve(values);
//       });
//     } catch {
//       reject();
//     }
//   }).finally(() => {
//     setActiveCharacterId(prevAcid);
//   });
// }
//
// export function getSectionIDsAsync(sectionName: string) {
//   const acid = getActiveCharacterId();
//   let prevAcid: string;
//   return new Promise((resolve, reject) => {
//     prevAcid = setActiveCharacterId(acid);
//     try {
//       getSectionIDs(sectionName, (values) => {
//         resolve(values);
//       });
//     } catch {
//       reject();
//     }
//   }).finally(() => {
//     setActiveCharacterId(prevAcid);
//   });
// }
