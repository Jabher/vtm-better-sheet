import { Counter } from "../components/Counter.tsx";
import { Input } from "../components/Input.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { RollButton } from "../components/Buttons.tsx";
import { AbilitySelect, AttributeSelect } from "../components/AttributeSelect.tsx";
import "./SheetSorcery.css";

export const SheetSorcery = () => (
  <div className="sheet-tab-content sheet-tabSorcery">
    <Section>
      <SectionHead i18n="rituals-label" />
      <SectionBody>
        <RepeatingSection name="rituals">
          {() => (
            <div className="sheet-tabSorcery--item">
              <div className="sheet-tabSorcery--item-row">
                <Input i18n="name-u" name="attr_ritualname" />
                <Counter name="attr_rituallevel" from={1} to={10} />
                <AttributeSelect name="attr_ritualAW" />
                <AbilitySelect name="attr_ritualAbility" />
                <Input i18n="difficulty-label" type="number" name="attr_ritualDiff" defaultValue={6} />
                <Input i18n="result-modifiers-label" name="attr_ritualModifier" />
                <Input i18n="book-and-page-label" name="attr_ritualBookandPage" />
                <select name="attr_ritualuseHealth" className="sheet-center-select" defaultValue={0}>
                  {/*todo checkbox*/}
                  <option value="@{Health}">Yes</option>
                  <option value={0}>No</option>
                </select>
                <RollButton
                  className="sheet-custom-button sheet-vampire-button"
                  name="ritualRoll"
                  style={{ fontSize: 12, width: 75 }}
                  value="&{template:wodritual} {{name=@{Name}}} {{roll_name=@{ritualname}}} {{rlevel=Ritual Level}} {{rlevel_num=@{rituallevel}}} {{attr=Attribute}} {{attr_num=@{ritualAW}}} {{skill=Ability}} {{skill_num=@{ritualAbility}}} {{hp_mod=@{ritualuseHealth}}} {{result=[[{(@{ritualAW}+@{ritualAbility}+@{ritualuseHealth})d10sd}>@{ritualDiff}f1]]}} {{rdesc_text=@{ritualdesc}}} {{rbp=}} {{rbp_text=@{ritualBookandPage}}}"
                />
              </div>
              <ResizingTextarea i18n="description-label" name="attr_ritualdesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
