import { Counter } from "../components/Counter.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetBelongings.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { cars } from "../consts.ts";
import { SelectInput } from "../components/SelectInput.tsx";

export const SheetBelongings = () => (
  <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
    <Section>
      <SectionHead i18n="vehicles-label" />
      <SectionBody>
        <RepeatingSection name="Vehicles">
          {() => (
            // todo roll ловкость или смекалка + вожде‐ ние
            <section className="sheet-tabCombat--item">
              <div className="sheet-tabCombat--item-row">
                <Input i18n="name-u" name="attr_VehicleName" />
                <SelectInput i18n="vehicle-type-label" name="attr_Type" defaultValue="Car">
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
                <Input i18n="name-u" name="attr_HavenName" />
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
