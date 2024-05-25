import { Counter } from "../components/Counter.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Section } from "../components/Section.tsx";
import { Input } from "../components/Input.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import "./SheetPowers.css";
import { DisciplineSelect } from "../components/DisciplineSelect.tsx";
import { Row, RowDescription } from "../components/Row.tsx";
import { AttributeSelect, SkillSelect } from "../components/AttributeSelect.tsx";
import { RollButton } from "../components/Buttons.tsx";
import { H3 } from "../components/globals/Headings.tsx";
import { Checkbox } from "../components/Checkbox.tsx";

export const SheetPowers = () => (
  <div className="sheet-tab-content sheet-powers">
    <Section i18n="discipline-powers-label">
      <RepeatingSection name="powers">
        {() => (
          <Row>
            <DisciplineSelect i18n="discipline-label" name="SetDisciplineName" />
            <Input i18n="discipline-power-label" type="text" name="SetDisciplinePower" />
            <Counter name="SetDisciplineLevel" from={1} to={10} />
            <RowDescription>
              <Row>
                <H3 i18n="dice-pool-label" style={{ alignSelf: "center", flexBasis: 0 }} />
                <Checkbox name="rollUseHealth" i18n="use-health-minus-label" symbol="ecg_heart" />
                <AttributeSelect name="rollAttr" />
                <SkillSelect name="rollSkill" />
                <Input type="number" name="difficulty" defaultValue={6} i18n="difficulty-label" />
                <RollButton
                  data-attribute="rollNumber"
                  data-difficulty-value="difficulty"
                  data-attribute-name-prefix-value="SetDisciplineName"
                  data-attribute-name-value="SetDisciplinePower"
                  childrenName="rollNumber"
                />
              </Row>
              <ResizingTextarea i18n="description-label" name="itemDescription" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="discipline-combination-powers-label">
      <RepeatingSection name="combinationPowers">
        {() => (
          <Row>
            <div className="sheet-powers--multi">
              <Input i18n="name2-u" name="ComboDisciplineName" />
              <div className="sheet-powers--multi-description">
                <div>
                  <DisciplineSelect i18n="discipline-1-label" name="ComboDisciplinePower1" />
                  <Counter name="ComboDisciplineLevel1" from={1} to={10} />
                </div>
                <div>
                  <DisciplineSelect i18n="discipline-2-label" name="ComboDisciplinePower2" />
                  <Counter name="ComboDisciplineLevel2" from={1} to={10} />
                </div>
                <div>
                  <DisciplineSelect i18n="discipline-3-label" name="ComboDisciplinePower3" />
                  <Counter name="ComboDisciplineLevel3" from={1} to={10} />
                </div>
              </div>
            </div>
            <RowDescription>
              <Row>
                <H3 i18n="dice-pool-label" style={{ alignSelf: "center", flexBasis: 0 }} />
                <Checkbox name="rollUseHealth" i18n="use-health-minus-label" symbol="ecg_heart" />
                <AttributeSelect name="rollAttr" />
                <SkillSelect name="rollSkill" />
                <Input type="number" name="difficulty" defaultValue={6} i18n="difficulty-label" />
                <RollButton
                  data-attribute="rollNumber"
                  data-difficulty-value="difficulty"
                  data-attribute-name-value="ComboDisciplineName"
                  childrenName="rollNumber"
                />
              </Row>
              <ResizingTextarea i18n="description-label" name="itemDescription" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
