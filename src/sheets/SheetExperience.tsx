import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetExperience.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";

export const SheetExperience = () => (
  <div className="sheet-tab-content sheet-tabExp">
    <Section>
      <SectionHead>Experience</SectionHead>
      <SectionBody>
        <RepeatingSection name="XP">
          {() => (
            <div className="sheet-tabExp--row">
              <Input labelName="Points Spent" name="attr_XPspent" />
              <Input labelName="Date" name="attr_XPdate" type="date" />
              <ResizingTextarea i18n="description-label" name="attr_XPdesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
