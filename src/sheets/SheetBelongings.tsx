import { Counter } from "../components/Counter.tsx";
import { Section } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetBelongings.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { cars } from "../consts.ts";
import { SelectInput } from "../components/SelectInput.tsx";
import { Row, RowDescription } from "../components/Row.tsx";
import { Labelled } from "../components/Labelled.tsx";

export const SheetBelongings = () => (
  <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
    <Section i18n="vehicles-label">
      <RepeatingSection name="Vehicles">
        {() => (
          // todo roll ловкость или смекалка + вожде‐ ние
          <Row>
            <Input i18n="name-u" name="VehicleName" />
            <SelectInput i18n="vehicle-type-label" name="Type" defaultValue="Car">
              {Object.keys(cars).map((name) => (
                <option
                  data-i18n={`vehicle-type-${name as keyof typeof cars}-label` as const}
                  value={name}
                  key={name}
                />
              ))}
            </SelectInput>
            <Input i18n="vehicle-safe-speed-label" name="SafeSpeed" />
            <Input i18n="vehicle-max-speed-label" name="MaxSpeed" />
            <Input i18n="vehicle-maneuver-label" type="number" name="Maneuver" />
            <Input i18n="vehicle-passengers-label" type="number" name="Passengers" />
            <RowDescription>
              <ResizingTextarea i18n="notes-u" name="VehicleDesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="havens-label">
      <RepeatingSection name="havens">
        {() => (
          <Row>
            <Input i18n="name-u" name="HavenName" />
            <Labelled i18n="haven-luxury-label">
              <Counter name="Luxuryrating" from={0} to={10} />
            </Labelled>
            <Labelled i18n="haven-size-label">
              <Counter name="Sizerating" from={0} to={10} />
            </Labelled>
            <Labelled i18n="haven-security-label">
              <Counter name="Securityrating" from={0} to={10} />
            </Labelled>
            <RowDescription>
              <ResizingTextarea i18n="description-label" name="HavenDesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
    <Section i18n="gear-u">
      <ResizingTextarea name="gear" className="sheet-gear" />
    </Section>
  </div>
);
