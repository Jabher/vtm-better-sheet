import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
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
    <div style={{ display: "none" }}>
      <input type="text" name="attr_CurrentMeleeWeaponID" />
      <input type="text" name="attr_CurrentMeleeWeaponName" />
      <input type="text" name="attr_CurrentMeleeWeaponLethality" />
      <input type="text" name="attr_CurrentMeleeWeaponDamage" />
      <input type="text" name="attr_CurrentMeleeWeaponDamageAttr" />
      <input type="text" name="attr_CurrentRangedWeaponID" />
      <input type="text" name="attr_CurrentRangedWeaponName" />
      <input type="text" name="attr_CurrentRangedWeaponLethality" />
      <input type="text" name="attr_CurrentRangedWeaponDamage" />
    </div>
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

    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", flexDirection: "row-reverse" }}>
      <Section i18n="initiative-dice-pool-label" style={{ flex: "1 1 min-content" }}>
        <Row>
          <Checkbox name="initiativeAddTracker" i18n="use-initiative-label" symbol="low_priority" />
          <Input type="number" name="initiativeModifier" i18n="result-modifiers-label" />
          <RollButton name="initiativeRoll" childrenName="initiativeBonus" />
        </Row>
      </Section>
      <Section i18n="combat-dice-pools-label" style={{ flex: "1 1 min-content" }}>
        <Row>
          <Checkbox name="useHealthInCombat" i18n="use-health-minus-label" symbol="ecg_heart" />
          {/*todo use var*/}
          <Input name="celeritySpent" type="number" i18n="use-celerity-minus-label" />
          <Input name="potenceSpent" type="number" i18n="use-potence-minus-label" />
        </Row>
      </Section>
    </div>

    <Section i18n="combat-defence-dice-pools-label" collapseKey="brawlCombatDice">
      <RepeatingSection name="brawlCombatDice">
        {() => (
          <Row>
            <Input i18n="name-u" name="rollName" className="sheet-inputname" />
            <AttributeSelect name="rollAttr" />
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

    <Section>
      <SectionHead i18n="combat-melee-dice-pools-label" collapseKey="meleeCombatDice">
        <span name="attr_CurrentMeleeWeaponName" className="sheet-tabCombat--weaponName" />
      </SectionHead>
      <SectionBody>
        <RepeatingSection name="meleeCombatDice">
          {() => (
            <Row>
              <Input i18n="name-u" name="rollName" className="sheet-inputname" />
              <AttributeSelect name="rollAttr" />
              <SkillSelect name="rollSkill" />
              <Input type="number" name="rollAccuracy" defaultValue={0} i18n="accuracy-label" />
              <Input type="number" name="rollDifficulty" defaultValue={6} i18n="difficulty-label" />
              <RollButton name="combatRoll" childrenName="combatRollNumber" />
              <RowDescription>
                <Row>
                  <H3
                    i18n="damage-u"
                    style={{ padding: "0 16px", textAlign: "end", alignSelf: "center", flexBasis: "100%" }}
                  />
                  <AttributeSelect name="damageAttr" i18n="damage-attribute-label" />
                  <Input type="number" name="damageBonus" defaultValue={0} i18n="damage-bonus-label" />
                  <RollButton name="damageRoll" childrenName="damageRollNumber" />
                </Row>
              </RowDescription>
            </Row>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="combat-ranged-dice-pools-label" collapseKey="rangedCombatDice">
        <span name="attr_CurrentRangedWeaponName" className="sheet-tabCombat--weaponName" />
      </SectionHead>
      <SectionBody>
        <RepeatingSection name="rangedCombatDice">
          {() => (
            <Row>
              <Input i18n="name-u" name="rollName" className="sheet-inputname" />
              <AttributeSelect name="rollAtrr" />
              <SkillSelect name="rollSkill" />
              <Input type="number" name="rollAccuracy" defaultValue={0} i18n="accuracy-label" />
              <Input type="number" name="rollDifficulty" defaultValue={6} i18n="difficulty-label" />
              <RollButton name="combatRoll" childrenName="combatRollNumber" />
              <RowDescription>
                <Row>
                  <H3
                    i18n="damage-u"
                    style={{ padding: "0 16px", textAlign: "end", alignSelf: "center", flexBasis: "100%" }}
                  />
                  <Input type="number" name="damageBonus" defaultValue={0} i18n="damage-bonus-label" />
                  <RollButton name="damageRoll" childrenName="damageRollNumber" />
                </Row>
              </RowDescription>
            </Row>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section i18n="meleeweapons-u" collapseKey="MeleeWeapons">
      <RepeatingSection name="MeleeWeapon">
        {() => (
          <Row>
            <Checkbox i18n="onq-u" className="sheet-APIcheck" name="Equipped" />
            <Input i18n="name2-u" name="WeaponName" />
            <Input i18n="type-u" name="Type" list="melee-weapon-datalist" />
            <Checkbox i18n="weapon-is-brawl-label" symbol="back_hand" name="BrawlFlag" />
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
              <Row>
                <H3
                  i18n="damage-u"
                  style={{ padding: "0 16px", textAlign: "end", alignSelf: "center", flexBasis: "100%" }}
                />
                <AttributeSelect name="damageAttr" defaultValue="Strength" />
                <Input i18n="damage-bonus-label" type="number" name="Damage" />
                <RollButton name="damageRoll" childrenName="damageRollNumber" />
              </Row>
              <ResizingTextarea i18n="notes-label" name="Desc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="rangedweapons-u" collapseKey="RangedWeapons">
      <RepeatingSection name="RangedWeapon">
        {() => (
          <Row>
            <Checkbox i18n="onq-u" className="sheet-APIcheck" name="Equipped" />
            <Input i18n="name2-u" name="WeaponName" />
            <Input i18n="type-u" name="Type" list="ranged-weapon-datalist" />
            <SelectInput i18n="type-u" name="Lethality" defaultValue={0}>
              <option value={0} data-i18n="bashing-u" />
              <option value={2} data-i18n="lethal-u" />
              <option value={3} data-i18n="aggravated-u" />
            </SelectInput>
            <SelectInput i18n="conceal-u" name="Conceal">
              <option value={ConcealType.Pocket} data-i18n="weapon-conceal-pocket-label" />
              <option value={ConcealType.Jacket} data-i18n="weapon-conceal-jacket-label" />
              <option value={ConcealType.Trench} data-i18n="weapon-conceal-trench-label" />
              <option value={ConcealType.Impossible} data-i18n="weapon-conceal-impossible-label" />
            </SelectInput>
            <RollButton name="combatRoll" childrenName="combatRollNumber" />
            <RowDescription>
              <Row>
                <Input i18n="rate-u" name="Rate" type="number" />
                <Input i18n="range-u" name="Range" type="number" />
                <Input i18n="clip-u" name="Clip" />
                <H3
                  i18n="damage-u"
                  style={{ padding: "0 16px", textAlign: "end", alignSelf: "center", flexBasis: "100%" }}
                />
                <Input i18n="damage-bonus-label" type="number" name="Damage" />
                <RollButton name="damageRoll" childrenName="damageRollNumber" />
              </Row>
              <ResizingTextarea i18n="notes-label" name="Desc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>

    <Section i18n="armorshields-u" collapseKey="ArmorShields">
      <RepeatingSection name="ArmorShields">
        {() => (
          <Row>
            <Checkbox i18n="onq-u" className="sheet-APIcheck" name="WearingArmor" />
            <Input i18n="name2-u" name="ArmorName" />
            <Input i18n="class-u" name="ArmorClass" />
            <Checkbox name="ArmorAgainstAggravated" i18n="armor-protects-from-aggravated-label" symbol="local_police" />
            <Input i18n="rating-u" type="number" name="ArmorRating" />
            <Input i18n="penalty-u" type="number" name="ArmorPenalty" />
            <RowDescription>
              <ResizingTextarea i18n="notes-u" name="ArmorDesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
