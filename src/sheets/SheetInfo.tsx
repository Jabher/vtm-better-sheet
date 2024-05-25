import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import "./SheetInfo.css"
import {Input} from "../components/Input.tsx";

export const SheetInfo = () => <div className="sheet-tab-content sheet-tabInfo">
    <Section>
        <SectionHead>Description</SectionHead>
        <SectionBody>
            <aside>
                <Input labelName="Age:" name="attr_AgeDesc"/>
                <Input labelName="Apparent Age:" name="attr_ApparentAgeDesc"/>
                <Input labelName="Place of Birth:" name="attr_PlaceDesc"/>
                <Input labelName="Date of Birth:" name="attr_DateDesc"/>
                <Input labelName="R.I.P.:" name="attr_RIPDesc"/>
                <Input labelName="Hair:" name="attr_HairDesc"/>
                <Input labelName="Eyes:" name="attr_EyesDesc"/>
                <Input labelName="Race:" name="attr_RaceDesc"/>
                <Input labelName="Nationality:" name="attr_NationalityDesc"/>
                <Input labelName="Height:" name="attr_HeightDesc"/>
                <Input labelName="Weight:" name="attr_WeightDesc"/>
                <Input labelName="Sex:" name="attr_SexDesc"/>
            </aside>
            <textarea name="attr_descriptionChar"/>
        </SectionBody>
    </Section>
    <Section>
        <SectionHead>History</SectionHead>
        <textarea name="attr_history" className="sheet-gear"/>
    </Section>
</div>
