import { Section } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetCombat.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { ConcealType, DamageType } from "../consts.ts";
import { SelectInput } from "../components/SelectInput.tsx";
import { SkillSelect, AttributeSelect } from "../components/AttributeSelect.tsx";
import { RollButton } from "../components/Buttons.tsx";
import { Checkbox } from "../components/Checkbox.tsx";
import { Row, RowDescription } from "../components/Row.tsx";
import translation from "../translation.json";
import { H3 } from "../components/globals/Headings.tsx";

export const SheetCombat = () => (
  <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
    <datalist id="melee-weapon-datalist">
      {Object.keys(translation)
        .filter((key) => key.startsWith(`weapon-melee-`))
        .map((key) => (
          <option data-i18n={key} key={key} />
        ))}
    </datalist>
    <datalist id="ranged-weapon-datalist">
      {Object.keys(translation)
        .filter((key) => key.startsWith(`weapon-ranged-`))
        .map((key) => (
          <option data-i18n={key} key={key} />
        ))}
    </datalist>

    <Section i18n="initiative-dice-pool-label">
      <Row>
        <AttributeSelect name="attribute1Roll" defaultValue="Dexterity" />
        <AttributeSelect name="attribute2Roll" defaultValue="Wits" />
        <Input type="number" name="modNumber" i18n="result-modifiers-label" />
        <Input type="number" name="initrollDiff" defaultValue={6} i18n="difficulty-label" />
        <Checkbox name="initiativeaddTracker" i18n="use-initiative-label" symbol="low_priority" />
        <RollButton name="initiativeRoll" />
      </Row>
    </Section>

    <Section i18n="combat-dice-pools-label">
      <Row>
        <Checkbox name="useHealth" i18n="use-health-minus-label" symbol="ecg_heart" />
        <Input name="celeritySpent" type="number" i18n="use-celerity-minus-label" />
      </Row>
    </Section>

    <Section i18n="combat-defence-dice-pools-label">
      <RepeatingSection name="brawlCombatDice">
        {() => (
          <Row>
            <Input i18n="name-u" name="rollName" className="sheet-inputname" />
            <AttributeSelect name="rollAttribute" />
            <SkillSelect name="rollSkill" />
            <Input type="number" name="difficulty" defaultValue={6} i18n="difficulty-label" />
            <RollButton name="combatRoll" childrenName="combatRollNumber" />
            <RowDescription>
              <ResizingTextarea i18n="notes-label" name="description" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="combat-melee-dice-pools-label">
      <RepeatingSection name="meleeCombatDice">
        {() => (
          <Row>
            <Input i18n="name-u" name="rollName" className="sheet-inputname" />
            <AttributeSelect name="rollAttribute" />
            <SkillSelect name="rollSkill" />
            <Input type="number" name="rollAccuracy" defaultValue={0} i18n="accuracy-label" />
            <Input type="number" name="rollDifficulty" defaultValue={6} i18n="difficulty-label" />
            <RollButton name="combatRoll" childrenName="combatRollNumber" />
            <RowDescription>
              <Row>
                <H3 i18n="damage-u" />
                <AttributeSelect name="damageAttribute" i18n="damage-attribute-label" />
                <Input type="number" name="damageExtra" defaultValue={0} i18n="damage-bonus-label" />
                <RollButton name="damageRoll" childrenName="damageRollNumber" />
              </Row>
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="combat-ranged-dice-pools-label">
      <RepeatingSection name="rangedCombatDice">
        {() => (
          <Row>
            <Input i18n="name-u" name="rollName" className="sheet-inputname" />
            <AttributeSelect name="rollAtrribute" />
            <SkillSelect name="rollSkill" />
            <Input type="number" name="rollAccuracy" defaultValue={0} i18n="accuracy-label" />
            <Input type="number" name="rollDifficulty" defaultValue={6} i18n="difficulty-label" />
            <RollButton name="combatRoll" childrenName="combatRollNumber" />
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="meleeweapons-u">
      <RepeatingSection name="MeleeWeapons">
        {() => (
          <Row>
            <Input i18n="name2-u" name="Name" />
            <Input i18n="type-u" name="Type" list="melee-weapon-datalist" />
            {/*<Input i18n="minstr-u" type="number" name="MinimumStrength" />*/}
            <Input i18n="damage-u" type="number" name="Damage" />
            <SelectInput i18n="type-u" name="Lethality">
              <option value={DamageType.Bashing} data-i18n="bashing-u" />
              <option value={DamageType.Lethal} data-i18n="lethal-u" />
              <option value={DamageType.Aggravated} data-i18n="aggravated-u" />
            </SelectInput>
            <SelectInput i18n="conceal-u" name="Conceal">
              <option value={ConcealType.Pocket} data-i18n="weapon-conceal-pocket-label" />
              <option value={ConcealType.Jacket} data-i18n="weapon-conceal-jacket-label" />
              <option value={ConcealType.Trench} data-i18n="weapon-conceal-trench-label" />
              <option value={ConcealType.Impossible} data-i18n="weapon-conceal-impossible-label" />
            </SelectInput>
            <RollButton name="combatRoll" childrenName="combatRollNumber" />
            <RowDescription>
              <ResizingTextarea i18n="notes-label" name="Desc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="rangedweapons-u">
      <RepeatingSection name="RangedWeapons">
        {() => (
          <Row>
            <Input i18n="name2-u" name="Name" />
            <Input i18n="type-u" name="Type" list="ranged-weapon-datalist" />
            {/*<Input i18n="minstr-u" type="number" name="MinimumStrength" />*/}
            <Input i18n="damage-u" type="number" name="Damage" />
            <SelectInput i18n="type-u" name="Lethality" defaultValue={0}>
              <option value={0} data-i18n="bashing-u" />
              <option value={2} data-i18n="lethal-u" />
              <option value={3} data-i18n="aggravated-u" />
            </SelectInput>
            <Input i18n="range-u" name="Range" type="number" />
            <Input i18n="rate-u" name="Rate" type="number" />
            <Input i18n="clip-u" name="Clip" type="number" />
            <SelectInput i18n="conceal-u" name="Conceal">
              <option value={ConcealType.Pocket} data-i18n="weapon-conceal-pocket-label" />
              <option value={ConcealType.Jacket} data-i18n="weapon-conceal-jacket-label" />
              <option value={ConcealType.Trench} data-i18n="weapon-conceal-trench-label" />
              <option value={ConcealType.Impossible} data-i18n="weapon-conceal-impossible-label" />
            </SelectInput>
            <RollButton name="combatRoll" childrenName="combatRollNumber" />
            <RowDescription>
              <ResizingTextarea i18n="notes-label" name="Desc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="armorshields-u">
      <RepeatingSection name="RangedAttacks">
        {() => (
          <Row>
            <Checkbox i18n="onq-u" className="sheet-APIcheck" name="WearingArmor" />
            <Input i18n="name2-u" name="ArmorName" />
            <Input i18n="class-u" name="ArmorClass" />
            <Input i18n="rating-u" type="number" name="ArmorRating" />
            <Input i18n="penalty-u" type="number" name="ArmorPenalty" />
            <select name="ArmorAgainstAggravated" defaultValue={0}>
              {/*todo*/}
              <option value={0} data-i18n="no-u" />
              <option value={1} data-i18n="yes-u" />
            </select>
            <RowDescription>
              <ResizingTextarea i18n="notes-u" name="ArmorDesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
