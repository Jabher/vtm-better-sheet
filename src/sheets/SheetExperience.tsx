import { Section } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetExperience.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { Row, RowDescription } from "../components/Row.tsx";

export const SheetExperience = () => (
  <div className="sheet-tab-content sheet-tabExp">
    <Section i18n="experience-u">
      <Input type="number" i18n="points-initial-label" name="XPstart" />
      {/*todo on start amount + calculator*/}
      <RepeatingSection name="XP">
        {() => (
          <Row>
            <Input i18n="record-date-label" name="XPdate" type="date" />
            <Input i18n="points-got-label" name="XPgot" />
            <Input i18n="points-spent-label" name="XPspent" />
            <RowDescription>
              <ResizingTextarea i18n="description-label" name="XPdesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
