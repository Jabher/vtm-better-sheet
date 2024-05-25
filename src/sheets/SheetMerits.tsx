import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { Counter } from "../components/Counter.tsx";
import { Input } from "../components/Input.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";

// todo collapse
export const SheetMerits = () => (
  <Section>
    <SectionHead i18n="merits-label" />
    <SectionBody>
      <RepeatingSection name="Merits" initialCount={1}>
        {() => (
          <>
            <div style={{ display: "flex" }}>
              <Input i18n="name2-u" type="text" name="attr_meritname" />
              <Counter name="attr_meritpoints" from={1} to={7} />
              <Input i18n="type-u" name="attr_merittype"></Input>
            </div>
            <ResizingTextarea i18n="description-label" name="attr_meritdesc" />
          </>
        )}
      </RepeatingSection>
    </SectionBody>
    <SectionHead i18n="flaws-label" />
    <SectionBody>
      <RepeatingSection name="Flaws" initialCount={1}>
        {() => (
          <>
            <div style={{ display: "flex" }}>
              <Input i18n="name2-u" type="text" name="attr_flawname" />
              <Counter name="attr_flawpoints" from={1} to={7} />
              <Input i18n="type-u" name="attr_flawtype"></Input>
            </div>
            <ResizingTextarea i18n="description-label" name="attr_flawdesc" />
          </>
        )}
      </RepeatingSection>
    </SectionBody>
  </Section>
);
