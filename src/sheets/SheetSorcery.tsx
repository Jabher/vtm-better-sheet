import { Counter } from "../components/Counter.tsx";
import { Input } from "../components/Input.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { RollButton } from "../components/Buttons.tsx";
import { SkillSelect, AttributeSelect } from "../components/AttributeSelect.tsx";
import "./SheetSorcery.css";
import { Row, RowDescription } from "../components/Row.tsx";
import { Checkbox } from "../components/Checkbox.tsx";
import { H3 } from "../components/globals/Headings.tsx";

export const SheetSorcery = () => (
  <div className="sheet-tab-content sheet-tabSorcery">
    <Section>
      <SectionHead i18n="rituals-label" />
      <SectionBody>
        <RepeatingSection name="rituals">
          {() => (
            <Row>
              <Input i18n="name-u" name="ritualname" />
              <Counter name="rituallevel" from={1} to={10} />
              <AttributeSelect name="ritualAW" />
              <SkillSelect name="ritualAbility" />
              <RollButton
                data-attribute="rollNumber"
                data-difficulty-value="difficulty"
                data-attribute-name-prefix-value="ritualname"
                childrenName="rollNumber"
              />
              <RowDescription>
                <Row>
                  <H3 i18n="dice-pool-label" style={{ alignSelf: "center", flexBasis: 0 }} />
                  <Input i18n="difficulty-label" type="number" name="ritualDiff" defaultValue={6} />
                  <Input i18n="result-modifiers-label" type="number" name="ritualModifier" />
                  <Checkbox name="ritualuseHealth" i18n="use-health-minus-label" symbol="ecg_heart" />
                </Row>
                <ResizingTextarea i18n="description-label" name="ritualdesc" />
              </RowDescription>
            </Row>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
