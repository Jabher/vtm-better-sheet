import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetDice.css";
import { RollButton } from "../components/Buttons.tsx";
import { DisciplineSelect } from "../components/DisciplineSelect.tsx";
import { AbilitySelect, AttributeSelect } from "../components/AttributeSelect.tsx";
import { SelectInput } from "../components/SelectInput.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";

export const SheetDice = () => (
  <div className="sheet-tab-content sheet-dice">
    <Section>
      <SectionHead i18n="boosts-label" />
      <SectionBody className="sheet-3col">
        <div>
          <Input i18n="strength-u" name="attr_StrengthBoost" type="number" />
          <Input i18n="dexterity-u" name="attr_DexterityBoost" type="number" />
          <Input i18n="stamina-u" name="attr_StaminaBoost" type="number" />
        </div>
        <div>
          <Input i18n="charisma-u" name="attr_CharismaBoost" type="number" />
          <Input i18n="manipulation-u" name="attr_ManipulationBoost" type="number" />
          <Input i18n="appearance-u" name="attr_AppearanceBoost" type="number" />
        </div>
        <div>
          <Input i18n="perception-u" name="attr_PerceptionBoost" type="number" />
          <Input i18n="intelligence-u" name="attr_IntelligenceBoost" type="number" />
          <Input i18n="wits-u" name="attr_WitsBoost" type="number" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="initiative-dice-pool-label" />
      <SectionBody className="sheet-colrow sheet-table">
        <div className="sheet-dice--repeating-line">
          <AttributeSelect name="attr_attribute1Roll" />
          <AttributeSelect name="attr_attribute2Roll" />
          <DisciplineSelect name="attr_initiativedisciplineRoll" />
          <Input type="number" name="attr_modNumber" i18n="result-modifiers-label" />
          <SelectInput name="attr_initiativeuseHealth">
            <option value="@{Health}">Yes</option>
            <option value={0}>No</option>
          </SelectInput>
          <Input type="number" name="attr_initrollDiff" defaultValue={6} i18n="difficulty-label" />
          <SelectInput name="attr_initiativeaddTracker" className="sheet-center-select" defaultValue={0}>
            <option value="&{tracker}">Yes</option>
            <option value=" ">No</option>
          </SelectInput>
          <RollButton
              name="initiativeRoll"
              value="&{template:wodinitiative} {{name=@{Name}}} {{roll_name=Initiative}} {{attr1=Attribute 1}} {{attr1_num=@{attribute1Roll}}} {{attr2=Attribute 2}} {{attr2_num=@{attribute2Roll}}} {{pwr=Celerity}} {{pwr_num=@{initiativedisciplineRoll}}} {{mod_num=@{modNumber}}} {{hp_mod=@{initiativeuseHealth}}} {{result=[[[[@{attribute1Roll}+@{attribute2Roll}+@{initiativedisciplineRoll}+@{modNumber}+@{initiativeuseHealth}]]+[[1d10]] @{initiativeaddTracker}]]}} "
          />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="main-dice-pools-label" />
      <SectionBody className="sheet-colrow sheet-table">
        <RepeatingSection name="mainDice">
          {() => (
            <div className="sheet-dice--repeating-line">
              <Input name="attr_mainrollTitle" i18n="name2-u" />
              <AttributeSelect name="attr_mainattributeRoll" />
              <AbilitySelect name="attr_mainabilityRoll" />
              <DisciplineSelect i18n="discipline-label" />
              <Input type="number" name="attr_mainmodNumber" i18n="result-modifiers-label" />
              {/*todo i18n штраф за здоровье*/}
              <SelectInput name="attr_useHealth">
                <option value="@{Health}">Yes</option>
                <option value={0}>No</option>
              </SelectInput>
              <Input type="number" name="attr_mainrollDiff" defaultValue={6} i18n="difficulty-label" />
              <RollButton
                name="mainRoll"
                value="&{template:wod} {{name=@{Name}}} {{roll_name=@{mainrollTitle}}} {{attr=Attribute}} {{attr_num=@{mainattributeRoll}}} {{skill=Ability}} {{skill_num=@{mainabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{maindisciplineRoll}}} {{mod_num=@{mainmodNumber}}} {{hp_mod=@{useHealth}}} {{result=[[{(@{mainattributeRoll}+@{mainabilityRoll}+@{maindisciplineRoll}+@{mainmodNumber}+@{useHealth})d10sd}>@{mainrollDiff}f1]]}} "
              />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="combat-dice-pools-label" />
      <SectionBody>
        <RepeatingSection name="repeating_combatDice">
          {() => (
            <div className="sheet-dice--repeating-line">
              <Input i18n="name-u" name="attr_combatrollTitle" className="sheet-inputname" />
              <AttributeSelect name="attr_combatattributeRoll" />
              <AttributeSelect name="attr_combatabilityRoll" />
              <DisciplineSelect i18n="discipline-label" name="attr_combatdisciplineRoll" />
              <Input type="number" name="attr_combatmodNumber" i18n="result-modifiers-label" />
              <SelectInput name="attr_combatuseHealth">
                <option value="@{Health}">Yes</option>
                <option value={0}>No</option>
              </SelectInput>
              <Input type="number" name="attr_combatDiff" defaultValue={6} i18n="difficulty-label" />
              <RollButton
                name="combatRoll"
                value="&{template:wod} {{name=@{Name}}} {{roll_name=@{combatrollTitle}}} {{attr=Attribute}} {{attr_num=@{combatattributeRoll}}} {{skill=Ability}} {{skill_num=@{combatabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{combatdisciplineRoll}}} {{mod_num=@{combatmodNumber}}} {{hp_mod=@{combatuseHealth}}} {{result=[[{(@{combatattributeRoll}+@{combatabilityRoll}+@{combatdisciplineRoll}+@{combatmodNumber}+@{combatuseHealth})d10sd}>@{combatDiff}f1]]}} "
              />
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
              <Input i18n="name-u" name="attr_rollCustomDiceTitle" className="sheet-inputname" />
              <Input type="number" name="attr_rollCustomDiceAmount" i18n="result-modifiers-label" />
              <SelectInput name="attr_combatuseHealth">
                <option value="@{Health}">Yes</option>
                <option value={0}>No</option>
              </SelectInput>
              <Input type="number" name="attr_rollCustomDifficulty" defaultValue={6} i18n="difficulty-label" />
              <RollButton
                name="combatRoll"
                value="&{template:wod} {{name=@{Name}}} {{roll_name=@{combatrollTitle}}} {{attr=Attribute}} {{attr_num=@{combatattributeRoll}}} {{skill=Ability}} {{skill_num=@{combatabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{combatdisciplineRoll}}} {{mod_num=@{combatmodNumber}}} {{hp_mod=@{combatuseHealth}}} {{result=[[{(@{combatattributeRoll}+@{combatabilityRoll}+@{combatdisciplineRoll}+@{combatmodNumber}+@{combatuseHealth})d10sd}>@{combatDiff}f1]]}} "
              />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
