import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {RepeatingSection} from "../components/RepeatingSection.tsx";
import {Input} from "../components/Input.tsx";
import "./SheetBonds.css"
import {ResizingTextarea} from "../components/ResizingTextarea.tsx";

export const SheetBonds = () => <div className="sheet-tab-content sheet-tabBBond">
    <Section>
        <SectionHead>Bonds</SectionHead>
        <SectionBody>
            <div className="sheet-tabBBond--grid-relations">
                <span/>
                <h4>To Target</h4>
                <h4>To Me</h4>
            </div>
            <RepeatingSection name="Bonds">{
                () => <div style={{marginBottom: 40}}>
                    <div className="sheet-tabBBond--grid-relations">
                        <Input labelName="Who" name="attr_boundToName"/>
                        <select className="sheet-center-select" name="attr_ratingBond">
                            <option value={0} style={{color: "Black"}} selected>No Blood Bond</option>
                            <option value={1} style={{color: "LightCoral"}}>First Drink</option>
                            <option value={2} style={{color: "LightCoral"}}>Second Drink</option>
                            <option value={3} style={{color: "Crimson"}}>Full Blood Bond</option>
                        </select>
                        <select name="attr_reverseRatingBond">
                            <option value={0} style={{color: "Black"}} selected>No Blood Bond</option>
                            <option value={1} style={{color: "LightCoral"}}>First Drink</option>
                            <option value={2} style={{color: "LightCoral"}}>Second Drink</option>
                            <option value={3} style={{color: "Crimson"}}>Full Blood Bond</option>
                        </select>
                    </div>
                    <ResizingTextarea labelName="Description" name="attr_bounddesc"/>
                </div>
            }</RepeatingSection>
        </SectionBody>
    </Section>
    <Section>
        <SectionHead>Vinculums</SectionHead>
        <SectionBody>
            <div className="sheet-tabBBond--grid-relations">
                <span/>
                <h4>To Target</h4>
                <h4>To Me</h4>
            </div>
            <RepeatingSection name="Vincs">{() => <div style={{marginBottom: 40}}>
                <div className="sheet-tabBBond--grid-relations">
                    <Input labelName="Who" type="text" name="attr_vincToName"/>
                    <select className="sheet-center-select" name="attr_ratingVinc">
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <select className="sheet-center-select" name="attr_reverseRatingVinc">
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <ResizingTextarea labelName="Description" name="attr_vincbounddesc"/>
            </div>}</RepeatingSection>
        </SectionBody>
    </Section>
    <Section>
        <SectionHead>Boons</SectionHead>
        <SectionBody>
            <div className="sheet-tabBBond--grid-relations">
                <span/>
                <h4>To Who</h4>
                <h4>Type</h4>
            </div>
                <RepeatingSection name="Boons">{() => <div style={{marginBottom: 40}}>
                        <div className="sheet-tabBBond--grid-relations">
                            <Input labelName="Debtor" name="attr_boonDebtorName"/>
                            <Input labelName="To Who" name="attr_boonToName"/>
                            <select name="attr_ratingBoon">
                                <option value={0} selected>Unknown</option>
                                <option value={1}>Trival</option>
                                <option value={2}>Minor</option>
                                <option value={3}>Major</option>
                                <option value={4}>Life</option>
                            </select>
                        </div>
                    <Input labelName="Description" name="attr_boondesc" style={{width: "100%"}}/>
                </div>}</RepeatingSection>
        </SectionBody>
    </Section>
</div>
