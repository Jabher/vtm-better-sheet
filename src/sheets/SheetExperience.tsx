import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {RepeatingSection} from "../components/RepeatingSection.tsx";
import {Input} from "../components/Input.tsx";

export const SheetExperience = () => <div className="sheet-tab-content sheet-tabExp">
    <Section>
        <SectionHead>Experience</SectionHead>
    </Section>
    <SectionBody>
        <RepeatingSection name="XP">{
            () =>
                <div>
                    <Input labelName="Description of Expenditure" name="attr_XPdesc"/>
                    <Input labelName="Points Spent" name="attr_XPspent"/>
                    <Input labelName="Date" name="attr_XPdate" type="date"/>
                </div>
        }</RepeatingSection>
    </SectionBody>
</div>
