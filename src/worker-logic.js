import { fromPairs, range } from "ramda";
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
        const orderedDisciplines = Object.values(attrs);
        const orderedNames = fromPairs(
          range(1, 16).map((j) => [`Discipline${j}Name`, orderedDisciplines[j]?.name ?? ""])
        );
        console.log("setting boosts", boosts, links, orderedNames);
        setAttrs({
          ...boosts,
          ...links,
          ...orderedNames,
        });
      });

      this.initRolls();
      this.initCombatSheet();
    }

    initRolls() {
      console.log("translation language is", getTranslationLanguage());
      const cardinalPluralizer = new Intl.PluralRules(getTranslationLanguage() || navigator.language);
      on("clicked:roll_willpower", () => {
        getAttrs(["Willpower"], ({ Willpower }) => {
          // todo support 30+dice scenario
          const diceCount = i(Willpower);
          const title = `${getTranslationByKey("dice-check-label")}: ${getTranslationByKey("willpower-u")}`;
          const difficultyTemplate = `?{${getTranslationByKey("difficulty-label")}|6 }`;
          const template = [
            `&{template:attribute}`,
            `{{name=@{Name}}}`,
            `{{rollTitle=${title}}}`,
            `{{difficultyLabel=${getTranslationByKey("difficulty-label")}}}`,
            `{{count=[[${diceCount}]]}}`,
            `{{successes=[[0]]}}`,
            `{{fails=[[0]]}}`,
            `{{difficulty=[[0]]}}`,
            `{{result=[[0]]}}`,
            `{{roll=[[${diceCount}d10>${difficultyTemplate}cs>10]]}}`,
            ...range(1, diceCount + 1).map((j) => `{{dice${j}=[[0]]}}`),
            ``,
          ].join(" ");
          console.log("rolling willpower", template);
          startRoll(template, (results) => {
            const { roll } = results.results;
            const difficulty = i(roll.expression.replace(`${diceCount}d10>`, "").replace("cs>10", ""));
            const successes = roll.result;
            const fails = roll.dice.filter((d) => d === 1).length;
            const resultNumber = Math.max(0, successes - fails);
            let result;
            console.log(
              "pluralizing roll result",
              resultNumber,
              cardinalPluralizer.select(resultNumber),
              `${resultNumber} ${getTranslationByKey(`roll-success-pluralize-cardinal-${cardinalPluralizer.select(resultNumber)}`)}`
            );
            if (resultNumber > 0) {
              // eslint-disable-next-line sonarjs/no-nested-template-literals
              result = `${resultNumber} ${getTranslationByKey(`roll-success-pluralize-cardinal-${cardinalPluralizer.select(resultNumber)}`)}`;
            } else if (fails > 0 && successes === 0) {
              result = getTranslationByKey("roll-critical-fail");
            } else {
              result = getTranslationByKey("roll-fail");
            }
            const rollData = {
              ...fromPairs(roll.dice.sort((a, b) => a - b).map((d, j) => [`dice${j + 1}`, d])),
              fails,
              successes,
              difficulty,
              result,
            };
            console.log("finishing roll", rollData, results);
            finishRoll(results.rollId, rollData);
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

      // eslint-disable-next-line unicorn/consistent-function-scoping
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

      const roll = (state, rollAttr, useHealth, getter) => {
        const attrs = getRollAttrs(state);
        const healthModifier = useHealth === "on" ? i(state.Health) : 0;
        const potenceBonus = i(state.potenceSpent);
        const value = getter(attrs[rollAttr], attrs);
        // todo use celerity
        if (Number.isNaN(value)) {
          return " ";
        }
        return [
          Math.max(0, getter(attrs[rollAttr], attrs) + healthModifier),
          potenceBonus && rollAttr === "Strength" ? ` +${potenceBonus}` : "",
        ].join("");
      };

      const damageRoll = (state, rollAttr, getter) => {
        const attrs = getRollAttrs(state);
        const healthModifier = state.useHealthInCombat === "on" ? i(state.Health) : 0;
        const potenceBonus = i(state.potenceSpent);
        const value = getter(attrs[rollAttr], attrs);
        // todo use celerity
        if (Number.isNaN(value)) {
          return " ";
        }
        return [
          Math.max(0, value + (rollAttr === "Strength" ? healthModifier : 0)),
          potenceBonus && rollAttr === "Strength" ? ` +${potenceBonus}` : "",
        ].join("");
      };

      declareRepeatingDependency(
        {
          groupName: "brawlCombatDice",
          extraKeys: ["rollAttr", "rollSkill"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill }, state) => ({
          combatRollNumber: roll(state, rollAttr, state.useHealthInCombat, (attr) => attr + i(state[rollSkill])),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "powers",
          extraKeys: ["rollAttr", "rollSkill"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill }, state) => ({
          rollNumber: roll(state, rollAttr, state.useHealthInCombat, (attr) => attr + i(state[rollSkill])),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "combinationPowers",
          extraKeys: ["rollAttr", "rollSkill"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill }, state) => ({
          rollNumber: roll(state, rollAttr, state.useHealthInCombat, (attr) => attr + i(state[rollSkill])),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "meleeCombatDice",
          extraKeys: ["rollAccuracy", "rollAttr", "rollSkill", "damageAttr", "damageBonus"],
          globalDependencies: [...attributesWithBoosts, "CurrentMeleeWeaponDamage"],
        },
        ({ rollAttr, rollSkill, rollAccuracy, damageAttr, damageBonus }, { CurrentMeleeWeaponDamage, ...state }) => ({
          combatRollNumber: roll(
            state,
            rollAttr,
            state.useHealthInCombat,
            (attribute) => attribute + i(state[rollSkill]) + i(rollAccuracy)
          ),
          damageRollNumber: damageRoll(
            state,
            damageAttr,
            (attr) => attr + i(damageBonus) + i(CurrentMeleeWeaponDamage)
          ),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "rangedCombatDice",
          extraKeys: ["rollAccuracy", "rollAttr", "rollSkill", "damageBonus"],
          globalDependencies: [...attributesWithBoosts, "CurrentRangedWeaponDamage"],
        },
        ({ rollAttr, rollSkill, rollAccuracy, damageBonus }, { CurrentRangedWeaponDamage, ...state }) => ({
          combatRollNumber: roll(
            state,
            rollAttr,
            state.useHealthInCombat,
            (attr) => attr + i(state[rollSkill]) + i(rollAccuracy)
          ),
          damageRollNumber: damageRoll(state, "", () => i(damageBonus) + i(CurrentRangedWeaponDamage)),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "MeleeWeapon",
          extraKeys: ["Damage", "damageAttr", "BrawlFlag"],
          globalDependencies: attributesWithBoosts,
        },
        ({ Damage, damageAttr, BrawlFlag }, state) => ({
          combatRollNumber: roll(
            state,
            "Dexterity",
            state.useHealthInCombat,
            (attr) => attr + i(BrawlFlag === "on" ? state.brawl : state.melee)
          ),
          damageRollNumber: damageRoll(state, damageAttr, (attr) => attr + i(Damage)),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "RangedWeapon",
          extraKeys: ["rollAccuracy", "Damage"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAccuracy, Damage }, $) => ({
          combatRollNumber: roll($, "Dexterity", $.useHealthInCombat, (attr) => attr + i($.firearms) + i(rollAccuracy)),
          damageRollNumber: damageRoll($, "Strength", () => i(Damage)),
        })
      );

      declareRepeatingDependency(
        {
          groupName: "powers",
          extraKeys: ["rollAttr", "rollSkill", "rollUseHealth"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill, rollUseHealth }, $) => ({
          rollNumber: roll($, rollAttr, rollUseHealth, (attr) => attr + i($[rollSkill])),
        })
      );
      declareRepeatingDependency(
        {
          groupName: "combinationPowers",
          extraKeys: ["rollAttr", "rollSkill", "rollUseHealth"],
          globalDependencies: attributesWithBoosts,
        },
        ({ rollAttr, rollSkill, rollUseHealth }, $) => ({
          rollNumber: roll($, rollAttr, rollUseHealth, (attr) => attr + i($[rollSkill])),
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
                  [`Current${type}damageAttr`]: "",
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
                      [`Current${type}damageAttr`]: attrs[`repeating_${type}_damageAttr`],
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
      // https://www.reddit.com/r/vtm/comments/164i1vj/revised_vampire_generation_chart_also_how_to_stat/
      BloodPoolMax: ({ Generation }) =>
        [
          undefined, // 0
          undefined, // 1
          undefined, // 2
          undefined, // 3
          undefined, // 4
          40, // 5
          30, // 6
          20, // 7
          15, // 8
          14, // 9
          13, // 10
          12, // 11
          11, // 12
          10, // 13
          10, // 14
          10, // 15
        ][i(Generation)],
      BloodPerTurn: ({ Generation }) =>
        [
          undefined, // 0
          undefined, // 1
          undefined, // 2
          undefined, // 3
          undefined, // 4
          8, // 5
          6, // 6
          4, // 7
          3, // 8
          2, // 9
          1, // 10
          1, // 11
          1, // 12
          1, // 13
          1, // 14
          1, // 15
        ][i(Generation)],
      pathNumberComputed: ({ pathNumber }) => pathNumber,
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
