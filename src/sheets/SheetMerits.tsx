import { Section } from "../components/Section.tsx";
import { Counter } from "../components/Counter.tsx";
import { Input } from "../components/Input.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";

// todo collapse
export const SheetMerits = () => (
  <div className="sheet-tab-content sheet-merits">
    <Section i18n="merits-label">
      <RepeatingSection name="Merits" initialCount={1}>
        {() => (
          <>
            <div style={{ display: "flex" }}>
              <Input i18n="name2-u" type="text" name="meritname" />
              <Counter name="meritpoints" from={1} to={7} />
              <Input i18n="type-u" name="merittype"></Input>
            </div>
            <ResizingTextarea i18n="description-label" name="meritdesc" />
          </>
        )}
      </RepeatingSection>
    </Section>
    <Section i18n="flaws-label">
      <RepeatingSection name="Flaws" initialCount={1}>
        {() => (
          <>
            <div style={{ display: "flex" }}>
              <Input i18n="name2-u" type="text" name="flawname" />
              <Counter name="flawpoints" from={1} to={7} />
              <Input i18n="type-u" name="flawtype"></Input>
            </div>
            <ResizingTextarea i18n="description-label" name="flawdesc" />
          </>
        )}
      </RepeatingSection>
    </Section>
  </div>
);
