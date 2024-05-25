import { range } from "ramda";
import { Input } from "../components/Input.tsx";
import { Section, SectionBody, SectionHead } from "../components/Section.tsx";
import { H3, H4, H5 } from "../components/globals/Headings.tsx";
import { AttrInput } from "../components/AttrInput.tsx";
import { Counter } from "../components/Counter.tsx";
import translation from "../translation.json";
import "./SheetPrimary.css";
import { Health } from "../components/Health.tsx";
import { ResizingTextarea } from "../components/ResizingTextarea.tsx";
import { SquareRadio } from "../components/SquareRadio.tsx";

const attributes = [
  "alertness",
  "athletics",
  "awareness",
  "brawl",
  "empathy",
  "expression",
  "intimidation",
  "leadership",
  "streetwise",
  "subterfuge",
] as const;

const skills = [
  "animalken",
  "crafts",
  "drive",
  "etiquette",
  "firearms",
  "larceny",
  "melee",
  "performance",
  "stealth",
  "survival",
] as const;

const knowledges = [
  "academics",
  "computer",
  "finance",
  "investigation",
  "law",
  "medicine",
  "occult",
  "politics",
  "science",
  "technology",
] as const;

export const SheetPrimary = () => (
  <div className="sheet-tab-content sheet-primary">
    <Section>
      <SectionHead i18n="Primary" />
      <SectionBody className="sheet-3col">
        <div>
          <Input i18n="name-u" name="attr_Name" />
          <Input i18n="player-u" name="attr_Player" />
          <Input i18n="chronicle-u" name="attr_Chronicle" />
        </div>
        <div>
          <Input i18n="nature-u" name="attr_Nature" />
          <Input i18n="demeanor-u" name="attr_Demeanor" />
          <Input i18n="concept-u" name="attr_Concept" />
        </div>
        <div>
          <Input i18n="clan-u" name="attr_Clan" />
          <Input i18n="sire-u" name="attr_Sire" />
          <Input i18n="generation-u" name="attr_Generation" type="number" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="attributes-u" />
      <SectionBody className="sheet-3col">
        <div>
          <H3 i18n="physical-u" />
          <AttrInput from={1} to={9} spec i18n="strength-u" name="attr_Strength" />
          <AttrInput from={1} to={9} spec i18n="dexterity-u" name="attr_Dexterity" />
          <AttrInput from={1} to={9} spec i18n="stamina-u" name="attr_Stamina" />
        </div>
        <div>
          <H3 i18n="social-u" />
          <AttrInput from={1} to={9} spec i18n="charisma-u" name="attr_Charisma" />
          <AttrInput from={1} to={9} spec i18n="manipulation-u" name="attr_Manipulation" />
          <AttrInput from={1} to={9} spec i18n="appearance-u" name="attr_Appearance" />
        </div>
        <div>
          <H3 i18n="mental-u" />
          <AttrInput from={1} to={9} spec i18n="perception-u" name="attr_Perception" />
          <AttrInput from={1} to={9} spec i18n="intelligence-u" name="attr_Intelligence" />
          <AttrInput from={1} to={9} spec i18n="wits-u" name="attr_Wits" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="abilities-u" />
      <SectionBody className="sheet-3col">
        <div>
          <H3 i18n="talents-u" />
          {attributes.map((title) => (
            <AttrInput
              key={title}
              i18n={`${title}-u`}
              spec
              from={0}
              to={5}
              name={`attr_${title[0].toUpperCase()}${title.slice(1)}`}
            />
          ))}
          {/*todo 3 hobby talent*/}
        </div>
        <div>
          <H3 i18n="skills-u" />
          {skills.map((title) => (
            <AttrInput
              key={title}
              i18n={`${title}-u`}
              spec
              from={0}
              to={5}
              name={`attr_${title[0].toUpperCase()}${title.slice(1)}`}
            />
          ))}
          {/*todo 3 hobby talent*/}
        </div>
        <div>
          <H3 i18n="knowledges-u" />
          {knowledges.map((title) => (
            <AttrInput
              key={title}
              i18n={`${title}-u`}
              spec
              from={0}
              to={5}
              name={`attr_${title[0].toUpperCase()}${title.slice(1)}`}
            />
          ))}
          {/*todo 3 hobby talent*/}
        </div>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="advantages-u" />
      <SectionBody className="sheet-3col">
        <div>
          <H3 i18n="disciplines-u" />
          {range(1, 10).map((i) => (
            <div style={{ display: "flex" }} key={i}>
              <Input name={`attr_Discipline${i}Name`} placeholder={`Discipline ${i}`} />
              <Counter fade from={0} to={9} name={`attr_Discipline${i}`} />
            </div>
          ))}
        </div>
        <div>
          <H3 i18n="backgrounds-u" />
          {range(1, 10).map((i) => (
            <div style={{ display: "flex" }} key={i}>
              <Input name={`attr_Back${i}Name`} placeholder={`Background ${i}`} />
              <Counter fade from={0} to={9} name={`attr_Back${i}`} />
            </div>
          ))}
        </div>
        <div>
          <H3 i18n="virtues-u" />
          <div className="sheet-primary--virtues">
            <select className="sheet-text-fronth2" name="attr_virtueConsName">
              <option value="Conscience" data-i18n="conscience-u">
                {translation["conscience-u"]}
              </option>
              <option value="Conviction" data-i18n="conviction-u">
                {translation["conviction-u"]}
              </option>
            </select>
            <Counter from={1} to={5} name="attr_C_C" />
            <select className="sheet-text-fronth2" name="attr_virtueSelfName">
              <option value="Self-Control" data-i18n="selfcontrol-u">
                {translation["selfcontrol-u"]}
              </option>
              <option value="Instinct" data-i18n="instinct-u">
                {translation["instinct-u"]}
              </option>
            </select>
            <Counter from={1} to={5} name="attr_S_I" />
            <H4 i18n="courage-u" />
            <Counter from={1} to={5} name="attr_Courage" />
          </div>
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionBody className="sheet-3col">
        <Section>
          <SectionHead i18n="pathsins-u" />
          <SectionBody className="sheet-primary-moralpath">
            {range(1, 10)
              .reverse()
              .map((i) => (
                <ResizingTextarea name={`attr_MoralPath${i}`} placeholder={`Moral path ${i}`} key={i} />
              ))}
          </SectionBody>
        </Section>
        <Section>
          <Section>
            <div className="sheet-element-section-heading">
              <div className="sheet-element-section-heading-humanitypaths">
                <input type="text" name="attr_PathoEname" defaultValue={translation["humanitypath-u"]} />
                <span name="attr_PathoEname"></span>
              </div>
            </div>
            <SectionBody className="sheet-primary-humanity-path">
              <Counter from={1} to={9} name="attr_PathoE" className="sheet-primary-humanity-path--counter" />
              <Input i18n="bearing-u" name="attr_Bearing" style={{ width: "100%" }} />
            </SectionBody>
          </Section>
          <Section>
            <SectionHead i18n="willpower-u">
              <span style={{ padding: "0px 8px", opacity: 0.5 }}>
                <span name="attr_Willpower_Used" />/<span name="attr_Willpower" />
              </span>
            </SectionHead>
            <SectionBody style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <Counter from={1} to={9} name="attr_Willpower" />
              <Counter from={0} to={9} name="attr_Willpower_Used" dotStyle="square" />
            </SectionBody>
          </Section>
          <Section className="sheet-component" style={{ display: "flex", flexDirection: "column-reverse" }}>
            <SectionBody>
              <Counter from={0} to={39} name="attr_BloodPool" className="sheet-primary--bloodpool" fade />
            </SectionBody>
            <SectionHead i18n="bloodpool-u">
              <span name="attr_BloodPool" style={{ padding: "0px 8px", opacity: 0.5 }} />
            </SectionHead>
          </Section>
        </Section>
        <Section>
          <SectionHead i18n="health-u" />
          <SectionBody>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <H5 i18n="extrabruised-u" style={{ textAlign: "left", flexGrow: 1 }} />
              <Health name="attr_BruisedExtra1" />
              <Health name="attr_BruisedExtra2" />
              <Health name="attr_BruisedExtra3" />
              <Health name="attr_BruisedExtra4" />
              <Health name="attr_BruisedExtra5" />
              <Health name="attr_BruisedExtra6" />
              <Health name="attr_BruisedExtra7" />
              <Health name="attr_BruisedExtra8" />
              <Health name="attr_BruisedExtra9" />
              <Health name="attr_BruisedExtra10" />
              <Health name="attr_BruisedExtra11" />
              <Health name="attr_BruisedExtra12" />
            </div>
            <div className="sheet-primary--health-main">
              <div>
                <H5 i18n={"bruised-u"} />
                <SquareRadio name="attr_Health" value={0} defaultChecked />
                <Health name="attr_Bruised" />
              </div>
              <div>
                <H5 i18n={"hurt-u"} />
                <SquareRadio name="attr_Health" value={-1} />
                <Health name="attr_Hurt" />
              </div>
              <div>
                <H5 i18n={"injured-u"} />
                <Health name="attr_Injured" />
              </div>
              <div>
                <H5 i18n={"wounded-u"} />
                <SquareRadio name="attr_Health" value={-2} />
                <Health name="attr_Wounded" />
              </div>
              <div>
                <H5 i18n={"mauled-u"} />
                <Health name="attr_Mauled" />
              </div>
              <div>
                <H5 i18n={"crippled-u"} />
                <SquareRadio name="attr_Health" value={-5} />
                <Health name="attr_Crippled" />
              </div>
              <div>
                <H5 i18n={"incapacitated-u"} />
                <Health name="attr_Incapacitated" />
              </div>
            </div>
          </SectionBody>
          <SectionHead i18n="movement-u" />
          <SectionBody className="sheet-primary--movement">
            <Input i18n="dexspeed-u" type="number" name="attr_Dexterity" defaultValue={1} readOnly />
            <Input i18n="dexboostspeed-u" type="number" name="attr_DexterityBoost" defaultValue={0} readOnly />
            <Input i18n="celerityspeed-u" type="number" name="attr_CeleritySpeed" defaultValue={0} />
            <Input i18n="miscspeed-u" type="number" name="attr_MiscSpeed" defaultValue={0} />
            <Input
              i18n="walkspeed-u"
              className="speedoutput"
              type="text"
              name="attr_WalkSpeed"
              defaultValue={7}
              disabled
              postfix="yardsmeters-u"
            />
            <Input i18n="jogspeed-u" name="attr_JogSpeed" defaultValue="10" disabled postfix="yardsmeters-u" />
            <Input i18n="runspeed-u" name="attr_RunSpeed" defaultValue="10" disabled postfix="yardsmeters-u" />
          </SectionBody>
          <SectionHead i18n="weakness-u" />
          <SectionBody>
            <textarea name="attr_Weakness" style={{ width: "95%", height: 70 }} defaultValue={""} />
          </SectionBody>
        </Section>
      </SectionBody>
    </Section>
  </div>
);
