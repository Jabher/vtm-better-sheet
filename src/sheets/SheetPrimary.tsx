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
import { talents, knowledges, skills } from "../consts.ts";
import { RollButton } from "../components/Buttons.tsx";
import { RepeatingSection } from "../components/RepeatingSection.tsx";
import { Row } from "../components/Row.tsx";

export const SheetPrimary = () => (
  <div className="sheet-tab-content sheet-primary">
    <datalist id="discipline-datalist">
      {Object.keys(translation)
        .filter((key) => key.startsWith("discipline-name-"))
        .map((key) => (
          <option data-i18n={key} key={key} />
        ))}
    </datalist>
    <Section>
      <SectionHead i18n="Primary" />
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div>
          <Input i18n="name-u" name="Name" />
          <Input i18n="player-u" name="Player" />
          <Input i18n="chronicle-u" name="Chronicle" />
        </div>
        <div>
          <Input i18n="nature-u" name="Nature" />
          <Input i18n="demeanor-u" name="Demeanor" />
          <Input i18n="concept-u" name="Concept" />
        </div>
        <div>
          <Input i18n="clan-u" name="Clan" />
          <Input i18n="sire-u" name="Sire" />
          <Input i18n="generation-u" name="Generation" type="number" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="attributes-u" />
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div>
          <H3 i18n="physical-u" />
          <AttrInput from={1} to={9} i18n="strength-u" name="Strength" />
          <AttrInput from={1} to={9} i18n="dexterity-u" name="Dexterity" />
          <AttrInput from={1} to={9} i18n="stamina-u" name="Stamina" />
        </div>
        <div>
          <H3 i18n="social-u" />
          <AttrInput from={1} to={9} i18n="charisma-u" name="Charisma" />
          <AttrInput from={1} to={9} i18n="manipulation-u" name="Manipulation" />
          <AttrInput from={1} to={9} i18n="appearance-u" name="Appearance" />
        </div>
        <div>
          <H3 i18n="mental-u" />
          <AttrInput from={1} to={9} i18n="perception-u" name="Perception" />
          <AttrInput from={1} to={9} i18n="intelligence-u" name="Intelligence" />
          <AttrInput from={1} to={9} i18n="wits-u" name="Wits" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="abilities-u" />
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div>
          <H3 i18n="talents-u" />
          {talents.map((title) => (
            <AttrInput key={title} i18n={`${title}-u`} from={0} to={5} name={title} />
          ))}
          {/*todo 3 hobby talent*/}
        </div>
        <div>
          <H3 i18n="skills-u" />
          {skills.map((title) => (
            <AttrInput key={title} i18n={`${title}-u`} from={0} to={5} name={title} />
          ))}
          {/*todo 3 hobby talent*/}
        </div>
        <div>
          <H3 i18n="knowledges-u" />
          {knowledges.map((title) => (
            <AttrInput key={title} i18n={`${title}-u`} from={0} to={5} name={title} />
          ))}
          {/*todo 3 hobby talent*/}
        </div>
      </SectionBody>
    </Section>

    <Section>
      <SectionHead i18n="advantages-u" />
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div>
          <H3 i18n="disciplines-u" />
          <RepeatingSection name="disciplines">
            {() => (
              <Row>
                <Input name="name" list="discipline-datalist" />
                <Counter fade from={0} to={9} name="points" />
                <span className="sheet-component--attr-input-linked">
                  <input type="checkbox" name="attr_linked" defaultChecked={true} />
                  <span className="material-symbols-outlined sheet-component--attr-input-linked-icon">share</span>
                  <span data-i18n="discipline-is-linked" className="sheet-component--attr-input-linked-tooltip" />
                </span>
              </Row>
            )}
          </RepeatingSection>
        </div>
        <div>
          <H3 i18n="backgrounds-u" />
          <RepeatingSection name="backgrounds">
            {() => (
              <div style={{ display: "flex" }}>
                <Input name={`name`} />
                <Counter fade from={0} to={9} name={`points`} />
              </div>
            )}
          </RepeatingSection>
        </div>
        <div>
          <H3 i18n="virtues-u" />
          <div className="sheet-primary--virtues">
            <select className="sheet-text-fronth2" name="virtueConsName" defaultValue="Conscience">
              <option value="Conscience" data-i18n="conscience-u" />
              <option value="Conviction" data-i18n="conviction-u" />
            </select>
            <div className="sheet-primary--counter-with-roll">
              <Counter from={1} to={5} name="C_C" />
              <RollButton name="CourageRoll" childrenName="C_C" />
            </div>
            <select className="sheet-text-fronth2" name="virtueSelfName" defaultValue="Self-Control">
              <option value="Self-Control" data-i18n="selfcontrol-u" />
              <option value="Instinct" data-i18n="instinct-u" />
            </select>
            <div className="sheet-primary--counter-with-roll">
              <Counter from={1} to={5} name="S_I" />
              <RollButton name="CourageRoll" childrenName="S_I" />
            </div>
            <H4 i18n="courage-u" />
            <div className="sheet-primary--counter-with-roll">
              <Counter from={1} to={5} name="Courage" />
              <RollButton name="CourageRoll" childrenName="Courage" />
            </div>
          </div>
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Section>
          <SectionHead i18n="pathsins-u" />
          <SectionBody className="sheet-primary-moralpath">
            {range(1, 10)
              .reverse()
              .map((i) => (
                <ResizingTextarea name={`MoralPath${i}`} placeholder={`Moral path ${i}`} key={i} />
              ))}
          </SectionBody>
        </Section>
        <Section>
          <Section>
            <div className="sheet-element-section-heading">
              <div className="sheet-element-section-heading-humanitypaths">
                <input type="text" name="attr_PathoEname" defaultValue={translation["humanitypath-u"]} />
                <span name="attr_PathoEname" />
              </div>
            </div>
            <SectionBody className="sheet-primary-humanity-path">
              <div className="sheet-primary--counter-with-roll">
                <Counter from={1} to={9} name="PathoE" className="sheet-primary-humanity-path--counter" />
                <RollButton name="CourageRoll" childrenName="PathoE" />
              </div>
              <Input i18n="bearing-u" name="Bearing" style={{ width: "100%" }} />
            </SectionBody>
          </Section>
          <Section>
            <SectionHead i18n="willpower-u">
              <span style={{ padding: "0px 8px", opacity: 0.5 }}>
                <span name="attr_Willpower_Used" />/<span name="attr_Willpower" />
              </span>
            </SectionHead>
            <SectionBody style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <div className="sheet-primary--counter-with-roll">
                <Counter from={1} to={9} name="Willpower" />
                <RollButton name="willpower" childrenName="willpowerRoll" />
              </div>
              <div className="sheet-primary--counter-with-roll">
                <Counter from={0} to={9} name="Willpower_Used" dotStyle="square" />
                <RollButton name="willpowerUsed" childrenName="willpowerUsedRoll" />
              </div>
            </SectionBody>
          </Section>
          <Section className="sheet-component" style={{ display: "flex", flexDirection: "column-reverse" }}>
            <SectionBody>
              <Counter from={0} to={39} name="BloodPool" className="sheet-primary--bloodpool" fade />
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
              <Health name="BruisedExtra1" />
              <Health name="BruisedExtra2" />
              <Health name="BruisedExtra3" />
              <Health name="BruisedExtra4" />
              <Health name="BruisedExtra5" />
              <Health name="BruisedExtra6" />
              <Health name="BruisedExtra7" />
              <Health name="BruisedExtra8" />
              <Health name="BruisedExtra9" />
              <Health name="BruisedExtra10" />
              <Health name="BruisedExtra11" />
              <Health name="BruisedExtra12" />
            </div>
            <div className="sheet-primary--health-main">
              <div>
                <H5 i18n={"bruised-u"} />
                <SquareRadio name="Health" value={0} defaultChecked />
                <Health name="Bruised" />
              </div>
              <div>
                <H5 i18n={"hurt-u"} />
                <SquareRadio name="Health" value={-1} />
                <Health name="Hurt" />
              </div>
              <div>
                <H5 i18n={"injured-u"} />
                <Health name="Injured" />
              </div>
              <div>
                <H5 i18n={"wounded-u"} />
                <SquareRadio name="Health" value={-2} />
                <Health name="Wounded" />
              </div>
              <div>
                <H5 i18n={"mauled-u"} />
                <Health name="Mauled" />
              </div>
              <div>
                <H5 i18n={"crippled-u"} />
                <SquareRadio name="Health" value={-5} />
                <Health name="Crippled" />
              </div>
              <div>
                <H5 i18n={"incapacitated-u"} />
                <Health name="Incapacitated" />
              </div>
            </div>
          </SectionBody>
          <SectionHead i18n="movement-u" />
          <SectionBody className="sheet-primary--movement">
            <Input i18n="dexspeed-u" type="number" name="Dexterity" defaultValue={1} readOnly />
            <Input i18n="dexboostspeed-u" type="number" name="DexterityBoost" readOnly />
            <Input i18n="celerityspeed-u" type="number" name="celerityBoost" />
            <Input i18n="miscspeed-u" type="number" name="MiscSpeed" />
            <Input i18n="walkspeed-u" type="number" name="WalkSpeed" disabled postfix="yardsmeters-u" />
            <Input i18n="jogspeed-u" name="JogSpeed" disabled postfix="yardsmeters-u" />
            <Input i18n="runspeed-u" name="RunSpeed" disabled postfix="yardsmeters-u" />
          </SectionBody>
          <Section i18n="weakness-u">
            <ResizingTextarea name="Weakness" />
          </Section>
        </Section>
      </SectionBody>
    </Section>
  </div>
);
