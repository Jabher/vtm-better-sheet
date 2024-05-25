import {H4} from "../components/globals/Headings.tsx";
import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {RepeatingSection} from "../components/RepeatingSection.tsx";
import {Input} from "../components/Input.tsx";
import "./SheetCombat.css";
import {ResizingTextarea} from "../components/ResizingTextarea.tsx";
import {ConcealType, DamageType} from "../consts.ts";
import {SelectInput} from "../components/SelectInput.tsx";
import {AbilitySelect, AttributeSelect} from "../components/AttributeSelect.tsx";
import {RollButton} from "../components/Buttons.tsx";
import {Checkbox} from "../components/Checkbox.tsx";
import {Row, RowDescription} from "../components/Row.tsx";
import {DisciplineSelect} from "../components/DisciplineSelect.tsx";

export const SheetCombat = () => (
    <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
        <datalist id="melee-weapon-datalist">
            <option data-i18n="weapon-melee-sap-label"/>
            <option data-i18n="weapon-melee-club-label"/>
            <option data-i18n="weapon-melee-knife-label"/>
            <option data-i18n="weapon-melee-sword-label"/>
            <option data-i18n="weapon-melee-axe-label"/>
            <option data-i18n="weapon-melee-stake-label"/>
        </datalist>
        <datalist id="ranged-weapon-datalist">
            <option data-i18n="weapon-ranged-light-revolver-label"/>
            <option data-i18n="weapon-ranged-heavy-revolver-label"/>
            <option data-i18n="weapon-ranged-light-pistol-label"/>
            <option data-i18n="weapon-ranged-heavy-pistol-label"/>
            <option data-i18n="weapon-ranged-rifle-label"/>
            <option data-i18n="weapon-ranged-light-smg-label"/>
            <option data-i18n="weapon-ranged-heavy-smg-label"/>
            <option data-i18n="weapon-ranged-assault-label"/>
            <option data-i18n="weapon-ranged-shotgun-label"/>
            <option data-i18n="weapon-ranged-shotgun-semiauto-label"/>
            <option data-i18n="weapon-ranged-shotgun-crossbow-label"/>
        </datalist>

        <Section>
            <SectionHead i18n="initiative-dice-pool-label" />
            <SectionBody className="sheet-colrow sheet-table">
                <Row>
                    <AttributeSelect name="attr_attribute1Roll" defaultValue="@{Dexterity}+@{DexterityBoost}" />
                    <AttributeSelect name="attr_attribute2Roll" defaultValue="@{Wits}+@{WitsBoost}" />
                    <DisciplineSelect name="attr_initiativedisciplineRoll" />
                    <Input type="number" name="attr_modNumber" i18n="result-modifiers-label" />
                    <Checkbox name="attr_initiativeuseHealth" i18n="use-health-minus-label" symbol="ecg_heart" />
                    <Input type="number" name="attr_initrollDiff" defaultValue={6} i18n="difficulty-label" />
                    <Checkbox name="attr_initiativeaddTracker" i18n="use-initiative-label" symbol="low_priority" />
                    <RollButton
                        name="initiativeRoll"
                        value="&{template:wodinitiative} {{name=@{Name}}} {{roll_name=Initiative}} {{attr1=Attribute 1}} {{attr1_num=@{attribute1Roll}}} {{attr2=Attribute 2}} {{attr2_num=@{attribute2Roll}}} {{pwr=Celerity}} {{pwr_num=@{initiativedisciplineRoll}}} {{mod_num=@{modNumber}}} {{hp_mod=@{initiativeuseHealth}}} {{result=[[[[@{attribute1Roll}+@{attribute2Roll}+@{initiativedisciplineRoll}+@{modNumber}+@{initiativeuseHealth}]]+[[1d10]] @{initiativeaddTracker}]]}} "
                    />
                </Row>
            </SectionBody>
        </Section>

        <Section>
            <SectionHead i18n="combat-brawl-dice-pools-label"/>
            <SectionBody>
                <RepeatingSection name="brawlCombatDice">
                    {() => (
                        <Row>
                            <Input i18n="name-u" name="attr_combatrollTitle" className="sheet-inputname"/>
                            <AttributeSelect name="attr_combatattributeRoll"/>
                            <AbilitySelect name="attr_combatabilityRoll"/>
                            <Input type="number" name="attr_combatmodNumber" i18n="result-modifiers-label"/>
                            <Checkbox name="attr_initiativeuseHealth" i18n="use-health-minus-label" symbol="ecg_heart"/>
                            <Input type="number" name="attr_combatDiff" defaultValue={6} i18n="difficulty-label"/>
                            <RollButton
                                name="combatRoll"
                                value="&{template:wod} {{name=@{Name}}} {{roll_name=@{combatrollTitle}}} {{attr=Attribute}} {{attr_num=@{combatattributeRoll}}} {{skill=Ability}} {{skill_num=@{combatabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{combatdisciplineRoll}}} {{mod_num=@{combatmodNumber}}} {{hp_mod=@{combatuseHealth}}} {{result=[[{(@{combatattributeRoll}+@{combatabilityRoll}+@{combatdisciplineRoll}+@{combatmodNumber}+@{combatuseHealth})d10sd}>@{combatDiff}f1]]}} "
                            />
                            <RowDescription>
                                <ResizingTextarea i18n="notes-label" name="attr_Desc"/>
                            </RowDescription>
                        </Row>
                    )}
                </RepeatingSection>
            </SectionBody>
        </Section>
        <Section>
            <SectionHead i18n="meleeweapons-u"/>
            <SectionBody>
                <RepeatingSection name="MeleeWeapons">
                    {() => (
                        <Row>
                            <Input i18n="name2-u" name="attr_Name"/>
                            <Input i18n="type-u" name="attr_Type" list="melee-weapon-datalist"/>
                            {/*<Input i18n="minstr-u" type="number" name="attr_MinimumStrength" />*/}
                            <Input i18n="damage-u" type="number" name="attr_Damage"/>
                            <SelectInput i18n="type-u" name="attr_Lethality">
                                <option value={DamageType.Bashing} data-i18n="bashing-u"/>
                                <option value={DamageType.Lethal} data-i18n="lethal-u"/>
                                <option value={DamageType.Aggravated} data-i18n="aggravated-u"/>
                            </SelectInput>
                            <SelectInput i18n="conceal-u" name="attr_Conceal">
                                <option value={ConcealType.Pocket} data-i18n="weapon-conceal-pocket-label"/>
                                <option value={ConcealType.Jacket} data-i18n="weapon-conceal-jacket-label"/>
                                <option value={ConcealType.Trench} data-i18n="weapon-conceal-trench-label"/>
                                <option value={ConcealType.Impossible} data-i18n="weapon-conceal-impossible-label"/>
                            </SelectInput>
                            <RowDescription>
                                <ResizingTextarea i18n="notes-label" name="attr_Desc"/>
                            </RowDescription>
                        </Row>
                    )}
                </RepeatingSection>
            </SectionBody>
        </Section>

        <Section>
            <SectionHead i18n="combat-melee-dice-pools-label"/>
            <SectionBody>
                <RepeatingSection name="meleeCombatDice">
                    {() => (
                        <Row>
                            <Input i18n="name-u" name="attr_combatrollTitle" className="sheet-inputname"/>
                            <AttributeSelect name="attr_combatattributeRoll"/>
                            <AbilitySelect name="attr_combatabilityRoll"/>
                            <Input type="number" name="attr_combatmodNumber" i18n="result-modifiers-label"/>
                            <Checkbox name="attr_initiativeuseHealth" i18n="use-health-minus-label" symbol="ecg_heart"/>
                            <Input type="number" name="attr_combatDiff" defaultValue={6} i18n="difficulty-label"/>
                            <RollButton
                                name="combatRoll"
                                value="&{template:wod} {{name=@{Name}}} {{roll_name=@{combatrollTitle}}} {{attr=Attribute}} {{attr_num=@{combatattributeRoll}}} {{skill=Ability}} {{skill_num=@{combatabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{combatdisciplineRoll}}} {{mod_num=@{combatmodNumber}}} {{hp_mod=@{combatuseHealth}}} {{result=[[{(@{combatattributeRoll}+@{combatabilityRoll}+@{combatdisciplineRoll}+@{combatmodNumber}+@{combatuseHealth})d10sd}>@{combatDiff}f1]]}} "
                            />
                        </Row>
                    )}
                </RepeatingSection>
            </SectionBody>
        </Section>

        <Section>
            <SectionHead i18n="rangedweapons-u"/>
            <SectionBody>
                <RepeatingSection name="RangedWeapons">
                    {() => (
                        <Row>
                            <Input i18n="name2-u" name="attr_Name"/>
                            <Input i18n="type-u" name="attr_Type" list="ranged-weapon-datalist"/>
                            {/*<Input i18n="minstr-u" type="number" name="attr_MinimumStrength" />*/}
                            <Input i18n="damage-u" type="number" name="attr_Damage"/>
                            <SelectInput i18n="type-u" name="attr_Lethality" defaultValue={0}>
                                <option value={0} data-i18n="bashing-u"/>
                                <option value={2} data-i18n="lethal-u"/>
                                <option value={3} data-i18n="aggravated-u"/>
                            </SelectInput>
                            <Input i18n="range-u" name="attr_Range" type="number"/>
                            <Input i18n="rate-u" name="attr_Rate" type="number"/>
                            <Input i18n="clip-u" name="attr_Clip" type="number"/>
                            <SelectInput i18n="conceal-u" name="Conceal">
                                <option value={ConcealType.Pocket} data-i18n="weapon-conceal-pocket-label"/>
                                <option value={ConcealType.Jacket} data-i18n="weapon-conceal-jacket-label"/>
                                <option value={ConcealType.Trench} data-i18n="weapon-conceal-trench-label"/>
                                <option value={ConcealType.Impossible} data-i18n="weapon-conceal-impossible-label"/>
                            </SelectInput>
                            <RowDescription>
                                <ResizingTextarea i18n="notes-label" name="attr_Desc"/>
                            </RowDescription>
                        </Row>
                    )}
                </RepeatingSection>
            </SectionBody>
        </Section>

        <Section>
            <SectionHead i18n="combat-ranged-dice-pools-label"/>
            <SectionBody>
                <RepeatingSection name="rangedCombatDice">
                    {() => (
                        <Row>
                            <Input i18n="name-u" name="attr_combatrollTitle" className="sheet-inputname"/>
                            <AttributeSelect name="attr_combatattributeRoll"/>
                            <AbilitySelect name="attr_combatabilityRoll"/>
                            <Input type="number" name="attr_combatmodNumber" i18n="result-modifiers-label"/>
                            <Checkbox name="attr_initiativeuseHealth" i18n="use-health-minus-label" symbol="ecg_heart"/>
                            <Input type="number" name="attr_combatDiff" defaultValue={6} i18n="difficulty-label"/>
                            <RollButton
                                name="combatRoll"
                                value="&{template:wod} {{name=@{Name}}} {{roll_name=@{combatrollTitle}}} {{attr=Attribute}} {{attr_num=@{combatattributeRoll}}} {{skill=Ability}} {{skill_num=@{combatabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{combatdisciplineRoll}}} {{mod_num=@{combatmodNumber}}} {{hp_mod=@{combatuseHealth}}} {{result=[[{(@{combatattributeRoll}+@{combatabilityRoll}+@{combatdisciplineRoll}+@{combatmodNumber}+@{combatuseHealth})d10sd}>@{combatDiff}f1]]}} "
                            />
                        </Row>
                    )}
                </RepeatingSection>
            </SectionBody>
        </Section>


        <Section>
            <SectionHead i18n="armorshields-u"/>
            <SectionBody>
                <RepeatingSection name="RangedAttacks">
                    {() => (
                        <Row>
                            <H4 i18n="onq-u"/>
                            <input type="checkbox" className="sheet-APIcheck" name="attr_WearingArmor"/>
                            <Input i18n="name2-u" name="attr_ArmorName"/>
                            <Input i18n="class-u" name="attr_ArmorClass"/>
                            <Input i18n="rating-u" type="number" name="attr_ArmorRating"/>
                            <Input i18n="penalty-u" type="number" name="attr_ArmorPenalty"/>
                            <select name="attr_ArmorAgainstAggravated" defaultValue={0}>
                                {/*todo*/}
                                <option value={0} data-i18n="no-u"/>
                                <option value={1} data-i18n="yes-u"/>
                            </select>
                            <RowDescription>
                                <ResizingTextarea i18n="notes-u" name="attr_ArmorDesc"/>
                            </RowDescription>
                        </Row>
                    )}
                </RepeatingSection>
            </SectionBody>
        </Section>
    </div>
);
