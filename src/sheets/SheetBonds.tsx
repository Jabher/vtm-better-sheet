import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetBonds.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { SelectInput } from "../components/SelectInput.tsx";

export const SheetBonds = () => (
  <div className="sheet-tab-content sheet-tabBBond">
    <Section>
      <SectionHead i18n="bonds-label" />
      <SectionBody>
        <RepeatingSection name="Bonds">
          {() => (
            <div style={{ marginBottom: 40 }}>
              <div className="sheet-tabBBond--grid-relations">
                <Input i18n="who-label" name="attr_boundToName" />
                <SelectInput name="attr_ratingBond" defaultValue={0} i18n="to-him-label">
                  <option value={0} style={{ color: "Black" }}>
                    No Blood Bond
                  </option>
                  <option value={1} style={{ color: "LightCoral" }}>
                    First Drink
                  </option>
                  <option value={2} style={{ color: "LightCoral" }}>
                    Second Drink
                  </option>
                  <option value={3} style={{ color: "Crimson" }}>
                    Full Blood Bond
                  </option>
                </SelectInput>
                <SelectInput name="attr_reverseRatingBond" defaultValue={0} i18n="to-me-label">
                  <option value={0} style={{ color: "Black" }}>
                    No Blood Bond
                  </option>
                  <option value={1} style={{ color: "LightCoral" }}>
                    First Drink
                  </option>
                  <option value={2} style={{ color: "LightCoral" }}>
                    Second Drink
                  </option>
                  <option value={3} style={{ color: "Crimson" }}>
                    Full Blood Bond
                  </option>
                </SelectInput>
              </div>
              <ResizingTextarea i18n="description-label" name="attr_bounddesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="vinculums-label" />
      <SectionBody>
        <RepeatingSection name="Vincs">
          {() => (
            <div style={{ marginBottom: 40 }}>
              <div className="sheet-tabBBond--grid-relations">
                <Input i18n="who-label" type="text" name="attr_vincToName" />
                <SelectInput i18n="to-him-label" name="attr_ratingVinc">
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
                </SelectInput>
                <SelectInput i18n="to-me-label" name="attr_reverseRatingVinc">
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
                </SelectInput>
              </div>
              <ResizingTextarea name="attr_vincbounddesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="boons-label" />
      <SectionBody>
        <RepeatingSection name="Boons">
          {() => (
            <div style={{ marginBottom: 40 }}>
              <div className="sheet-tabBBond--grid-relations">
                <Input i18n="debtor-label" name="attr_boonDebtorName" />
                <Input i18n="to-whom-label" name="attr_boonToName" />
                <SelectInput i18n="type-u" name="attr_ratingBoon" defaultValue={0}>
                  <option value={0} data-i18n="boon-other-label"></option>
                  <option value={1} data-i18n="boon-trivial-label" />
                  <option value={2} data-i18n="boon-minor-label" />
                  <option value={3} data-i18n="boon-major-label" />
                  <option value={4} data-i18n="boon-life-label" />
                </SelectInput>
              </div>
              <ResizingTextarea i18n="description-label" name="attr_boondesc" />
            </div>
          )}
        </RepeatingSection>
      </SectionBody>
    </Section>
  </div>
);
