import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import "./SheetInfo.css";
import { Input } from "../components/Input.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";

export const SheetInfo = () => (
  <div className="sheet-tab-content sheet-tabInfo">
    <Section>
      <SectionHead i18n="description-label" />
      <SectionBody>
        <aside>
          <Input i18n="description-age-label" name="attr_AgeDesc" />
          <Input i18n="description-apparent-age-label" name="attr_ApparentAgeDesc" />
          <Input i18n="description-born-in-label" name="attr_PlaceDesc" />
          <Input i18n="description-dob-label" name="attr_DateDesc" />
          <Input i18n="description-rip-label" name="attr_RIPDesc" />
          <Input i18n="description-hair-label" name="attr_HairDesc" />
          <Input i18n="description-eyes-label" name="attr_EyesDesc" />
          <Input i18n="description-race-label" name="attr_RaceDesc" />
          <Input i18n="description-nationality-label" name="attr_NationalityDesc" />
          <Input i18n="description-height-label" name="attr_HeightDesc" />
          <Input i18n="description-weight-label" name="attr_WeightDesc" />
          <Input i18n="description-sex-label" name="attr_SexDesc" />
        </aside>
        <textarea name="attr_descriptionChar" style={{ flexGrow: 1 }} />
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="history-label" />
      <SectionBody>
        <ResizingTextarea name="attr_history" style={{ width: "100%" }} />
      </SectionBody>
    </Section>
  </div>
);
