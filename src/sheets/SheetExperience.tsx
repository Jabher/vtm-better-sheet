import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetExperience.css";
import { Textarea } from "../components/ResizingTextarea.tsx";

export const SheetExperience = () => (
  <div className="sheet-tab-content sheet-tabExp">
    <Section>
      <SectionHead i18n="experience-u" />
      <SectionBody>
        <Input type="number" i18n="points-initial-label" name="attr_XPstart" />
        {/*todo on start amount + calculator*/}
        <RepeatingSection name="XP">
          {() => (
            <div className="sheet-tabExp--row">
              <Textarea i18n="description-label" name="attr_XPdesc" style={{ flex: 1 }} />
              <div>
                <Input i18n="record-date-label" name="attr_XPdate" type="date" />
                <Input i18n="points-got-label" name="attr_XPgot" />
                <Input i18n="points-spent-label" name="attr_XPspent" />
              </div>
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
