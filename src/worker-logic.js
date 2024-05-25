import {
  attributes,
  cars,
  DamageType,
  defenceManeuvers,
  meleeManeuvers,
  meleeWeapons,
  rangedManeuvers,
  rangedWeapons,
  skills,
  talents,
} from "./consts.ts";
import "./custom.d.ts";
import { WorkerLogic } from "./WorkerLogic.js";

const Roll20 = {
  sectionIDs: (group, callback) => getSectionIDs(`repeating_${group}`, callback),
  resetRepeatingField: () => {
    try {
      trigger?.({
        eventname: "resetRepeatingField",
      });
    } catch {
      console.log("failed to reset workerGlobals");
    }
  },
  findIntl: (object, value, prefix) => {
    const key = Object.keys(object).find((k) => value === k || value === getTranslationByKey(`${prefix}-${k}-label`));
    return object[key];
  },

  getGroupAttrs: (group, keys, globalKeys, cb) => {
    console.log("getGroupAttrs", group, keys, globalKeys);
    if (cb === undefined && globalKeys instanceof Function) {
      cb = globalKeys;
      globalKeys = undefined;
    }
    getSectionIDs(`repeating_${group}`, (ids) => {
      const queryKeys = [
        ...globalKeys,
        ...ids.flatMap((groupID) => keys.map((key) => `repeating_${group}_${groupID}_${key}`)),
      ];
      getAttrs(queryKeys, (attrs) => {
        console.log("getGroupAttrs parsing", queryKeys, attrs, group, keys, globalKeys);
        const globalAttrs = {};
        const groupedAttrs = {};
        for (const [key, value] of Object.entries(attrs)) {
          if (key.startsWith(`repeating_${group}_`)) {
            const groupId = key.replace(`repeating_${group}_`, "").replace(/_.+/, "");
            const localKey = key.replace(`repeating_${group}_${groupId}_`, "");
            groupedAttrs[groupId] ??= {};
            groupedAttrs[groupId][localKey] = value;
          } else {
            globalAttrs[key] = value;
          }
        }
        console.log("got group attrs", group, keys, globalKeys, groupedAttrs, globalAttrs);
        cb(groupedAttrs, globalAttrs);
      });
    });
  },

  setGroupAttrs: (group, attrs, globalAttrs = {}) => {
    const resultingAttrs = Object.assign(
      { ...globalAttrs },
      ...Object.entries(attrs).map(([groupID, groupAttrs]) =>
        Object.fromEntries(
          Object.entries(groupAttrs).map(([key, value]) => [`repeating_${group}_${groupID}_${key}`, value])
        )
      )
    );
    console.log("setting group attrs", group, attrs, globalAttrs, resultingAttrs);
    setAttrs(resultingAttrs);
  },
};

const i = (val) => {
  if (typeof val === "number") {
    return val;
  }
  return Number.parseInt(val) || 0;
};

const onRepeatingChange = (group, props, cb) => {
  const compute = (e) => {
    Roll20.sectionIDs(group, (idarray) => {
      console.log("computing onRepeatingChange", group, props, idarray, e);
      const keys = idarray.flatMap((id) => props.map((prop) => `repeating_${group}_${id}_${prop}`));
      Roll20.resetRepeatingField();
      getAttrs(keys, (attrs) => {
        const result = Object.fromEntries(idarray.map((id) => [id, {}]));
        console.log("applying onRepeatingChange", keys, attrs);
        for (const [key, value] of Object.entries(attrs)) {
          console.log("searching for key", key, idarray, value);
          const id = idarray.find((sectionID) => key.startsWith(`repeating_${group}_${sectionID}`));
          result[id][key.replace(`repeating_${group}_${id}_`, "")] = value;
        }
        cb(result);
      });
    });
  };
  on(
    [
      `change:repeating_${group}`,
      `remove:repeating_${group}`,
      ...props.map((p) => `change:repeating_${group}_${p}`),
    ].join(" "),
    compute
  );
  compute();
};
const declareRepeatingDependency = ({ groupName, extraKeys, globalDependencies }, getter) => {
  const compute = (e) => {
    console.log("declareRepeatingDependency triggered", e, groupName, extraKeys);
    Roll20.getGroupAttrs(groupName, extraKeys, globalDependencies, (groupedAttrs, globalAttrs) => {
      console.log("declareRepeatingDependency state", groupedAttrs, globalAttrs);
      for (const [id, attrs] of Object.entries(groupedAttrs)) {
        console.log("declareRepeatingDependency updating group", groupName, attrs, globalAttrs, {
          [id]: getter(attrs, globalAttrs),
        });
        Roll20.setGroupAttrs(groupName, {
          [id]: getter(attrs, globalAttrs),
        });
      }
    });
  };
  on(
    [
      ...globalDependencies.map((attr) => `change:${attr}`),
      ...Object.keys(talents).map((name) => `change:${name}`),
      ...Object.keys(skills).map((name) => `change:${name}`),
      ...extraKeys.map((key) => `change:repeating_${groupName}:${key}`),
    ].join(" "),
    compute
  );
  compute();
};

