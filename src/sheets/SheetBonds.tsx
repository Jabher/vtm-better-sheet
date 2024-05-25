import { Section } from "../components/Section.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Input } from "../components/Input.tsx";
import "./SheetBonds.css";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { SelectInput } from "../components/SelectInput.tsx";
import { Row, RowDescription } from "../components/Row.tsx";

export const SheetBonds = () => (
  <div className="sheet-tab-content sheet-tabBBond">
    <Section i18n="bonds-label">
      <RepeatingSection name="Bonds">
        {() => (
          <Row>
            <Input i18n="who-label" name="boundToName" />
            <SelectInput name="ratingBond" i18n="to-him-label">
              <option value={0}>---</option>
              <option value={1} data-i18n="bond-1-label" />
              <option value={2} data-i18n="bond-2-label" />
              <option value={3} data-i18n="bond-3-label" />
            </SelectInput>
            <SelectInput name="reverseRatingBond" i18n="to-me-label">
              <option value={0}>---</option>
              <option value={1} data-i18n="bond-1-label" />
              <option value={2} data-i18n="bond-2-label" />
              <option value={3} data-i18n="bond-3-label" />
            </SelectInput>
            <RowDescription>
              <ResizingTextarea i18n="description-label" name="bounddesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
    <Section i18n="vinculums-label">
      <RepeatingSection name="Vincs">
        {() => (
          <Row>
            <Input i18n="who-label" type="text" name="vincToName" />
            <SelectInput i18n="to-him-label" name="ratingVinc">
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
            <SelectInput i18n="to-me-label" name="reverseRatingVinc">
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
            <RowDescription>
              <ResizingTextarea name="vincbounddesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
    <Section i18n="boons-label">
      <RepeatingSection name="Boons">
        {() => (
          <Row>
            <Input i18n="debtor-label" name="boonDebtorName" />
            <Input i18n="to-whom-label" name="boonToName" />
            <SelectInput i18n="type-u" name="ratingBoon" defaultValue={0}>
              <option value={0} data-i18n="boon-other-label"></option>
              <option value={1} data-i18n="boon-trivial-label" />
              <option value={2} data-i18n="boon-minor-label" />
              <option value={3} data-i18n="boon-major-label" />
              <option value={4} data-i18n="boon-life-label" />
            </SelectInput>
            <RowDescription>
              <ResizingTextarea i18n="description-label" name="boondesc" />
            </RowDescription>
          </Row>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
