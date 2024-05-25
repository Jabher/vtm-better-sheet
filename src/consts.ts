export const cars = {
  bus: [95, 160, 3],
  suv: [110, 185, 6],
  f1: [225, 385, 10],
  truck: [95, 145, 3],
  aClass: [110, 210, 6],
  van: [110, 195, 6],
  premiumSedan: [135, 250, 7],
  sedan: [110, 195, 5],
  tank: [95, 160, 4],
  aClassRS: [160, 225, 7],
  sedanRS: [135, 265, 8],
  sportCar: [175, 255, 8],
  sportCoupe: [175, 240, 8],
  superCar: [210, 305, 9],
  oldTank: [50, 65, 3],
  semi: [110, 175, 4],
  vagon: [120, 200, 6],
} as const;
export const attributes = [
  "alertness",
  "athletics",
  "awareness",
  "brawl",
  "empathy",
  "expression",
  "intimidation",
  "leadership",
  "streetwise",
  "subterfuge",
] as const;
export const skills = [
  "animalken",
  "crafts",
  "drive",
  "etiquette",
  "firearms",
  "larceny",
  "melee",
  "performance",
  "stealth",
  "survival",
] as const;
export const knowledges = [
  "academics",
  "computer",
  "finance",
  "investigation",
  "law",
  "medicine",
  "occult",
  "politics",
  "science",
  "technology",
] as const;

export enum DamageType {
  Bashing = 0,
  Lethal = 2,
  Aggravated = 3,
}

export enum ConcealType {
  Pocket = 0,
  Jacket = 1,
  Trench = 2,
  Impossible = 3,
}

export const meleeWeapons: Record<string, [damage: number, type: DamageType, conceal: ConcealType]> = {
  sap: [+1, DamageType.Bashing, ConcealType.Pocket],
  club: [+2, DamageType.Bashing, ConcealType.Trench],
  knife: [+1, DamageType.Lethal, ConcealType.Jacket],
  sword: [+2, DamageType.Lethal, ConcealType.Trench],
  axe: [+3, DamageType.Lethal, ConcealType.Impossible],
  stake: [+1, DamageType.Lethal, ConcealType.Trench],
};

// todo ranged shoot modes
export const rangedWeapons: Record<
  string,
  [damage: number, range: number, speed: number, ammo: string, conceal: ConcealType]
> = {
  "light-revolver": [4, 12, 3, "6", ConcealType.Pocket],
  "heavy-revolver": [6, 35, 2, "6", ConcealType.Jacket],
  "light-pistol": [4, 20, 4, "15+1", ConcealType.Pocket],
  "heavy-pistol": [5, 25, 3, "13+1", ConcealType.Jacket],
  "rifle": [8, 200, 1, "3+1", ConcealType.Impossible],
  "light-smg": [4, 20, 3, "17+1", ConcealType.Jacket],
  "heavy-smg": [4, 50, 3, "30+1", ConcealType.Trench],
  "assault": [7, 150, 3, "30+1", ConcealType.Impossible],
  "shotgun": [8, 20, 1, "5+1", ConcealType.Trench],
  "shotgun-semiauto": [8, 20, 3, "6+1", ConcealType.Trench],
  "shotgun-crossbow": [5, 20, 1, "1", ConcealType.Trench],
};