export const worker = () =>
  new (class extends WorkerLogic {
    initFirstTime(cb) {
      const attrs = {
        [`repeating_disciplines_${generateRowID()}_name`]: "",
        [`repeating_disciplines_${generateRowID()}_name`]: "",
        [`repeating_disciplines_${generateRowID()}_name`]: "",
        [`repeating_backgrounds_${generateRowID()}_name`]: "",
        [`repeating_backgrounds_${generateRowID()}_name`]: "",
        [`repeating_backgrounds_${generateRowID()}_name`]: "",
      };

      for (const [key, [attr, skill]] of Object.entries(defenceManeuvers)) {
        const rowID = `repeating_brawlCombatDice_${generateRowID()}`;
        attrs[`${rowID}_rollName`] = getTranslationByKey(`maneuver-defence-${key}`);
        attrs[`${rowID}_rollAttr`] = attr;
        attrs[`${rowID}_rollSkill`] = skill;
      }
      for (const [key, [attr, skill, accuracy, difficulty, damageAttr = 0, damageBonus = 0]] of Object.entries(
        meleeManeuvers
      )) {
        const rowID = `repeating_meleeCombatDice_${generateRowID()}`;
        attrs[`${rowID}_rollName`] = getTranslationByKey(`maneuver-melee-${key}`);
        attrs[`${rowID}_rollAttr`] = attr;
        attrs[`${rowID}_rollSkill`] = skill;
        attrs[`${rowID}_rollDifficulty`] = Number(difficulty) + 6;
        attrs[`${rowID}_rollAccuracy`] = accuracy || "";
        attrs[`${rowID}_damageAttr`] = damageAttr;
        attrs[`${rowID}_damageBonus`] = damageBonus;
      }
      for (const [key, [attr, skill, accuracy, difficulty]] of Object.entries(rangedManeuvers)) {
        const rowID = `repeating_rangedCombatDice_${generateRowID()}`;
        attrs[`${rowID}_rollName`] = getTranslationByKey(`maneuver-ranged-${key}`);
        attrs[`${rowID}_rollAttr`] = attr;
        attrs[`${rowID}_rollSkill`] = skill;
        attrs[`${rowID}_rollAccuracy`] = accuracy || "";
        attrs[`${rowID}_rollDifficulty`] = Number(difficulty) + 6;
      }
      console.log("setting initial attrs", attrs);
      setAttrs(attrs);
      cb();
    }

    init() {
      const boundDisciplines = new Set(["celerity", "potence"]);
      const boundDisciplineNames = [...boundDisciplines].map((key) => [
        key,
        getTranslationByKey(`discipline-name-${key}`).toLowerCase(),
      ]);
      const resolveName = (name) => boundDisciplineNames.find((keys) => keys.includes(name.toLowerCase()))?.[0];

      onRepeatingChange("disciplines", ["name", "points"], (attrs) => {
        const boosts = {};
        const links = {};
        for (const [key, { name, points = 0 }] of Object.entries(attrs)) {
          const resolvedName = resolveName(name);
          const isBound = boundDisciplines.has(resolvedName);
          if (isBound) {
            boosts[`${resolvedName}Boost`] = points ?? 0;
          }
          links[`repeating_disciplines_${key}_linked`] = isBound ? "on" : "off";
        }
        console.log("setting boosts", boosts, links);
        setAttrs({
          ...boosts,
          ...links,
        });
      });

      this.initRolls();
      this.initCombatSheet();
    }

    initRolls() {
      on("clicked:roll_willpower", (eventInfo) => {
        const rollExpression = `1d100!>95 + @{skill_bonus}[Bonus] + @{skill_mod}[Mod]`;
        const rollBase = `&{template:test} {{name=Test}} {{roll1=[[${rollExpression}]]}} {{downroll=[[0]]}} {{roll1name=${rollExpression}}} {{roll1mod=- [[1d100!>95]]}} {{roll1final=[[0]]}}`;

        getAttrs(["Name", "Willpower"], ({ Name, Willpower }) => {
          const template = `&{template:wodAttribute} {{name=${Name}}} {{roll1=[[${Willpower}d10]]}}`;
          console.log("rolling", template);
          startRoll(template, (results) => {
            console.log(results);
            const total = results.results.roll1.result;
            const computed = total % 4;

            finishRoll(results.rollId, {
              roll1: computed,
            });
          });
        });
      });
    }

    initCombatSheet() {
      const attributesWithBoosts = [
        ...attributes,
        "celerityBoost",
        "celeritySpent",
        "potenceBoost",
        "potenceSpent",
        "useHealthInCombat",
        "Health",
      ];

      const getRollAttrs = ($) => ({
        ...$,
        Strength: i($.Strength) + Math.max(0, i($.potenceBoost) - i($.potenceSpent)),
        Dexterity: i($.Dexterity) + Math.max(0, i($.celerityBoost) - i($.celeritySpent)),
        Stamina: i($.Stamina),
        Charisma: i($.Charisma),
        Manipulation: i($.Manipulation),
        Appearance: i($.Appearance),
        Perception: i($.Perception),
        Intelligence: i($.Intelligence),
        Wits: i($.Wits),
      });

      const combatRoll = ({ useHealthInCombat, Health, potenceSpent, ...$ }, rollAttr, getter) => {
        const attrs = getRollAttrs($);
        const healthModifier = useHealthInCombat === "on" ? i(Health) : 0;
        const potenceBonus = i(potenceSpent);
        // todo potence
        return [
          Math.max(0, getter(attrs[rollAttr], attrs) + healthModifier),
          potenceBonus && rollAttr === "Strength" ? ` +${potenceBonus}` : "",
        ].join("");
      };

      const damageRoll = ({ useHealthInCombat, Health, potenceSpent, ...$ }, rollAttr, getter) => {
        const attrs = getRollAttrs($);
        const healthModifier = useHealthInCombat === "on" ? i(Health) : 0;
        const potenceBonus = i(potenceSpent);
        return [
          Math.max(0, getter(attrs[rollAttr], attrs) + rollAttr === "Strength" ? healthModifier : ""),
          healthModifier || "",
          potenceBonus && rollAttr === "Strength" ? ` +${potenceBonus}` : "",
        ].join("");
      };

      declareRepeatingDependency(
        {
          groupName: "brawlCombatDice",
          extraKeys: ["rollAttr", "rollSkill"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill }, $) => ({
          combatRollNumber: combatRoll($, rollAttr, (attr) => attr + i($[rollSkill])),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "meleeCombatDice",
          extraKeys: ["rollAccuracy", "rollAttr", "rollSkill", "damageAttr", "damageBonus"],
          globalDependencies: [...attributesWithBoosts, "CurrentMeleeWeaponDamage"],
        },
        ({ rollAttr, rollSkill, rollAccuracy, damageAttr, damageBonus }, { CurrentMeleeWeaponDamage, ...$ }) => ({
          combatRollNumber: combatRoll($, rollAttr, (attribute) => attribute + i($[rollSkill]) + i(rollAccuracy)),
          damageRollNumber: damageRoll($, damageAttr, (attr) => attr + i(damageBonus) + i(CurrentMeleeWeaponDamage)),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "rangedCombatDice",
          extraKeys: ["rollAccuracy", "rollAttr", "rollSkill", "damageAttr", "damageBonus"],
          globalDependencies: [...attributesWithBoosts, "CurrentRangedWeaponDamage"],
        },
        ({ rollAttr, rollSkill, rollAccuracy, damageAttr }, { CurrentRangedWeaponDamage, ...$ }) => ({
          combatRollNumber: combatRoll($, rollAttr, (attr) => attr + i($[rollSkill]) + i(rollAccuracy)),
          damageRollNumber: damageRoll($, damageAttr, (attr) => attr + i(CurrentRangedWeaponDamage)),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "MeleeWeapons",
          extraKeys: ["rollAccuracy", "rollAttr", "Damage", "rollSkill"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill, rollAccuracy, damageAttr }, $) => ({
          combatRollNumber: combatRoll($, rollAttr, (attr) => attr + i($[rollSkill]) + i(rollAccuracy)),
          damageRollNumber: damageRoll($, damageAttr, (attr) => attr + i($[rollSkill]) + i(rollAccuracy)),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "RangedWeapons",
          extraKeys: ["rollAccuracy", "rollAttr", "Damage", "rollSkill"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill, rollAccuracy, damageAttr }, $) => ({
          combatRollNumber: combatRoll($, rollAttr, (attr) => attr + i($[rollSkill]) + i(rollAccuracy)),
          damageRollNumber: damageRoll($, damageAttr, (attr) => attr + i($[rollSkill]) + i(rollAccuracy)),
        })
      );

      for (const type of ["MeleeWeapon", "RangedWeapon"]) {
        on(`change:repeating_${type}:Equipped`, (e) => {
          const enabled = e.newValue === "on";
          const [, group, sourceId] = e.sourceAttribute.split("_");
          if (!enabled) {
            getAttrs([`Current${type}ID`], ({ [`Current${type}ID`]: currentID }) => {
              if (currentID === sourceId) {
                setAttrs({
                  [`Current${type}ID`]: "",
                  [`Current${type}Name`]: "",
                  [`Current${type}Damage`]: 0,
                });
              }
            });
          } else {
            getAttrs(
              [
                `repeating_${type}_WeaponName`,
                `repeating_${type}_Type`,
                `repeating_${type}_Damage`,
                `repeating_${type}_damageAttr`,
                `repeating_${type}_damageBonus`,
              ],
              (attrs) => {
                Roll20.sectionIDs(group, (ids) => {
                  Roll20.setGroupAttrs(
                    group,
                    {
                      ...Object.fromEntries(ids.map((id) => [id, { Equipped: false }])),
                      [sourceId]: {},
                    },
                    {
                      [`Current${type}ID`]: sourceId,
                      [`Current${type}Name`]:
                        attrs[`repeating_${type}_WeaponName`] || attrs[`repeating_${type}_Type`] || "???",
                      [`Current${type}Damage`]: attrs[`repeating_${type}_Damage`],
                    }
                  );
                });
              }
            );
          }
        });
        on(`change:repeating_${type}:WeaponName change:repeating_${type}:Type change:repeating_${type}:Damage`, () => {
          getAttrs(
            [
              `repeating_${type}_Equipped`,
              `repeating_${type}_WeaponName`,
              `repeating_${type}_Type`,
              `repeating_${type}_Damage`,
            ],
            (attrs) => {
              if (attrs[`repeating_${type}_Equipped`] !== "on") {
                return;
              }
              setAttrs({
                [`Current${type}Name`]:
                  attrs[`repeating_${type}_WeaponName`] || attrs[`repeating_${type}_Type`] || "???",
                [`Current${type}Damage`]: attrs[`repeating_${type}_Damage`],
              });
            }
          );
        });
      }
    }

    dependencies = {
      // todo take health into account
      WalkSpeed: () => 7,
      JogSpeed: ({ Dexterity, celerityBoost, MiscSpeed }) => 12 + i(Dexterity) + i(celerityBoost) + i(MiscSpeed),
      RunSpeed: ({ Dexterity, celerityBoost, MiscSpeed }) => 20 + (3 * i(Dexterity) + i(celerityBoost) + i(MiscSpeed)),
      // todo boosts
      willpowerRoll: ({ Willpower, WillpowerBoost }) => i(Willpower) + i(WillpowerBoost),
      // todo boosts
      willpowerUsedRoll: ({ WillpowerUsed, WillpowerBoost }) => i(WillpowerUsed) + i(WillpowerBoost),
      initiativeBonus: ({ Dexterity, Wits, celerityBoost, initiativeModifier }) =>
        `+${i(Dexterity) + i(Wits) + i(celerityBoost) + i(initiativeModifier)}`,
    };

    repeatingDefaults = {
      MeleeWeapon: {
        Type: (type) => {
          const weapon = Roll20.findIntl(meleeWeapons, type, "weapon-melee");
          if (weapon)
            return {
              Damage: weapon[0],
              Lethality: weapon[1],
              Conceal: weapon[2],
            };
        },
      },
      RangedWeapon: {
        Type: (type) => {
          const weapon = Roll20.findIntl(rangedWeapons, type, "weapon-ranged");
          if (weapon) {
            return {
              Lethality: DamageType.Lethal,
              Damage: weapon[0],
              Range: weapon[1],
              Rate: weapon[2],
              Clip: weapon[3],
              Conceal: weapon[4],
            };
          }
        },
      },
      vehicles: {
        type: (type) => {
          const car = Roll20.findIntl(cars, type, "vehicle-type");
          if (car) {
            return {
              SafeSpeed: car[0],
              MaxSpeed: car[1],
              Maneuver: car[2],
            };
          }
        },
      },
    };
  })();
