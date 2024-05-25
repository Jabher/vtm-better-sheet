declare function getActiveCharacterId(): string;

declare function getAttrs(attrs: string[], callback: (values: Array<string | number>) => any): void;
declare function setAttrs(
  propObj: Record<string, string | number>,
  opts: any,
  callback: (values: Array<string | number>) => any
): void;
declare function getSectionIDs(sectionName: string, callback: (values: string[]) => void): void;

// declare function setAttrsAsync(values: Record<string, string | number>): Promise<void>;
//
// declare function generateRowID(): string;
//
// declare function getSectionIDsAsync(key: `repeating_${string}`): Promise<string[]>;
//
// declare function removeRepeatingRow(key: string): Promise<void>;
