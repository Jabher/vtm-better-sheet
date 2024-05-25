import {cars, DamageType, meleeWeapons, rangedWeapons} from "./consts.ts";
import "./custom.d.ts";
import {WorkerLogic} from "./WorkerLogic.js";

const onValues = (props, fn) => {
    on(`sheet:opened ` + props.map((p) => `change:${p}`).join(" "), () => {
        console.debug("on activeCharacterId", getActiveCharacterId());
        getAttrs(props, (attrs) => {
            console.debug("getAttrs activeCharacterId", getActiveCharacterId());
            console.debug("setting", fn(attrs), "based on values", attrs);
            // @ts-expect-error roll20
            setAttrs(fn(attrs), (...args) => {
                console.debug("setAttrs", ...args);
                console.debug("setAttrs activeCharacterId", getActiveCharacterId());
            });
        });
    });
};

const findIntl = (object, value, prefix) => {
    const key = Object.keys(object).find(key => value === key || value === getTranslationByKey(`${prefix}-${key}-label`));
    return object[key];
}


export const worker = () => new class extends WorkerLogic {
    init(cb) {
        on('change:repeating_melee:selected', (e) => {
           console.log(e);
        });
        on('change:repeating_ranged:selected', (e) => {
            console.log(e);
        });
        cb();
    }

    dependencies = {
    // todo take health into account
        WalkSpeed: () => 7,
        JogSpeed: attrs =>
            12 +
            Number(attrs.Dexterity) +
            Number(attrs.DexterityBoost) +
            Number(attrs.CeleritySpeed) +
            Number(attrs.MiscSpeed),
        RunSpeed: attrs =>
            20 +
            (3 * Number(attrs.Dexterity) +
                Number(attrs.DexterityBoost) +
                Number(attrs.CeleritySpeed) +
                Number(attrs.MiscSpeed))
    }

    repeatingDefaults = {
        MeleeWeapons: {
            Type: type => {
                const weapon = findIntl(meleeWeapons, type, 'weapon-melee');
                if (weapon)
                    return {
                        Damage: weapon[0],
                        Lethality: weapon[1],
                        Conceal: weapon[2],
                    }
            }
        },
        RangedWeapons: {
            Type: type => {
                const weapon = findIntl(rangedWeapons, type, 'weapon-ranged');
                if (weapon) {
                    return {
                        Lethality: DamageType.Lethal,
                        Damage: weapon[0],
                        Range: weapon[1],
                        Rate: weapon[2],
                        Clip: weapon[3],
                        Conceal: weapon[4],
                    }
                }
            }
        },
        vehicles: {
            type: type => {
                const car = findIntl(cars, type, 'vehicle-type');
                if (car) {
                    return {
                        SafeSpeed: car[0],
                        MaxSpeed: car[1],
                        Maneuver: car[2],
                    }
                }
            }
        }
    }
}
