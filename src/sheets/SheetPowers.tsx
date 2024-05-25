import {Counter} from "../components/Counter.tsx";
import {RepeatingSection} from "../components/RepeatingSection.tsx";
import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {Input} from "../components/Input.tsx";
import {ResizingTextarea} from "../components/ResizingTextarea.tsx";

export const SheetPowers = () => <div>
    <Section>
        <SectionHead>Discipline Powers</SectionHead>
        <SectionBody>
            <RepeatingSection name="repeating_powers">
                {
                    () => <>
                        <div style={{display: 'flex'}}>
                            <Input labelName="Discipline" type="text" name="attr_SetDisciplineName"/>
                            <Input labelName="Power" type="text" name="attr_SetDisciplinePower"/>
                            <Counter name="attr_SetDisciplineLevel" from={1} to={10}></Counter>
                        </div>
                        <ResizingTextarea labelName="Description" name="attr_SetDisciplinePowerDesc"/>
                    </>
                }
            </RepeatingSection>
        </SectionBody>
    </Section>

    <Section>
        <SectionHead>Combination Disciplines</SectionHead>
        <SectionBody>
            <RepeatingSection name="combinationPowers">{() => <>
                <Input labelName="Name" name="attr_ComboDisciplineName"/>
                <div style={{display: 'flex'}}>
                    <Input labelName="Discipline 1" name="attr_ComboDisciplinePower1"/>
                    <Input labelName="Discipline 2" name="attr_ComboDisciplinePower2"/>
                    <Input labelName="Discipline 3" name="attr_ComboDisciplinePower3"/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start'}}>
                    <Counter name="attr_ComboDisciplineLevel1" from={1} to={10}></Counter>
                    <Counter name="attr_ComboDisciplineLevel2" from={1} to={10}></Counter>
                    <Counter name="attr_ComboDisciplineLevel3" from={1} to={10}></Counter>
                </div>
                <div style={{display: 'flex'}}>
                    <Input labelName="Required Power 1" name="attr_ComboPowerRequiredNamed1"/>
                    <Input labelName="Required Power 2" name="attr_ComboPowerRequiredNamed2"/>
                    <Input labelName="Book and Pg Number" name="attr_ComboPowerBooknPage"/>
                </div>
                <ResizingTextarea labelName="Description"  name="attr_ComboDisciplinePowerDesc"/>
            </>}</RepeatingSection>
        </SectionBody>
    </Section>
</div>
