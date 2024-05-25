import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetDice.css";
import { RollButton } from "../components/Buttons.tsx";
import { DisciplineSelect } from "../components/DisciplineSelect.tsx";
import { SkillSelect, AttributeSelect } from "../components/AttributeSelect.tsx";
import { SelectInput } from "../components/SelectInput.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";

export const SheetDice = () => (
  <div className="sheet-tab-content sheet-dice">
    <Section>
      <SectionHead i18n="boosts-label" />
      <SectionBody className="sheet-3col">
        <div>
          <Input i18n="strength-u" name="StrengthBoost" type="number" />
          <Input i18n="dexterity-u" name="DexterityBoost" type="number" />
          <Input i18n="stamina-u" name="StaminaBoost" type="number" />
        </div>
        <div>
          <Input i18n="charisma-u" name="CharismaBoost" type="number" />
          <Input i18n="manipulation-u" name="ManipulationBoost" type="number" />
          <Input i18n="appearance-u" name="AppearanceBoost" type="number" />
        </div>
        <div>
          <Input i18n="perception-u" name="PerceptionBoost" type="number" />
          <Input i18n="intelligence-u" name="IntelligenceBoost" type="number" />
          <Input i18n="wits-u" name="WitsBoost" type="number" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="main-dice-pools-label" />
      <SectionBody className="sheet-colrow sheet-table">
        <RepeatingSection name="mainDice">
          {() => (
            <div className="sheet-dice--repeating-line">
              <Input name="mainrollTitle" i18n="name2-u" />
              <AttributeSelect name="mainattributeRoll" />
              <SkillSelect name="mainabilityRoll" />
              <DisciplineSelect i18n="discipline-label" />
              <Input type="number" name="mainmodNumber" i18n="result-modifiers-label" />
              {/*todo i18n штраф за здоровье*/}
              <SelectInput name="useHealth">
                <option value="@{Health}">Yes</option>
                <option value={0}>No</option>
              </SelectInput>
              <Input type="number" name="mainrollDiff" defaultValue={6} i18n="difficulty-label" />
              <RollButton name="mainRoll"/>
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="custom-dice-pools-label" />
      <SectionBody>
        <RepeatingSection name="CustomDice">
          {() => (
            <div className="sheet-dice--repeating-line">
              <Input i18n="name-u" name="rollCustomDiceTitle" className="sheet-inputname" />
              <Input type="number" name="rollCustomDiceAmount" i18n="result-modifiers-label" />
              <SelectInput name="combatuseHealth">
                <option value="@{Health}">Yes</option>
                <option value={0}>No</option>
              </SelectInput>
              <Input type="number" name="rollCustomDifficulty" defaultValue={6} i18n="difficulty-label" />
              <RollButton name="combatRoll"/>
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
