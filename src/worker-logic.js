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

const findIntl = (object, value, prefix) => {
  const key = Object.keys(object).find((k) => value === k || value === getTranslationByKey(`${prefix}-${k}-label`));
  return object[key];
};

const resetRepeatingField = () => {
  try {
    trigger?.({
      eventname: "reset_repeating_field",
    });
  } catch {
    console.log("failed to reset workerGlobals");
  }
};

const int = (val) => {
  if (typeof val === "number") {
    return val;
  }
  return Number.parseInt(val) || 0;
};

const withoutPrefix = (prefix, object) =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([key]) => key.startsWith(prefix))
      .map(([key, value]) => [key.replace(prefix, ""), value])
  );
const withPrefix = (prefix, object) =>
  Object.fromEntries(Object.entries(object).map(([key, value]) => [prefix + key, value]));

const onRepeatingChange = (group, props, cb) => {
  const fn = (e) => {
    console.log(e);
    getSectionIDs(`repeating_${group}`, (idarray) => {
      const keys = idarray.flatMap((id) => props.map((prop) => `repeating_${group}_${id}_${prop}`));
      resetRepeatingField();
      getAttrs(keys, (attrs) => {
        const result = Object.fromEntries(idarray.map((id) => [id, {}]));
        console.log(keys, attrs);
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
    fn
  );
};
const declareRepeatingDependency = (groupName, extraKeys, getter) => {
  on(
    [
      ...attributes.map((attr) => `change:${attr}`),
      ...Object.keys(talents).map((name) => `change:${name}`),
      ...Object.keys(skills).map((name) => `change:${name}`),
    ].join(" "),
    () => {
      getSectionIDs(groupName, (groupIDs) => {
        getAttrs(
          [
            ...attributes,
            ...groupIDs.flatMap((groupID) => extraKeys.map((key) => `repeating_${groupName}_${groupID}_${key}`)),
          ],
          (attrs) => {
            const newAttrs = {};
            for (const groupID of groupIDs) {
              const localAttrs = withoutPrefix(`repeating_${groupName}_${groupID}_`, attrs);
              Object.assign(
                newAttrs,
                withPrefix(
                  `repeating_${groupName}_${groupID}_`,
                  getter({
                    ...localAttrs,
                    attribute: attrs[localAttrs.rollAttribute],
                    skill: attrs[localAttrs.skill],
                  })
                )
              );
            }
          }
        );
      });
    }
  );

  on(
    [
      `change:repeating_${groupName}:rollAttribute`,
      `change:repeating_${groupName}:rollSkill`,
      ...extraKeys.map((key) => `change:repeating_${groupName}:${key}`),
    ].join(" "),
    () => {
      getAttrs(
        [
          `repeating_${groupName}_rollAttribute`,
          `repeating_${groupName}_rollSkill`,
          ...extraKeys.map((key) => `repeating_${groupName}_${key}`),
        ],
        (_localAttrs) => {
          const { rollAttribute, rollSkill, ...rest } = withoutPrefix(`repeating_${groupName}_`, _localAttrs);

          getAttrs([rollAttribute, rollSkill], ({ [rollAttribute]: attribute, [rollSkill]: skill }) => {
            setAttrs(
              withPrefix(
                `repeating_${groupName}_`,
                getter({
                  ...rest,
                  attribute,
                  skill,
                })
              )
            );
          });
        }
      );
    }
  );
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

      declareRepeatingDependency("meleeCombatDice", ["rollAccuracy"], ({ attribute, skill, rollAccuracy }) => ({
        combatRollNumber: int(attribute) + int(skill) + int(rollAccuracy),
      }));
      declareRepeatingDependency("rangedCombatDice", ["rollAccuracy"], ({ attribute, skill, rollAccuracy }) => ({
        combatRollNumber: int(attribute) + int(skill) + int(rollAccuracy),
      }));

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
          const weapon = findIntl(meleeWeapons, type, "weapon-melee");
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
          const weapon = findIntl(rangedWeapons, type, "weapon-ranged");
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
          const car = findIntl(cars, type, "vehicle-type");
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
