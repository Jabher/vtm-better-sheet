import { Counter } from "../components/Counter.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { Input } from "../components/Input.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import "./SheetPowers.css";
import { range } from "ramda";
import { SelectInput } from "../components/SelectInput.tsx";
import { DisciplineSelect } from "../components/DisciplineSelect.tsx";

export const SheetPowers = () => (
  <div className="sheet-tab-content sheet-powers">
    <Section>
      <SectionHead i18n="discipline-powers-label" />
      <SectionBody>
        <RepeatingSection name="powers">
          {() => (
            <>
              <div className="sheet-powers--power">
                <SelectInput i18n="discipline-label" name="attr_SetDisciplineName">
                  {range(1, 11).map((i) => (
                    <option key={i} value={i} name={`attr_Discipline${i}Name`} />
                  ))}
                </SelectInput>
                <Input i18n="discipline-power-label" type="text" name="attr_SetDisciplinePower" />
                <Counter name="attr_SetDisciplineLevel" from={1} to={10}></Counter>
              </div>
              <ResizingTextarea i18n="description-label" name="attr_SetDisciplinePowerDesc" />
            </>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="discipline-combination-powers-label" />
      <SectionBody>
        <RepeatingSection name="combinationPowers">
          {() => (
            <div className="sheet-powers--multi">
              <Input i18n="name2-u" name="attr_ComboDisciplineName" />
              <div className="sheet-powers--multi-description">
                <div>
                  <DisciplineSelect i18n="discipline-1-label" name="attr_ComboDisciplinePower1" />
                  <Counter name="attr_ComboDisciplineLevel1" from={1} to={10}></Counter>
                </div>
                <div>
                  <DisciplineSelect i18n="discipline-2-label" name="attr_ComboDisciplinePower2" />
                  <Counter name="attr_ComboDisciplineLevel2" from={1} to={10}></Counter>
                </div>
                <div>
                  <DisciplineSelect i18n="discipline-3-label" name="attr_ComboDisciplinePower3" />
                  <Counter name="attr_ComboDisciplineLevel3" from={1} to={10}></Counter>
                </div>
              </div>
              <Input i18n="book-and-page-label" name="attr_ComboPowerBooknPage" />
              <ResizingTextarea i18n="description-label" name="attr_ComboDisciplinePowerDesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
