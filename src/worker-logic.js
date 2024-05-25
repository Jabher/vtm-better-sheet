import { fromPairs, range, sum } from "ramda";
import {
  attributes,
  cars,
  DamageType,
  defenceManeuvers,
  knowledges,
  meleeManeuvers,
  meleeWeapons,
  rangedManeuvers,
  rangedWeapons,
  skills,
  talents,
} from "./consts.ts";
import "./custom.d.ts";
import { WorkerLogicBase } from "./WorkerLogicBase.js";

const util = {
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
        console.log("getGroupAttrs parsing", group, attrs, queryKeys, keys, globalKeys);
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

  runAndOn: (events, callback) => {
    callback();
    on(events.map((event) => (event.includes(":") ? event : `change:${event}`)).join(" "), callback);
  },
  onListChange: (group, props, cb) => {
    util.runAndOn(
      [`repeating_${group}`, `remove:repeating_${group}`, ...props.map((p) => `repeating_${group}_${p}`)],
      (e) => {
        util.sectionIDs(group, (idarray) => {
          console.log("computing onListChange", group, props, idarray, e);
          const keys = idarray.flatMap((id) => props.map((prop) => `repeating_${group}_${id}_${prop}`));
          util.resetRepeatingField();
          const result = Object.fromEntries(idarray.map((id) => [id, {}]));
          getAttrs(keys, (attrs) => {
            for (const [key, value] of Object.entries(attrs)) {
              const id = idarray.find((sectionID) => key.startsWith(`repeating_${group}_${sectionID}`));
              result[id][key.replace(`repeating_${group}_${id}_`, "")] = value;
            }
            console.log("applying onListChange", keys, attrs, result);
            cb(result);
          });
        });
      }
    );
  },
  onListValueChange: (groupName, extraKeys, globalDependencies, getter) => {
    util.runAndOn([...globalDependencies, ...extraKeys.map((key) => `repeating_${groupName}:${key}`)], (e) => {
      console.log("declareRepeatingDependency triggered", e, groupName, extraKeys);
      util.getGroupAttrs(groupName, extraKeys, globalDependencies, (groupedAttrs, globalAttrs) => {
        console.log("declareRepeatingDependency state", groupName, groupedAttrs, globalAttrs);
        for (const [id, attrs] of Object.entries(groupedAttrs)) {
          console.log("declareRepeatingDependency updating group", groupName, attrs, globalAttrs, {
            [id]: getter(attrs, globalAttrs),
          });
          util.setGroupAttrs(groupName, {
            [id]: getter(attrs, globalAttrs),
          });
        }
      });
    });
  },
};

const rolls = {
  getPureAttrs: ($) => ({
    ...$,
    Strength: i($.Strength) + i($.potenceBoost),
    Dexterity: i($.Dexterity) + i($.celerityBoost),
    Stamina: i($.Stamina),
    Charisma: i($.Charisma),
    Manipulation: i($.Manipulation),
    Appearance: i($.Appearance),
    Perception: i($.Perception),
    Intelligence: i($.Intelligence),
    Wits: i($.Wits),
  }),
  getDamageAttrs: ($) => ({
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
  }),
  getCombatAttrs: ($) => ({
    ...$,
    Strength: i($.Strength) + Math.max(0, i($.potenceBoost)),
    Dexterity: i($.Dexterity) + Math.max(0, i($.celerityBoost) - i($.celeritySpent)),
    Stamina: i($.Stamina),
    Charisma: i($.Charisma),
    Manipulation: i($.Manipulation),
    Appearance: i($.Appearance),
    Perception: i($.Perception),
    Intelligence: i($.Intelligence),
    Wits: i($.Wits),
  }),

  dices: (state, rollAttr, useHealth, getter) => {
    const attrs = rolls.getPureAttrs(state);
    const healthModifier = useHealth === "on" ? i(state.Health) : 0;
    const potenceBonus = i(state.potenceSpent);
    const value = getter(attrs[rollAttr], attrs);
    return Number.isNaN(value)
      ? " "
      : [
          Math.max(0, getter(attrs[rollAttr], attrs) + healthModifier),
          potenceBonus && rollAttr === "Strength" ? ` +${potenceBonus}` : "",
        ].join("");
  },

  combatDices: (state, rollAttr, getter) => {
    const attrs = rolls.getCombatAttrs(state);
    const healthModifier = state.useHealthInCombat === "on" ? i(state.Health) : 0;
    const value = getter(attrs[rollAttr], attrs);
    return Number.isNaN(value) ? " " : [Math.max(0, getter(attrs[rollAttr], attrs) + healthModifier)].join("");
  },

  damageDices: (state, rollAttr, getter) => {
    const attrs = rolls.getDamageAttrs(state);
    const healthModifier = state.useHealthInCombat === "on" ? i(state.Health) : 0;
    const potenceBonus = i(state.potenceSpent);
    const value = getter(attrs[rollAttr], attrs);
    return Number.isNaN(value)
      ? " "
      : [
          Math.max(0, value + (rollAttr === "Strength" ? healthModifier : 0)),
          potenceBonus && rollAttr === "Strength" ? ` +${potenceBonus}` : "",
        ].join("");
  },
};

