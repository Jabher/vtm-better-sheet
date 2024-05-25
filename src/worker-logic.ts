import { cars } from "./consts.ts";

const onValues = <T extends string>(
  props: T[],
  fn: (values: Record<T, string | number>) => Record<string, string | number>
) => {
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

  // todo vehicles updater
  on("change:repeating_vehicles:vehicletype change:repeating_vehicles", (eventInfo) => {
    console.log(eventInfo);
    const prefix = eventInfo!.sourceAttribute.split("_").slice(0, -1).join("_") as keyof typeof cars;
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
