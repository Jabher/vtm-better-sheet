import { H4 } from "../components/globals/Headings.tsx";
import { Counter } from "../components/Counter.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetCombat.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { cars } from "../consts.ts";
import { SelectInput } from "../components/SelectInput.tsx";

export const SheetCombat = () => (
  <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
    <Section>
      <SectionHead i18n="meleeweapons-u" />
      <SectionBody>
        <RepeatingSection name="MeleeWeapons">
          {() => (
            <section className="sheet-tabCombat--item">
              <div className="sheet-tabCombat--item-row">
                <Input i18n="name2-u" name="attr_MeleeWeaponName" />
                <Input i18n="type-u" name="attr_MeleeWeaponType" />
                <Input i18n="minstr-u" type="number" name="attr_MeleeWeaponMinimumStrength" defaultValue={0} />
                <Input i18n="damage-u" type="number" name="attr_MeleeWeaponDamage" defaultValue={0} />
                <SelectInput i18n="type-u" name="attr_MeleeWeaponLethality" defaultValue={0}>
                  <option value={0} data-i18n="bashing-u" />
                  <option value={2} data-i18n="lethal-u" />
                  <option value={3} data-i18n="aggravated-u" />
                </SelectInput>
                <Input i18n="conceal-u" name="attr_MeleeWeaponConceal" />
              </div>
              <ResizingTextarea i18n="notes-label" name="attr_MeleeWeaponDesc" />
            </section>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="rangedweapons-u" />
      <SectionBody>
        <RepeatingSection name="MeleeWeapons">
          {() => (
            <section className="sheet-tabCombat--item">
              <div>
                <Input i18n="name2-u" name="attr_RangedWeaponName" />
                <Input i18n="type-u" name="attr_RangedWeaponType" />
                <Input i18n="minstr-u" type="number" name="attr_RangedWeaponMinimumStrength" />
                <Input i18n="damage-u" type="number" name="attr_RangedWeaponDamage" />
                <SelectInput i18n="type-u" name="attr_MeleeWeaponLethality" defaultValue={0}>
                  <option value={0} data-i18n="bashing-u" />
                  <option value={2} data-i18n="lethal-u" />
                  <option value={3} data-i18n="aggravated-u" />
                </SelectInput>
                <Input i18n="range-u" name="attr_RangedWeaponRange" type="number" />
                <Input i18n="rate-u" name="attr_RangedWeaponRate" type="number" />
                <Input i18n="conceal-u" name="attr_RangedWeaponClip" type="number" />
                <Input i18n="conceal-u" name="attr_RangedWeaponConceal" />
              </div>
              <ResizingTextarea i18n="notes-label" name="attr_RangedWeaponDesc" />
            </section>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="armorshields-u" />
      <SectionBody>
        <RepeatingSection name="RangedAttacks">
          {() => (
            <section className="sheet-tabCombat--item">
              <div>
                <H4 i18n="onq-u" />
                <input type="checkbox" className="sheet-APIcheck" name="attr_WearingArmor" />
                <Input i18n="name2-u" name="attr_ArmorName" />
                <Input i18n="class-u" name="attr_ArmorClass" />
                <Input i18n="rating-u" type="number" name="attr_ArmorRating" />
                <Input i18n="penalty-u" type="number" name="attr_ArmorPenalty" />
                <select name="attr_ArmorAgainstAggravated" defaultValue={0}>
                  {/*todo*/}
                  <option value={0} data-i18n="no-u" />
                  <option value={1} data-i18n="yes-u" />
                </select>
              </div>
              <ResizingTextarea i18n="notes-u" name="attr_ArmorDesc" />
            </section>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="vehicles-label" />
      <SectionBody>
        <RepeatingSection name="Vehicles">
          {() => (
            // todo roll ловкость или смекалка + вожде‐ ние
            <section className="sheet-tabCombat--item">
              <div className="sheet-tabCombat--item-row">
                <Input labelName="Vehicle" name="attr_VehicleName" />
                <SelectInput i18n="vehicle-type-label" name="attr_VehicleType" defaultValue="Car">
                  {Object.keys(cars).map((name) => (
                    <option
                      data-i18n={`vehicle-type-${name as keyof typeof cars}-label` as const}
                      value={name}
                      key={name}
                    />
                  ))}
                </SelectInput>
                <Input i18n="vehicle-safe-speed-label" name="attr_SafeSpeed" />
                <Input i18n="vehicle-max-speed-label" name="attr_MaxSpeed" />
                <Input i18n="vehicle-maneuver-label" type="number" name="attr_Maneuver" />
                <Input i18n="vehicle-passengers-label" type="number" name="attr_Passengers" />
              </div>
              <ResizingTextarea i18n="notes-u" name="attr_VehicleDesc" />
            </section>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="havens-label" />
      <SectionBody className="sheet-tabCombat--havens">
        <RepeatingSection name="havens">
          {() => (
            <section className="sheet-tabCombat--item">
              <div className="sheet-tabCombat--item-row">
                <Input labelName="Name" name="attr_HavenName" />
                <Counter name="attr_Luxuryrating" from={0} to={10} />
                <Counter name="attr_Sizerating" from={0} to={10} />
                <Counter name="attr_Securityrating" from={0} to={10} />
              </div>
              <ResizingTextarea i18n="description-label" name="attr_HavenDesc" />
            </section>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="gear-u" />
      <SectionBody>
        <ResizingTextarea name="attr_gear" className="sheet-gear" />
      </SectionBody>
    </Section>
  </div>
);
