import { Section, SectionBody, SectionHead } from "../components/Section.tsx";

export const SheetNotes = () => (
  <Section
    className="sheet-colrow sheet-tab-content sheet-tabNotes"
    style={{ display: "flex", flexDirection: "column" }}
  >
    <SectionHead i18n="notes-u" />
    <SectionBody style={{ margin: 0, flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <textarea name="attr_othernotes" className="sheet-gear" style={{ width: "100%", minHeight: 200, flexGrow: 1 }} />
    </SectionBody>
  </Section>
);