const i = (val) => {
  if (typeof val === "number") {
    return val;
  }
  return Number.parseInt(val) || 0;
};

export const worker = () =>
  new (class extends WorkerLogicBase {
    language = getTranslationLanguage() || navigator.language;
    initFirstTime(cb) {
      const attrs = {
        MoralPath10: getTranslationByKey("humanitysins-10"),
        MoralPath9: getTranslationByKey("humanitysins-9"),
        MoralPath8: getTranslationByKey("humanitysins-8"),
        MoralPath7: getTranslationByKey("humanitysins-7"),
        MoralPath6: getTranslationByKey("humanitysins-6"),
        MoralPath5: getTranslationByKey("humanitysins-5"),
        MoralPath4: getTranslationByKey("humanitysins-4"),
        MoralPath3: getTranslationByKey("humanitysins-3"),
        MoralPath2: getTranslationByKey("humanitysins-2"),
        MoralPath1: getTranslationByKey("humanitysins-1"),
      };

      getAttrs(
        [
          ...range(1, 11).map((i) => `Discipline${i}`),
          ...range(1, 11).map((i) => `Discipline${i}Name`),
          ...range(1, 11).map((i) => `Back${i}`),
          ...range(1, 11).map((i) => `Back${i}Name`),
          ...Object.keys(attrs),
          "path"
        ],
        (state) => {
          console.log("old state", state);
          attrs['path'] ||= getTranslationByKey("humanitypath-u")
          {
            const disciplines = [];
            for (const i of range(1, 11)) {
              if (state[`Discipline${i}`] || state[`Discipline${i}Name`]) {
                disciplines.push({ name: state[`Discipline${i}Name`] || "", level: state[`Discipline${i}`] || 0 });
              }
            }
            while (disciplines.length < 3) {
              disciplines.push({ name: "", level: 0 });
            }
            for (const { name, level } of disciplines) {
              const rowId = generateRowID();
              attrs[`repeating_disciplines_${rowId}_name`] = name;
              attrs[`repeating_disciplines_${rowId}_points`] = level;
            }
          }
          {
            const backgrounds = [];
            for (const i of range(1, 11)) {
              if (state[`Back${i}`] || state[`Back${i}Name`]) {
                backgrounds.push({ name: state[`Back${i}Name`] || "", level: state[`Back${i}`] || 0 });
              }
            }
            while (backgrounds.length < 3) {
              backgrounds.push({ name: "", level: 0 });
            }
            for (const { name, level } of backgrounds) {
              const rowId = generateRowID();
              attrs[`repeating_backgrounds_${rowId}_name`] = name;
              attrs[`repeating_backgrounds_${rowId}_points`] = level;
            }
          }
          {
            const hasMoralPath = range(1, 11).some((i) => state[`MoralPath${i}`]);
            if (hasMoralPath) {
              for (const i of range(1, 11)) {
                attrs[`MoralPath${i}`] = state[`MoralPath${i}`] || "";
              }
            }
          }

          for (const [key, [attr, skill]] of Object.entries(defenceManeuvers)) {
            const rowID = `repeating_brawlCombatDice_${generateRowID()}`;
            attrs[`${rowID}_rollname`] = getTranslationByKey(`maneuver-defence-${key}`);
            attrs[`${rowID}_rollAttr`] = attr;
            attrs[`${rowID}_rollSkill`] = skill;
          }
          for (const [key, [attr, skill, accuracy, difficulty, damageAttr = 0, damageBonus = 0]] of Object.entries(
            meleeManeuvers
          )) {
            const rowID = `repeating_meleeCombatDice_${generateRowID()}`;
            attrs[`${rowID}_rollname`] = getTranslationByKey(`maneuver-melee-${key}`);
            attrs[`${rowID}_rollAttr`] = attr;
            attrs[`${rowID}_rollSkill`] = skill;
            attrs[`${rowID}_rollDifficulty`] = Number(difficulty) + 6;
            attrs[`${rowID}_rollAccuracy`] = accuracy || "";
            attrs[`${rowID}_damageAttr`] = damageAttr;
            attrs[`${rowID}_damageBonus`] = damageBonus;
          }
          for (const [key, [attr, skill, accuracy, difficulty]] of Object.entries(rangedManeuvers)) {
            const rowID = `repeating_rangedCombatDice_${generateRowID()}`;
            attrs[`${rowID}_rollname`] = getTranslationByKey(`maneuver-ranged-${key}`);
            attrs[`${rowID}_rollAttr`] = attr;
            attrs[`${rowID}_rollSkill`] = skill;
            attrs[`${rowID}_rollAccuracy`] = accuracy || "";
            attrs[`${rowID}_rollDifficulty`] = Number(difficulty) + 6;
          }
          {
            const rowID = `repeating_MeleeWeapon_${generateRowID()}`;
            const weapon = util.findIntl(meleeWeapons, "fists", "weapon-melee");
            attrs[`${rowID}_Type`] = getTranslationByKey("weapon-melee-fists-label");
            attrs[`${rowID}_Damage`] = weapon[0];
            attrs[`${rowID}_Lethality`] = weapon[1];
            attrs[`${rowID}_Conceal`] = weapon[2];
            attrs[`${rowID}_damageAttr`] = "Strength";
            attrs[`${rowID}_rollSkill`] = "brawl";
          }
          console.log("setting initial attrs", attrs);
          setAttrs(attrs);
          cb();
        }
      );
    }

    init() {
      const boundDisciplines = new Set(["celerity", "potence"]);
      const boundDisciplineNames = [...boundDisciplines].map((key) => [
        key,
        getTranslationByKey(`discipline-name-${key}`).toLowerCase(),
      ]);
      const resolveName = (name) => boundDisciplineNames.find((keys) => keys.includes(name.toLowerCase()))?.[0];

      util.onListChange("disciplines", ["name", "points"], (attrs) => {
        const boosts = {};
        for (const discipline of boundDisciplines) {
          boosts[`${discipline}Linked`] = "off";
        }
        const links = {};
        for (const [key, { name, points = 0 }] of Object.entries(attrs)) {
          const resolvedName = resolveName(name);
          const isBound = boundDisciplines.has(resolvedName);
          if (isBound) {
            boosts[`${resolvedName}Boost`] = points ?? 0;
            boosts[`${resolvedName}Linked`] = "on";
          }
          links[`repeating_disciplines_${key}_linked`] = isBound ? "on" : "off";
        }
        const orderedDisciplines = Object.values(attrs);
        const orderedNames = fromPairs(
          range(0, 21).map((j) => [`Discipline${j}Name`, orderedDisciplines[j]?.name ?? ""])
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
      const cardinalPluralizer = new Intl.PluralRules(this.language);

      const damageRollHandler = ({ value, type = "lethal", difficulty = 6, connected = 0 }) => {
        const [value1, value2 = "+0"] = value.split(" ");
        const diceCount = i(value1);
        const diceBonus = i(value2);
        // eslint-disable-next-line sonarjs/no-nested-template-literals
        const title = `${getTranslationByKey(`${type}-u`)} ${getTranslationByKey("damage-u").toLowerCase()}`;
        // todo ask modifier
        const template = [
          `&{template:damage}`,
          `{{rollTitle=${title}}}`,
          `{{name=@{Name}}}`,
          `{{connected=[[${connected}]]}}`,
          `{{difficultyLabel=${getTranslationByKey("difficulty-label")}}}`,
          `{{count=[[${diceCount}]]}}`,
          `{{successes=[[0]]}}`,
          `{{fails=[[0]]}}`,
          `{{difficulty=[[0]]}}`,
          `{{result=[[0]]}}`,
          `{{resultNumber=[[0]]}}`,
          // eslint-disable-next-line sonarjs/no-nested-template-literals
          `{{diceBonus=${diceBonus ? `+${diceBonus}` : " "}}}`,
          `{{roll=[[${diceCount}d10>${difficulty}cs>10]]}}`,
          ...range(1, diceCount + 1).map((j) => `{{dice${j}=[[0]]}}`),
          ``,
        ].join(" ");
        console.log("doing damage roll", template);
        startRoll(template, (results) => {
          const { roll } = results.results;
          const successes = roll.result + diceBonus;
          const resultNumber = Math.max(0, successes);
          const result =
            resultNumber > 0 // eslint-disable-next-line sonarjs/no-nested-template-literals
              ? `${getTranslationByKey("roll-damage-deals")} ${resultNumber} ${getTranslationByKey(`roll-damage-pluralize-cardinal-${cardinalPluralizer.select(resultNumber)}`)}`
              : getTranslationByKey("roll-damage-deals-no-damage");
          const rollData = {
            ...fromPairs(roll.dice.sort((a, b) => a - b).map((d, j) => [`dice${j + 1}`, d])),
            successes,
            difficulty,
            result,
            resultNumber,
          };
          console.log("finishing damage roll", rollData, results);
          finishRoll(results.rollId, rollData);
        });
      };

      const rollHandler = ({ value, template, difficulty, name, namePrefix, damageRoll, damageType }) => {
        const [value1, value2 = "+0"] = value.split(" ");
        const diceCount = i(value1);
        const diceBonus = i(value2);
        // eslint-disable-next-line sonarjs/no-nested-template-literals
        let title = getTranslationByKey("dice-check-label");
        if (name) {
          title += `: ${name}`;
        }
        if (namePrefix) {
          title += ` (${namePrefix})`;
        }
        const difficultyTemplate = `?{${getTranslationByKey("difficulty-label")}|6 }`;
        const modifierTemplate = `?{${getTranslationByKey("result-modifiers-label")}|0 }`;
        const rollTemplate = [
          `&{template:${template}}`,
          `{{rollTitle=${title}}}`,
          `{{name=@{Name}}}`,
          `{{difficultyLabel=${getTranslationByKey("difficulty-label")}}}`,
          `{{count=[[${diceCount}]]}}`,
          `{{successes=[[0]]}}`,
          `{{fails=[[0]]}}`,
          `{{difficulty=[[0]]}}`,
          `{{result=[[0]]}}`,
          // eslint-disable-next-line sonarjs/no-nested-template-literals
          `{{diceBonus=${diceBonus ? `+${diceBonus}` : " "}}}`,
          `{{roll=[[(${diceCount} + ${modifierTemplate})d10>${i(difficulty) || difficultyTemplate}cs>10]]}}`,
          ...range(1, diceCount + 1).map((j) => `{{dice${j}=[[0]]}}`),
          ``,
        ].join(" ");
        console.log("rolling", { value, name, namePrefix }, rollTemplate);
        startRoll(rollTemplate, (results) => {
          const { roll } = results.results;
          const realDifficulty = difficulty || i(roll.expression.replace(/[^>]+>/, "").replace("cs>10", ""));
          const successes = roll.result + diceBonus;
          const fails = roll.dice.filter((d) => d === 1).length;
          const resultNumber = Math.max(0, successes);
          let result;
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
            difficulty: realDifficulty,
            result,
            count: roll.dice.length,
          };
          console.log("finishing roll", rollData, results);
          finishRoll(results.rollId, rollData);

          if (damageRoll !== undefined && resultNumber > 0) {
            const [damageValue, bonus = "+0"] = damageRoll.split(" ");
            damageRollHandler({
              value: `${i(damageValue) + i(resultNumber)} ${bonus}`,
              type: damageType,
              connected: 1,
            });
          }
        });
      };

      const eventHandler = (event, isRepeater) => {
        const attribute = event.htmlAttributes["data-attribute"];
        const attributeName = event.htmlAttributes["data-attribute-name"];
        const attributeNameValue = event.htmlAttributes["data-attribute-name-value"];
        const attributeNamePrefix = event.htmlAttributes["data-attribute-name-prefix"];
        const attributeNamePrefixValue = event.htmlAttributes["data-attribute-name-prefix-value"];
        const difficultyValue = event.htmlAttributes["data-difficulty-value"];
        const damageRollValue = event.htmlAttributes["data-damage-roll-value"];
        const damageTypeValue = event.htmlAttributes["data-damage-type-value"];
        const template = event.htmlAttributes["data-template"] ?? "attribute";

        console.log(event, {
          attribute,
          attributeName,
          attributeNameValue,
          attributeNamePrefix,
          attributeNamePrefixValue,
          difficultyValue,
          damageRollValue,
          damageTypeValue,
          template,
        });
        // todo combat rolls should consider potence boost only in damage rolls; attack rolls only consider potence number

        const getRequiredAttrs = (keys, cb) => {
          if (isRepeater) {
            const [, group, itemID] = event.triggerName.split("_");
            const prefix = `repeating_${group}_${itemID}`;
            const localAttributeNameValue = attributeNameValue ? `${prefix}_${attributeNameValue}` : undefined;
            const localDifficultyValue = attributeNameValue ? `${prefix}_${difficultyValue}` : undefined;
            const localAttributeNamePrefixValue = attributeNamePrefixValue
              ? `${prefix}_${attributeNamePrefixValue}`
              : undefined;
            const localDamageRollValue = `${prefix}_${damageRollValue}`;
            const localDamageTypeValue = `${prefix}_${damageTypeValue}`;
            getAttrs(
              [
                ...keys,
                ...keys.map((key) => `${prefix}_${key}`),
                attributeNameValue,
                attributeNamePrefixValue,
                localAttributeNameValue,
                localAttributeNamePrefixValue,
                difficultyValue,
                localDifficultyValue,
                damageRollValue,
                localDamageRollValue,
                damageTypeValue,
                localDamageTypeValue,
              ],
              ({
                [difficultyValue]: difficulty,
                [localDifficultyValue]: localDifficulty,
                [attributeNameValue]: nameValue,
                [localAttributeNameValue]: localNameValue,
                [attributeNamePrefixValue]: namePrefixValue,
                [localAttributeNamePrefixValue]: localNamePrefixValue,
                [damageRollValue]: damageRoll,
                [localDamageRollValue]: localDamageRoll,
                [damageTypeValue]: damageType,
                [localDamageTypeValue]: localDamageType,
                ...attrs
              }) => {
                const effectiveAttrs = fromPairs(
                  Object.entries(attrs).map(([key, value]) => [key.replace(`${prefix}_`, ""), value])
                );
                const name = attributeName || nameValue || localNameValue;
                const namePrefix = attributeNamePrefix || namePrefixValue || localNamePrefixValue;
                cb({
                  value: effectiveAttrs[attribute],
                  difficulty: localDifficulty || difficulty,
                  name: getTranslationByKey(name) || name,
                  namePrefix: getTranslationByKey(namePrefix) || namePrefix,
                  damageRoll: damageRoll || localDamageRoll,
                  damageType: damageType || localDamageType,
                  template,
                });
              }
            );
          } else {
            getAttrs(
              [
                difficultyValue,
                attribute,
                attributeNameValue,
                attributeNamePrefixValue,
                damageRollValue,
                damageTypeValue,
              ],
              ({
                [difficultyValue]: difficulty,
                [attributeNameValue]: nameValue,
                [attributeNamePrefixValue]: namePrefixValue,
                [damageRollValue]: damageRoll,
                [damageTypeValue]: damageType,
                ...attrs
              }) => {
                cb({
                  value: attrs[attribute],
                  difficulty,
                  name: getTranslationByKey(attributeName) || getTranslationByKey(nameValue) || nameValue,
                  namePrefix: getTranslationByKey(attributeNamePrefix) || namePrefixValue,
                  damageRoll,
                  damageType,
                  template,
                });
              }
            );
          }
        };

        getRequiredAttrs([attribute], rollHandler);
      };
      on("clicked:roll_attribute", (e) => eventHandler(e, false));
      on("clicked:repeating_powers:roll", (e) => eventHandler(e, true));
      on("clicked:repeating_brawlCombatDice:roll", (e) => eventHandler(e, true));
      on("clicked:repeating_meleeCombatDice:roll", (e) => eventHandler(e, true));
      on("clicked:repeating_rangedCombatDice:roll", (e) => eventHandler(e, true));
      on("clicked:repeating_MeleeWeapon:roll", (e) => eventHandler(e, true));
      on("clicked:repeating_RangedWeapon:roll", (e) => eventHandler(e, true));
      on("clicked:repeating_ArmorShields:roll", (e) => eventHandler(e, true));
      on("clicked:roll_initiative", (e) => {
        console.log(e);
        getAttrs(
          ["initiativeAddTracker", "Dexterity", "Wits", "celerityBoost", "initiativeBonus"],
          ({ initiativeAddTracker, Dexterity, Wits, celerityBoost, initiativeModifier }) => {
            if (initiativeAddTracker) {
              setAttrs({
                dexteritySpent: 0,
                celeritySpent: 0,
              });
            }
            startRoll(
              [
                `@{Name}`,
                `&{template:initiative}`,
                `{{name=@{Name}}}`,
                `{{roll_name=${getTranslationByKey("initiative-dice-pool-label")}}}`,
                `{{result=[[${i(Dexterity) + i(Wits) + i(celerityBoost) + i(initiativeModifier)}+1d10${initiativeAddTracker ? " &{tracker}" : ""}]]}}`,
              ].join(" "),
              (results) => {
                finishRoll(results.rollId, {});
              }
            );
          }
        );
      });
      on("clicked:roll_custom", (e) => {
        const difficultyTemplate = `?{${getTranslationByKey("difficulty-label")}|6 }`;
        const diceCountTemplate = `?{${getTranslationByKey("dice-pool-label")}|1 }`;
        const rollTemplate = [
          `&{template:attribute}`,
          `{{difficultyLabel=${getTranslationByKey("difficulty-label")}}}`,
          `{{name=@{Name}}}`,
          `{{count=[[0]]}}`,
          `{{successes=[[0]]}}`,
          `{{fails=[[0]]}}`,
          `{{difficulty=[[0]]}}`,
          `{{result=[[0]]}}`,
          `{{roll=[[(${diceCountTemplate})d10>${difficultyTemplate}cs>10]]}}`,
          ...range(1, 51).map((j) => `{{dice${j}=[[0]]}}`),
          ``,
        ].join(" ");
        startRoll(rollTemplate, (results) => {
          console.log("rolling custom roll", rollTemplate, results);
          const { roll } = results.results;
          const realDifficulty = i(roll.expression.replace(/[^>]+>/, "").replace("cs>10", ""));
          const successes = roll.result;
          const fails = roll.dice.filter((d) => d === 1).length;
          const resultNumber = Math.max(0, successes - fails);
          let result;
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
            difficulty: realDifficulty,
            result,
            count: roll.dice.length,
          };
          console.log("finishing roll", rollData, results);
          finishRoll(results.rollId, rollData);
        });
      });
    }

    initCombatSheet() {
      const defaultGlobalDependencies = [
        "celerityBoost",
        "celeritySpent",
        "potenceBoost",
        "potenceSpent",
        "Health",
        ...attributes,
        ...talents,
        ...skills,
        ...knowledges,
      ];

      const onCombatChange = (groupName, extraKeys, getter) =>
        util.onListValueChange(
          groupName,
          extraKeys,
          [...defaultGlobalDependencies, "useHealthInCombat", "CurrentMeleeWeaponDamage", "CurrentRangedWeaponDamage"],
          getter
        );

      onCombatChange("brawlCombatDice", ["rollAttr", "rollSkill"], ({ rollAttr, rollSkill }, state) => ({
        combatRollNumber: rolls.combatDices(state, rollAttr, (attr) => attr + i(state[rollSkill])),
      }));

      onCombatChange(
        "meleeCombatDice",
        ["rollAccuracy", "rollAttr", "rollSkill", "damageAttr", "damageBonus"],
        ({ rollAttr, rollSkill, rollAccuracy, damageAttr, damageBonus }, { CurrentMeleeWeaponDamage, ...state }) => ({
          combatRollNumber: rolls.combatDices(state, rollAttr, (attr) => attr + i(state[rollSkill]) + i(rollAccuracy)),
          damageRollNumber: rolls.damageDices(
            state,
            damageAttr,
            (attr) => attr + i(damageBonus) + i(CurrentMeleeWeaponDamage)
          ),
        })
      );

      onCombatChange(
        "rangedCombatDice",
        ["rollAccuracy", "rollAttr", "rollSkill", "damageBonus"],
        ({ rollAttr, rollSkill, rollAccuracy, damageBonus }, { CurrentRangedWeaponDamage, ...state }) => ({
          combatRollNumber: rolls.combatDices(state, rollAttr, (attr) => attr + i(state[rollSkill]) + i(rollAccuracy)),
          damageRollNumber: rolls.damageDices(state, "", () => i(damageBonus) + i(CurrentRangedWeaponDamage)),
        })
      );

      onCombatChange(
        "MeleeWeapon",
        ["Damage", "damageAttr", "BrawlFlag"],
        ({ Damage, damageAttr, BrawlFlag }, state) => ({
          combatRollNumber: rolls.combatDices(
            state,
            "Dexterity",
            (attr) => attr + i(BrawlFlag === "on" ? state.brawl : state.melee)
          ),
          damageRollNumber: rolls.damageDices(state, damageAttr, (attr) => attr + i(Damage)),
        })
      );

      onCombatChange("RangedWeapon", ["rollAccuracy", "Damage"], ({ rollAccuracy, Damage }, state) => ({
        combatRollNumber: rolls.combatDices(state, "Dexterity", (attr) => attr + i(state.firearms) + i(rollAccuracy)),
        damageRollNumber: rolls.damageDices(state, "Strength", () => i(Damage)),
      }));

      util.onListValueChange(
        "powers",
        ["rollAttr", "rollSkill", "rollUseHealth"],
        defaultGlobalDependencies,
        ({ rollAttr, rollSkill, rollUseHealth }, state) => ({
          rollNumber: rolls.dices(state, rollAttr, rollUseHealth, (attr) => attr + i(state[rollSkill])),
        })
      );
      util.onListValueChange(
        "rituals",
        ["ritualAW", "ritualAbility", "ritualuseHealth"],
        defaultGlobalDependencies,
        ({ ritualAW, ritualAbility, ritualuseHealth }, state) => ({
          rollNumber: rolls.dices(state, ritualAW, ritualuseHealth, (attr) => attr + i(state[ritualAbility])),
        })
      );
      util.onListValueChange(
        "combinationPowers",
        ["rollAttr", "rollSkill", "rollUseHealth"],
        defaultGlobalDependencies,
        ({ rollAttr, rollSkill, rollUseHealth }, state) => ({
          rollNumber: rolls.dices(state, rollAttr, rollUseHealth, (attr) => attr + i(state[rollSkill])),
        })
      );

      util.onListChange("XP", ["XPDate"], (groupItems) => {
        console.log("xp dates", groupItems);
        const now = new Date();
        util.setGroupAttrs(
          "XP",
          Object.fromEntries(
            Object.entries(groupItems)
              .filter(([, { XPDate }]) => !XPDate)
              .map(([key]) => [key, { XPDate: new Intl.DateTimeFormat(this.language).format(new Date()) }])
          )
        );
      });

      util.runAndOn(["repeating_XP", "XPStart"], () => {
        util.getGroupAttrs("XP", ["XPGot", "XPSpent"], ["XPStart"], (items, { XPStart }) => {
          const XPtotal = sum([i(XPStart), ...Object.values(items).map(({ XPGot }) => i(XPGot))]);
          const XPspent = sum(Object.values(items).map(({ XPSpent }) => i(XPSpent)));
          const XPRemaining = XPtotal - XPspent;
          setAttrs({
            XPtotal,
            XPspent,
            XPRemaining,
          });
        });
      });

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
                util.sectionIDs(group, (ids) => {
                  util.setGroupAttrs(
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
      willpowerRoll: ({ Willpower }) => i(Willpower),
      willpowerUsedRoll: ({ WillpowerUsed }) => i(WillpowerUsed),
      initiativeBonus: ({ Dexterity, Wits, celerityBoost, initiativeModifier }) =>
        `+${i(Dexterity) + i(Wits) + i(celerityBoost) + i(initiativeModifier)}`,
      // https://www.reddit.com/r/vtm/comments/164i1vj/revised_vampire_generation_chart_also_how_to_stat/
      BloodPoolMax: ({ Generation }) =>
        [
          undefined, // 0
          undefined, // 1
          undefined, // 2
          100, // 3
          50, // 4
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
          10, // 4
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
          const weapon = util.findIntl(meleeWeapons, type, "weapon-melee");
          if (weapon)
            return {
              Damage: weapon[0],
              Lethality: weapon[1],
              Conceal: weapon[2],
              damageAttr: "Strength",
              rollSkill: weapon[3] ? "brawl" : "melee",
            };
        },
      },
      RangedWeapon: {
        Type: (type) => {
          const weapon = util.findIntl(rangedWeapons, type, "weapon-ranged");
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
          const car = util.findIntl(cars, type, "vehicle-type");
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
