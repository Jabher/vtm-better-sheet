import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import {ResizingTextarea} from "../components/ResizingTextarea.tsx";

export const SheetNotes = () => (
  <Section className="sheet-colrow sheet-tab-content sheet-tabNotes">
    <SectionHead i18n="notes-u" />
    <SectionBody>
      <ResizingTextarea name="attr_othernotes" className="sheet-gear" style={{width: '100%', minHeight: 200}} />
    </SectionBody>
  </Section>
);
