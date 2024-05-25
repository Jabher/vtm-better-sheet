import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetExperience.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { Row, RowDescription } from "../components/Row.tsx";

export const SheetExperience = () => (
  <div className="sheet-tab-content sheet-tabExp">
    <Section>
      <SectionHead i18n="experience-u">
        <span name="attr_XPRemaining" />
      </SectionHead>
      <SectionBody>
        <Row>
          <Input type="number" i18n="points-initial-label" name="XPstart" defaultValue={0} />
          <Input type="number" disabled i18n="points-got-label" name="XPtotal" defaultValue={0} />
          <Input type="number" disabled i18n="points-spent-label" name="XPspent" defaultValue={0} />
        </Row>
        {/*todo on start amount + calculator*/}
        <RepeatingSection name="XP">
          {() => (
            <Row>
              <Input i18n="record-date-label" name="XPdate" type="date" />
              <Input i18n="points-got-label" name="XPgot" type="number" />
              <Input i18n="points-spent-label" name="XPspent" type="number" />
              <RowDescription>
                <ResizingTextarea i18n="description-label" name="XPdesc" />
              </RowDescription>
            </Row>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
