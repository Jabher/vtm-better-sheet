import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {Counter} from "../components/Counter.tsx";
import {RepeatingSection} from "../components/RepeatingSection.tsx";
import {Input} from "../components/Input.tsx";
import {ResizingTextarea} from "../components/ResizingTextarea.tsx";

export const SheetBackgrounds = () => <Section>
    <SectionHead i18n="backgrounds-u"/>
    <SectionBody>
        {/*<div className="sheet-col" style={{width: "20%"}}>*/}
        {/*    <h3 style={{textAlign: "center"}}>Send Rolls to</h3>*/}
        {/*    <select*/}
        {/*        className="sheet-center-dots"*/}
        {/*        name="attr_sendRollTo"*/}
        {/*        style={{width: 130, textAlign: "center"}}*/}
        {/*    >*/}
        {/*        <option value="" selected>*/}
        {/*            Public*/}
        {/*        </option>*/}
        {/*        <option value="/w ?{Whisper to who?}">Private</option>*/}
        {/*        <option value="/w gm">ST</option>*/}
        {/*        <option value="/w @{Name}">Myself</option>*/}
        {/*    </select>*/}
        {/*</div>*/}

        <RepeatingSection name='Backs'>{
            () => <div>
                <div style={{display: 'flex'}}>
                    <Input labelName="Name" type="text" name="attr_ebackname"/>
                    <Counter name="attr_ebackrating" from={0} to={10}></Counter>
                    <Input labelName="Difficulty" type="number" name="attr_ebackgrounddiff" className="sheet-inputname"
                           defaultValue={6}/>
                    <button
                        className="sheet-custom-button sheet-vampire-button"
                        type="roll"
                        name="roll_backgroundRatingMySelf"
                        style={{fontSize: 12, width: 75}}
                        value="@{sendRollTo} @{Name} &{template:wod} {{name=@{Name}}} {{roll_name=@{ebackname}}} {{attr=@{ebackname}}} {{attr_num=@{ebackrating}}} {{result=[[{(@{ebackrating})d10}>@{ebackgrounddiff}f1]]}} "
                    >
                        Roll
                    </button>
                </div>
                <ResizingTextarea labelName="Description" name="attr_ebackdesc"/>
            </div>
        }</RepeatingSection>
    </SectionBody>
</Section>
