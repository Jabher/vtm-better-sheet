import { I18n } from "./types.ts";

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
  "Strength",
  "Dexterity",
  "Stamina",
  "Charisma",
  "Manipulation",
  "Appearance",
  "Perception",
  "Intelligence",
  "Wits",
] as const;
export const talents = [
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

type Talent = (typeof talents)[number];
type Skill = (typeof skills)[number];
// type Knowledge = (typeof knowledges)[number];

enum Attribute {
  Strength = "Strength",
  Dexterity = "Dexterity",
  Stamina = "Stamina",
  Charisma = "Charisma",
  Manipulation = "Manipulation",
  Appearance = "Appearance",
  Perception = "Perception",
  Intelligence = "Intelligence",
  Wits = "Wits",
}

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

type Prefix<P extends string, P2 extends string = ""> = {
  [key in I18n]: key extends `${P}${infer V}${P2}` ? V : never;
}[I18n];

export const meleeWeapons: Record<
  Prefix<`weapon-melee-`, "-label">,
  [damage: number, type: DamageType, conceal: ConcealType]
> = {
  fists: [0, DamageType.Bashing, ConcealType.Pocket],
  sap: [+1, DamageType.Bashing, ConcealType.Pocket],
  club: [+2, DamageType.Bashing, ConcealType.Trench],
  knife: [+1, DamageType.Lethal, ConcealType.Jacket],
  sword: [+2, DamageType.Lethal, ConcealType.Trench],
  axe: [+3, DamageType.Lethal, ConcealType.Impossible],
  stake: [+1, DamageType.Lethal, ConcealType.Trench],
};

// todo ranged shoot modes
export const rangedWeapons: Record<
  Prefix<`weapon-ranged-`, "-label">,
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

export const defenceManeuvers: Record<Prefix<`maneuver-defence-`>, [attribute: Attribute, skill: Talent | Skill]> = {
  block: [Attribute.Dexterity, "brawl"],
  parry: [Attribute.Dexterity, "melee"],
  evasion: [Attribute.Dexterity, "athletics"],
};

export const meleeManeuvers: Record<
  Prefix<`maneuver-melee-`>,
  [
    attribute: Attribute,
    skill: Talent | Skill,
    accuracy: number,
    complexity: number,
    damageAttribute?: Attribute,
    damageExtra?: number,
  ]
> = {
  attack: [Attribute.Strength, "brawl", 0, 0, Attribute.Strength, 0],
  throw: [Attribute.Strength, "brawl", 0, +1, Attribute.Strength, +1],
  grapple: [Attribute.Strength, "brawl", 0, 0],
  clinch: [Attribute.Strength, "brawl", 0, 0, Attribute.Strength],
  sweeping: [Attribute.Dexterity, "melee", 0, +1, Attribute.Strength],
  disarm: [Attribute.Strength, "melee", 0, +1],
  claws: [Attribute.Dexterity, "brawl", 0, 0, Attribute.Strength, +1],
  foot: [Attribute.Strength, "brawl", 0, +1, Attribute.Strength, +1],
  bite: [Attribute.Dexterity, "brawl", 1, 0, Attribute.Strength, +1],
};

export const rangedManeuvers: Record<
  Prefix<`maneuver-ranged-`>,
  [attribute: Attribute, skill: Talent | Skill, accuracy: number | null, difficulty: number]
> = {
  quickfire: [Attribute.Dexterity, "firearms", null, 0],
  longburst: [Attribute.Dexterity, "firearms", +10, +2],
  shortburst: [Attribute.Dexterity, "firearms", +2, +1],
  shelling: [Attribute.Dexterity, "firearms", +10, +2],
};
