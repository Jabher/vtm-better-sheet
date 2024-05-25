import { I18n } from "../types.ts";

type SectionID = string;
type RowID = string;
type RollID = string;
type Value = string | number;
interface Values<T = string> extends Record<T, Value> {}

type RollResult = {
  rollID: RollID;
  results: Record<
    string,
    {
      result: number;
      dice: number[];
      expression: string;
      rolls: {
        dice: number;
        sides: number;
        results: number[];
      }[];
    }
  >;
};

declare function getActiveCharacterId(): string;
declare function on(events: string, callback: WorkerEventCallback): void;
declare function getAttrs<T extends string>(keys: [...T[]], callback: (args: Values<T>) => void): void;
declare function setAttrs(propObj: Values, opts: { silent?: boolean }, callback?: (values: Array<Value>) => any): void;
declare function setAttrs(propObj: Values, callback?: () => any): void;
declare function getSectionIDs(sectionName: string, callback: (values: SectionID[]) => void): void;
declare function generateRowID(): RowID;
declare function removeRepeatingRow(rowID: RowID): void;
declare function setSectionOrder(sectionName: string, sectionArray: Record<string, Value>[], callback: () => void);
declare function getTranslationByKey(key: I18n): string;
declare function getTranslationLanguage(): string;
declare function startRoll(roll: string, callback: (rollResult: RollResult) => void): void;
declare function finishRoll(rollID: RollID): void;
declare type WorkerEvent = {
  sourceAttribute: string;
  sourceType: "player" | "sheetworker";
  previousValue: Value;
  newValue: Value;
  // removedInfo: string;
  // triggerName: string;
};

declare type WorkerEventCallback = (eventInfo: WorkerEvent) => any;
