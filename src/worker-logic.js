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
        eventname: "reset_repeating_field",
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
    if (cb == undefined && globalKeys instanceof Function) {
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

const int = (val) => {
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
const declareRepeatingDependency = (groupName, extraKeys, globalDependencies, getter) => {
  const compute = (e) => {
    console.log("declareRepeatingDependency triggered", e, groupName, extraKeys);
    Roll20.getGroupAttrs(groupName, extraKeys, globalDependencies, (groupedAttrs, globalAttrs) => {
      console.log("declareRepeatingDependency state", groupedAttrs, globalAttrs);
      for (const [id, attrs] of Object.entries(groupedAttrs)) {
        console.log("declareRepeatingDependency updating group", groupName, {
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

      for (const [key, [attribute, skill]] of Object.entries(defenceManeuvers)) {
        const rowID = `repeating_brawlCombatDice_${generateRowID()}`;
        attrs[`${rowID}_rollName`] = getTranslationByKey(`maneuver-defence-${key}`);
        attrs[`${rowID}_rollAttribute`] = attribute;
        attrs[`${rowID}_rollSkill`] = skill;
      }
      for (const [
        key,
        [attribute, skill, accuracy, difficulty, damageAttribute = 0, damageExtra = 0],
      ] of Object.entries(meleeManeuvers)) {
        const rowID = `repeating_meleeCombatDice_${generateRowID()}`;
        attrs[`${rowID}_rollName`] = getTranslationByKey(`maneuver-melee-${key}`);
        attrs[`${rowID}_rollAttribute`] = attribute;
        attrs[`${rowID}_rollSkill`] = skill;
        attrs[`${rowID}_rollDifficulty`] = Number(difficulty) + 6;
        attrs[`${rowID}_rollAccuracy`] = accuracy || "";
        attrs[`${rowID}_damageAttribute`] = damageAttribute;
        attrs[`${rowID}_damageExtra`] = damageExtra;
      }
      for (const [key, [attribute, skill, accuracy, difficulty]] of Object.entries(rangedManeuvers)) {
        const rowID = `repeating_rangedCombatDice_${generateRowID()}`;
        attrs[`${rowID}_rollName`] = getTranslationByKey(`maneuver-ranged-${key}`);
        attrs[`${rowID}_rollAttribute`] = attribute;
        attrs[`${rowID}_rollSkill`] = skill;
        attrs[`${rowID}_rollAccuracy`] = accuracy || "";
        attrs[`${rowID}_rollDifficulty`] = Number(difficulty) + 6;
      }
      console.log("setting initial attrs", attrs);
      setAttrs(attrs);
      cb();
    }

    init() {
      const boundDisciplines = {
        celerity: undefined,
        potence: undefined,
      };
      const boundDisciplineNames = Object.keys(boundDisciplines).map((key) => [
        key,
        getTranslationByKey(`discipline-name-${key}`).toLowerCase(),
      ]);
      const resolveName = (name) => boundDisciplineNames.find((keys) => keys.includes(name.toLowerCase()))?.[0];

      onRepeatingChange("disciplines", ["name", "points"], (attrs) => {
        const names = Object.fromEntries(Object.entries(attrs).map(([key, props]) => [resolveName(props.name), key]));
        for (const key of Object.keys(boundDisciplines)) {
          boundDisciplines[key] = names[key];
        }
        console.log("boundDisciplines", boundDisciplines);
        const boosts = Object.fromEntries(
          Object.entries(boundDisciplines).map(([key, value]) => [`${key}Boost`, attrs[value]?.points ?? 0])
        );
        console.log("setting boosts", boosts);
        setAttrs(boosts);
      });

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

      declareRepeatingDependency(
        "brawlCombatDice",
        ["rollAttribute", "rollSkill"],
        attributes,
        ({ rollAttribute, rollSkill }, attrs) => ({
          combatRollNumber: int(attrs[rollAttribute]) + int(attrs[rollSkill]),
        })
      );

      declareRepeatingDependency(
        "meleeCombatDice",
        ["rollAccuracy", "rollAttribute", "rollSkill"],
        attributes,
        ({ rollAttribute, rollSkill, rollAccuracy }, attrs) => ({
          combatRollNumber: int(attrs[rollAttribute]) + int(attrs[rollSkill]) + int(rollAccuracy),
        })
      );

      declareRepeatingDependency(
        "meleeCombatDice",
        ["rollAccuracy", "rollAttribute", "rollSkill", "damageAttribute"],
        attributes,
        ({ rollAttribute, rollSkill, rollAccuracy, damageAttribute }, attrs) => ({
          combatRollNumber: int(attrs[rollAttribute]) + int(attrs[rollSkill]) + int(rollAccuracy),
          damageRollNumber: int(attrs[damageAttribute]),
        })
      );

      declareRepeatingDependency(
        "rangedCombatDice",
        ["rollAccuracy", "rollAttribute", "rollSkill"],
        attributes,
        ({ rollAttribute, rollSkill, rollAccuracy }, attrs) => ({
          combatRollNumber: int(attrs[rollAttribute]) + int(attrs[rollSkill]) + int(rollAccuracy),
        })
      );

      on("change:repeating_melee:selected", (e) => {
        // todo
        console.log(e);
      });
      on("change:repeating_ranged:selected", (e) => {
        // todo
        console.log(e);
      });
    }

    dependencies = {
      // todo take health into account
      WalkSpeed: () => 7,
      JogSpeed: ({ Dexterity, celerityBoost, MiscSpeed }) => 12 + int(Dexterity) + int(celerityBoost) + int(MiscSpeed),
      RunSpeed: ({ Dexterity, celerityBoost, MiscSpeed }) =>
        20 + (3 * int(Dexterity) + int(celerityBoost) + int(MiscSpeed)),
      // todo boosts
      willpowerRoll: ({ Willpower, WillpowerBoost }) => int(Willpower) + int(WillpowerBoost),
      // todo boosts
      willpowerUsedRoll: ({ WillpowerUsed, WillpowerBoost }) => int(WillpowerUsed) + int(WillpowerBoost),
    };

    repeatingDefaults = {
      MeleeWeapons: {
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
      RangedWeapons: {
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
