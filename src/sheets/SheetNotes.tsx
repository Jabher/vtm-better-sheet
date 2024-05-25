import {Section, SectionBody, SectionHead} from "../components/Section.tsx";

export const SheetNotes = () => <Section className="sheet-colrow sheet-tab-content sheet-tabNotes">
    <SectionHead i18n="notes-u"/>
    <SectionBody>
        <textarea
            name="attr_othernotes"
            className="sheet-gear"
            defaultValue={""}
        />
    </SectionBody>
</Section>
