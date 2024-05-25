declare type SectionID = string;
declare type RowID = string;
declare type RollID = string;
declare type Roll20Value = string | number | boolean;

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

declare function getAttrs<T extends Record<string, Roll20Value>>(keys: [...K[]], callback: (args: Pick<T, (typeof keys)[number]>) => void): void;

declare function setAttrs(
    propObj: Record<string, Roll20Value>,
    opts: { silent?: boolean },
    callback?: (values: Array<Roll20Value>) => any
): void;
declare function setAttrs(propObj: Record<string, Roll20Value>, callback?: () => any): void;

declare function getSectionIDs(sectionName: string, callback: (values: SectionID[]) => void): void;

declare function generateRowID(): RowID;

declare function removeRepeatingRow(rowID: RowID): void;

declare function setSectionOrder(sectionName: string, sectionArray: Record<string, Roll20Value>[], callback: () => void);

declare function getTranslationByKey(key: I18n): string;

declare function getTranslationLanguage(): string;

declare function startRoll(roll: string, callback: (rollResult: RollResult) => void): void;

declare function finishRoll(rollID: RollID): void;

declare type WorkerEvent = {
    sourceAttribute: string;
    sourceType: "player" | "sheetworker";
    previousValue: Roll20Value;
    newValue: Roll20Value;
    // removedInfo: string;
    // triggerName: string;
};

declare type WorkerEventCallback = (eventInfo: WorkerEvent) => any;
