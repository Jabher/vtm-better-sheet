import { range } from "ramda";
import { Counter } from "../components/Counter.tsx";
import { Input } from "../components/Input.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { RollButton } from "../components/Buttons.tsx";

export const SheetSorcery = () => (
  <div className="sheet-tab-content sheet-tabSorcery">
    <Section>
      <SectionHead>Blood Sorcery</SectionHead>
      <SectionBody>
        <div className="sheet-col" style={{ width: "20%" }}>
          <h3 style={{ textAlign: "center" }}>Send Rolls to</h3>
          <select className="sheet-center-dots" name="attr_sendRollTo" style={{ width: 130, textAlign: "center" }}>
            <option value="">Public</option>
            <option value="/w ?{Whisper to who?}">Private</option>
            <option value="/w gm">ST</option>
            <option value="/w @{Name}">Myself</option>
          </select>
        </div>
        <div style={{ display: "flex" }}>
          <Input name="attr_BloodSorcery1_name" placeholder="Sorcery Name" />
          <Counter from={1} to={10} name="attr_BloodSorceryRating1" />
        </div>
        <div style={{ display: "flex" }}>
          <Input name="attr_BloodSorcery2_name" placeholder="Sorcery Name" />
          <Counter from={1} to={10} name="attr_BloodSorceryRating2" />
        </div>
        <div style={{ display: "flex" }}>
          <Input name="attr_BloodSorcery3_name" placeholder="Sorcery Name" />
          <Counter from={1} to={10} name="attr_BloodSorceryRating3" />
        </div>
      </SectionBody>
      <SectionHead>Paths</SectionHead>
      <SectionBody style={{ columns: 3 }}>
        {range(1, 13).map((i) => (
          <div style={{ display: "flex" }} key={i}>
            <Input name={`attr_Path${i}_name`} className="sheet-othertraitname" placeholder="Path Name" />
            <Counter from={1} to={5} name={`attr_Path${i}`} />
          </div>
        ))}
      </SectionBody>
    </Section>

    <Section>
      <SectionHead>Rituals</SectionHead>
      <SectionBody>
        <RepeatingSection name="rituals">
          {() => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Input labelName="Name" name="attr_ritualname" />
              <Counter name="attr_rituallevel" from={1} to={10} />
              <select name="attr_ritualAW" className="sheet-center-select">
                <optgroup label="Physical">
                  <option value="@{Strength}+@{StrengthBoost}">Strength</option>
                  <option value="@{Dexterity}+@{DexterityBoost}">Dexterity</option>
                  <option value="@{Stamina}+@{StaminaBoost}">Stamina</option>
                </optgroup>
                <optgroup label="Social">
                  <option value="@{Charisma}+@{CharismaBoost}">Charisma</option>
                  <option value="@{Manipulation}+@{ManipulationBoost}">Manipulation</option>
                  <option value="@{Appearance}+@{AppearanceBoost}">Appearance</option>
                </optgroup>
                <optgroup label="Mental">
                  <option value="@{Perception}+@{PerceptionBoost}">Perception</option>
                  <option value="@{Intelligence}+@{IntelligenceBoost}">Intelligence</option>
                  <option value="@{Wits}+@{WitsBoost}">Wits</option>
                </optgroup>
                <optgroup label="Willpower">
                  <option value="@{Willpower}">Perm. Willpower</option>
                  <option value="@{Willpower_Used}">Temp. Willpower</option>
                </optgroup>
                <optgroup label="Other">
                  <option value={0}>None</option>
                </optgroup>
              </select>
              <select name="attr_ritualAbility">
                <optgroup label="Talents">
                  <option value="@{Alertness}">Alertness</option>
                  <option value="@{Athletics}">Athletics</option>
                  <option value="@{Awareness}">Awareness</option>
                  <option value="@{Brawl}">Brawl</option>
                  <option value="@{Empathy}">Empathy</option>
                  <option value="@{Expression}">Expression</option>
                  <option value="@{Intimidation}">Intimidation</option>
                  <option value="@{Leadership}">Leadership</option>
                  <option value="@{Streetwise}">Streetwise</option>
                  <option value="@{Subterfuge}">Subterfuge</option>
                  <option value="@{Abi1}">Hobby Talent 1</option>
                  <option value="@{Abi2}">Hobby Talent 2</option>
                  <option value="@{Abi3}">Hobby Talent 3</option>
                </optgroup>
                <optgroup label="Skills">
                  <option value="@{AnimalKen}">AnimalKen</option>
                  <option value="@{Crafts}">Crafts</option>
                  <option value="@{Drive}">Drive</option>
                  <option value="@{Etiquette}">Etiquette</option>
                  <option value="@{Firearms}">Firearms</option>
                  <option value="@{Larceny}">Larceny</option>
                  <option value="@{Melee}">Melee</option>
                  <option value="@{Performance}">Performance</option>
                  <option value="@{Stealth}">Stealth</option>
                  <option value="@{Survival}">Survival</option>
                  <option value="@{Abi4}">Prof. Skill 1</option>
                  <option value="@{Abi5}">Prof. Skill 2</option>
                  <option value="@{Abi6}">Prof. Skill 3</option>
                </optgroup>
                <optgroup label="Knowledges">
                  <option value="@{Academics}">Academics</option>
                  <option value="@{Computer}">Computer</option>
                  <option value="@{Finance}">Finance</option>
                  <option value="@{Investigation}">Investigation</option>
                  <option value="@{Law}">Law</option>
                  <option value="@{Medicine}">Medicine</option>
                  <option value="@{Occult}">Occult</option>
                  <option value="@{Politics}">Politics</option>
                  <option value="@{Science}">Science</option>
                  <option value="@{Technology}">Technology</option>
                  <option value="@{Abi7}">Expert Know. 1</option>
                  <option value="@{Abi8}">Expert Know. 2</option>
                  <option value="@{Abi9}">Expert Know. 3</option>
                </optgroup>
                <optgroup label="Other">
                  <option value={0}>None</option>
                </optgroup>
              </select>
              <Input labelName="Difficulty" type="number" name="attr_ritualDiff" defaultValue={6} />
              <Input labelName="Book & Page" name="attr_ritualBookandPage" />
              <h4>Wound Penalties?</h4>
              <select name="attr_ritualuseHealth" className="sheet-center-select">
                {" "}
                {/*todo checkbox*/}
                <option value="@{Health}">Yes</option>
                <option value={0}>No</option>
              </select>
              <RollButton
                className="sheet-custom-button sheet-vampire-button"
                name="ritualRoll"
                style={{ fontSize: 12, width: 75 }}
                value="@{sendRollTo} @{Name} &{template:wodritual} {{name=@{Name}}} {{roll_name=@{ritualname}}} {{rlevel=Ritual Level}} {{rlevel_num=@{rituallevel}}} {{attr=Attribute}} {{attr_num=@{ritualAW}}} {{skill=Ability}} {{skill_num=@{ritualAbility}}} {{hp_mod=@{ritualuseHealth}}} {{result=[[{(@{ritualAW}+@{ritualAbility}+@{ritualuseHealth})d10sd}>@{ritualDiff}f1]]}} {{rdesc_text=@{ritualdesc}}} {{rbp=}} {{rbp_text=@{ritualBookandPage}}}"
              >
                Roll
              </RollButton>
              <input type="checkbox" className="sheet-arrow" name="attr_RitualDescHide" />
              <ResizingTextarea i18n="description-label" name="attr_ritualdesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
