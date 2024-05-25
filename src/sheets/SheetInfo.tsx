import { Section } from "../components/Section.tsx";
import "./SheetInfo.css";
import { Input } from "../components/Input.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";

export const SheetInfo = () => (
  <div className="sheet-tab-content sheet-tabInfo">
    <Section i18n="description-label">
      <aside>
        {" "}
        {/*remove / hide*/}
        <Input i18n="description-age-label" name="AgeDesc" />
        <Input i18n="description-apparent-age-label" name="ApparentAgeDesc" />
        <Input i18n="description-born-in-label" name="PlaceDesc" />
        <Input i18n="description-dob-label" name="DateDesc" />
        <Input i18n="description-rip-label" name="RIPDesc" />
        <Input i18n="description-hair-label" name="HairDesc" />
        <Input i18n="description-eyes-label" name="EyesDesc" />
        <Input i18n="description-race-label" name="RaceDesc" />
        <Input i18n="description-nationality-label" name="NationalityDesc" />
        <Input i18n="description-height-label" name="HeightDesc" />
        <Input i18n="description-weight-label" name="WeightDesc" />
        <Input i18n="description-sex-label" name="SexDesc" />
      </aside>
      <textarea name="attr_descriptionChar" style={{ flexGrow: 1 }} />
    </Section>
    <Section i18n="history-label">
      <ResizingTextarea name="history" />
    </Section>
    <Section i18n="notes-u">
      <ResizingTextarea name="othernotes" />
    </Section>
  </div>
);
