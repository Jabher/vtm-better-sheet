import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {Counter} from "../components/Counter.tsx";
import {range} from "ramda";
import {Input} from "../components/Input.tsx";

export const SheetTraits = () => <Section>
    <SectionHead>Secondary Abilities</SectionHead>
    <SectionBody className="sheet-3col">
        {
            range(1,16).map(i => <div style={{display: 'flex'}}>
                <Input type="text" name={`attr_Secondary${i}_name`} placeholder={`Secondary ${i}`}/>
                <Counter name={`attr_Secondary${i}`} from={0} to={9}/>
            </div>)
        }
    </SectionBody>
    <SectionHead>Other Traits</SectionHead>
    <SectionBody className="sheet-3col">
        {
            range(1,16).map(i => <div style={{display: 'flex'}}>
                <Input type="text" name={`attr_Other${i}_name`} placeholder={`Other ${i}`}/>
                <Counter name={`attr_Other${i}`} from={0} to={9}/>
            </div>)
        }
    </SectionBody>
</Section>
