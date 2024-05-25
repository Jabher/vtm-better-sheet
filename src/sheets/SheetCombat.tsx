import { H4 } from "../components/globals/Headings.tsx";
import { Counter } from "../components/Counter.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetCombat.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";

export const SheetCombat = () => (
  <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
    <Section>
      <SectionHead i18n="meleeweapons-u" />
      <SectionBody>
        <RepeatingSection name="repeating_MeleeWeapons">
          {() => (
            <div className="sheet-tabCombat--item">
              <div>
                <Input i18n="name2-u" name="attr_MeleeWeaponName" />
                <Input i18n="type-u" name="attr_MeleeWeaponType" />
                <Input i18n="minstr-u" type="number" name="attr_MeleeWeaponMinimumStrength" defaultValue={0} />
                <Input i18n="damage-u" type="number" name="attr_MeleeWeaponDamage" defaultValue={0} />
                <select name="attr_MeleeWeaponLethality">
                  <option value={0} data-i18n="bashing-u">
                    Bashing
                  </option>
                  <option value={2} data-i18n="lethal-u">
                    Lethal
                  </option>
                  <option value={3} data-i18n="aggravated-u">
                    Aggravated
                  </option>
                </select>
                <Input i18n="conceal-u" name="attr_MeleeWeaponConceal" />
              </div>
              <ResizingTextarea i18n="notes-label" name="attr_MeleeWeaponDesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="rangedweapons-u" />
      <SectionBody>
        <RepeatingSection name="repeating_MeleeWeapons">
          {() => (
            <div className="sheet-tabCombat--item">
              <div>
                <Input i18n="name2-u" name="attr_RangedWeaponName" />
                <Input i18n="type-u" name="attr_RangedWeaponType" />
                <Input i18n="minstr-u" type="number" name="attr_RangedWeaponMinimumStrength" />
                <Input i18n="damage-u" type="number" name="attr_RangedWeaponDamage" />
                <select name="attr_RangedWeaponLethality">
                  <option value={0} data-i18n="bashing-u">
                    Bashing
                  </option>
                  <option value={2} data-i18n="lethal-u">
                    Lethal
                  </option>
                  <option value={3} data-i18n="aggravated-u">
                    Aggravated
                  </option>
                </select>
                <Input i18n="range-u" name="attr_RangedWeaponRange" type="number" />
                <Input i18n="rate-u" name="attr_RangedWeaponRate" type="number" />
                <Input i18n="conceal-u" name="attr_RangedWeaponClip" type="number" />
                <Input i18n="conceal-u" name="attr_RangedWeaponConceal" />
              </div>
              <ResizingTextarea i18n="notes-label" name="attr_RangedWeaponDesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="armorshields-u" />
      <SectionBody>
        <RepeatingSection name="RangedAttacks">
          {() => (
            <div className="sheet-tabCombat--item">
              <div>
                <H4 i18n="onq-u" />
                <input type="checkbox" className="sheet-APIcheck" name="attr_WearingArmor" />
                <Input i18n="name2-u" name="attr_ArmorName" />
                <select name="attr_ArmorType">
                  <option value={1} data-i18n="armor-u">
                    Armor
                  </option>
                  <option value={2} data-i18n="shield-u">
                    Shield
                  </option>
                  <option value={3} data-i18n="bodymod-u">
                    Body Mod.
                  </option>
                  <option value={3} data-i18n="other-u">
                    Other
                  </option>
                </select>
                <Input i18n="class-u" name="attr_ArmorClass" />
                <Input i18n="rating-u" type="number" name="attr_ArmorRating" />
                <Input i18n="penalty-u" type="number" name="attr_ArmorPenalty" />
                <select name="attr_ArmorAgainstAggravated">
                  {" "}
                  {/*todo*/}
                  <option value={0} data-i18n="no-u">
                    No
                  </option>
                  <option value={1} data-i18n="yes-u">
                    Yes
                  </option>
                </select>
              </div>
              <ResizingTextarea i18n="notes-u" name="attr_ArmorDesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="gear-u" />
      <SectionBody>
        <textarea name="attr_gear" className="sheet-gear" />
      </SectionBody>
    </Section>
    <Section>
      <SectionHead>Vehicles</SectionHead>
      <SectionBody>
        <RepeatingSection name="Vehicles">
          {() => (
            <div className="sheet-tabCombat--item">
              <div>
                <Input labelName="Vehicle" name="attr_VehicleName" />
                <select name="attr_VehicleType">
                  <option>Car</option>
                  <option>Airplane</option>
                  <option>Boat</option>
                  <option>Motorcycle</option>
                  <option>Truck</option>
                  <option>Tank</option>
                  <option>Semi</option>
                  <option>Utility Vehicle</option>
                </select>
                <Input labelName="Safe Speed" name="attr_SafeSpeed" />
                <Input labelName="Max Speed" name="attr_MaxSpeed" />
                <Input labelName="Maneuver" type="number" name="attr_Maneuver" />
                <Input labelName="Passengers" type="number" name="attr_Passengers" />
              </div>
              <div>
                <Input i18n="notes-u" name="attr_VehicleDesc" />
              </div>
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead>Havens</SectionHead>
      <SectionBody className="sheet-tabCombat--havens">
        <div className="sheet-tabCombat--havens-header">
          <span />
          <h5>Luxury</h5>
          <h5>Size</h5>
          <h5>Security</h5>
        </div>
        <RepeatingSection name="repeating_havens">
          {() => (
            <div className="sheet-tabCombat--item">
              <div>
                <Input labelName="Name" name="attr_HavenName" />
                <Counter name="attr_Luxuryrating" from={0} to={10} />
                <Counter name="attr_Sizerating" from={0} to={10} />
                <Counter name="attr_Securityrating" from={0} to={10} />
              </div>
              <div>
                <Input labelName="description" name="attr_HavenDesc" />
              </div>
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
