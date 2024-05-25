import { Section } from "../components/Section.tsx";
import { Counter } from "../components/Counter.tsx";
import { Input } from "../components/Input.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { Row } from "../components/Row.tsx";
import translation from "../translation.json";

// todo collapse
export const SheetMerits = () => (
  <div className="sheet-tab-content sheet-merits">
    <datalist id="meritsflaws-type-datalist">
      {Object.keys(translation)
        .filter((key) => key.startsWith("meritsflaws-type-"))
        .map((key) => (
          <option data-i18n={key} key={key} />
        ))}
    </datalist>
    <Section i18n="merits-label">
      <RepeatingSection name="Merits" initialCount={1}>
        {() => (
          <>
            <Row>
              <Input i18n="name2-u" type="text" name="meritname" />
              <Input i18n="type-u" name="merittype" list="meritsflaws-type-datalist" />
              <Counter name="meritpoints" from={1} to={7} />
            </Row>
            <ResizingTextarea i18n="description-label" name="meritdesc" />
          </>
        )}
      </RepeatingSection>
    </Section>
    <Section i18n="flaws-label">
      <RepeatingSection name="Flaws" initialCount={1}>
        {() => (
          <>
            <Row>
              <Input i18n="name2-u" type="text" name="flawname" />
              <Input i18n="type-u" name="flawtype" list="meritsflaws-type-datalist" />
              <Counter name="flawpoints" from={1} to={7} />
            </Row>
            <ResizingTextarea i18n="description-label" name="flawdesc" />
          </>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
