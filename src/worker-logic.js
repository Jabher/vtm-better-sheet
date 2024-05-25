import {cars, DamageType, meleeWeapons, rangedWeapons} from "./consts.ts";
import "./custom.d.ts";

const onValues = (props, fn) => {
  on(`sheet:opened ` + props.map((p) => `change:${p}`).join(" "), () => {
    console.log("on activeCharacterId", getActiveCharacterId());
    getAttrs(props, (attrs) => {
      console.log("getAttrs activeCharacterId", getActiveCharacterId());
      console.log("setting", fn(attrs), "based on values", attrs);
      // @ts-expect-error roll20
      setAttrs(fn(attrs), (...args) => {
        console.log("setAttrs", ...args);
        console.log("setAttrs activeCharacterId", getActiveCharacterId());
      });
    });
  });
};

export const worker = () => {
  console.log("body activeCharacterId", getActiveCharacterId());
  onValues(["Dexterity", "DexterityBoost", "CeleritySpeed", "MiscSpeed"], (attrs) => ({
    JogSpeed:
      12 +
      Number(attrs.Dexterity) +
      Number(attrs.DexterityBoost) +
      Number(attrs.CeleritySpeed) +
      Number(attrs.MiscSpeed),
    RunSpeed:
      20 +
      (3 * Number(attrs.Dexterity) +
        Number(attrs.DexterityBoost) +
        Number(attrs.CeleritySpeed) +
        Number(attrs.MiscSpeed)),
  }));

  on("change:repeating_MeleeWeapons:MeleeWeaponType", (eventInfo) => {
    const prefix = eventInfo.sourceAttribute.replace(/_MeleeWeaponType$/i, "");
    const localeItem = Object.entries(meleeWeapons)
      .map(([key, value]) => [getTranslationByKey(`weapon-melee-${key}-label`), value])
      .find(([key]) => key == eventInfo.newValue)[1];
    console.log(prefix, localeItem);
    if (localeItem) {
      setAttrs({
        [`${prefix}_MeleeWeaponDamage`]: localeItem[0],
        [`${prefix}_MeleeWeaponLethality`]: localeItem[1],
        [`${prefix}_MeleeWeaponConceal`]: localeItem[2],
      });
    }
  });
  on("change:repeating_RangedWeapons:RangedWeaponType", (eventInfo) => {
    const prefix = eventInfo.sourceAttribute.replace(/_RangedWeaponType$/i, "");
    const localeItem = Object.entries(rangedWeapons)
      .map(([key, value]) => [getTranslationByKey(`weapon-ranged-${key}-label`), value])
      .find(([key]) => key == eventInfo.newValue)[1];
    // [damage: number, range: number, speed: number, ammo: string, conceal: ConcealType]
    console.log(prefix, localeItem);
    if (localeItem) {
      setAttrs({
        [`${prefix}_RangedWeaponLethality`]: DamageType.Lethal,
        [`${prefix}_RangedWeaponDamage`]: localeItem[0],
        [`${prefix}_RangedWeaponRange`]: localeItem[1],
        [`${prefix}_RangedWeaponRate`]: localeItem[2],
        [`${prefix}_RangedWeaponClip`]: localeItem[3],
        [`${prefix}_attr_RangedWeaponConceal`]: localeItem[4],
      });
    }
  });

  // todo vehicles updater
  on("change:repeating_vehicles:vehicletype change:repeating_vehicles", (eventInfo) => {
    console.log(eventInfo);
    const prefix = eventInfo.sourceAttribute.split("_").slice(0, -1).join("_");
    setAttrs({
      [`${prefix}_SafeSpeed`]: cars[prefix][0] ?? "",
      [`${prefix}_MaxSpeed`]: cars[prefix][1] ?? "",
      [`${prefix}_Maneuver`]: cars[prefix][2] ?? "",
      // [`${prefix}_Passengers`]: speeds[prefix][3] ?? ''
    });
    // getAttrs(["repeating_Vehicles_VehicleType"], function (values) {
    //   const _skillability = values[0] as string;
    //   getAttrs([_skillability], function (values) {
    //     const _abilitymod = Number.parseInt(values[_skillability]) || 0;
    //     setAttrs({ repeating_skills_skillabilitymod: _abilitymod });
    //   });
    // });
  });
};
