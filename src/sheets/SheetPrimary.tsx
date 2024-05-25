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
          <option key={key} data-i18n={key} />
        ))}
    </datalist>
    <datalist id="user-discipline-datalist">
      {range(0, 21).map((i) => (
        <option key={i} name={`attr_Discipline${i}Name`} />
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
          <Input i18n="generation-u" name="Generation" type="number" defaultValue={13} />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="attributes-u" />
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div>
          <H3 i18n="physical-u" />
          <AttrInput from={1} to={10} i18n="strength-u" name="Strength" />
          <AttrInput from={1} to={10} i18n="dexterity-u" name="Dexterity" />
          <AttrInput from={1} to={10} i18n="stamina-u" name="Stamina" />
        </div>
        <div>
          <H3 i18n="social-u" />
          <AttrInput from={1} to={10} i18n="charisma-u" name="Charisma" />
          <AttrInput from={1} to={10} i18n="manipulation-u" name="Manipulation" />
          <AttrInput from={1} to={10} i18n="appearance-u" name="Appearance" />
        </div>
        <div>
          <H3 i18n="mental-u" />
          <AttrInput from={1} to={10} i18n="perception-u" name="Perception" />
          <AttrInput from={1} to={10} i18n="intelligence-u" name="Intelligence" />
          <AttrInput from={1} to={10} i18n="wits-u" name="Wits" />
        </div>
      </SectionBody>
    </Section>
    <Section>
      <SectionHead i18n="abilities-u" />
      <SectionBody style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div>
          <H3 i18n="talents-u" />
          {talents.map((title) => (
            <AttrInput key={title} i18n={`${title}-u`} from={0} to={10} name={title} />
          ))}
          <RepeatingSection name="hobbyTalentList" className="sheet-primary--hobbies">
            {() => (
              <div className="sheet-component sheet-component--attr-input">
                <Input name="itemName" />
                <div className="sheet-component--attr-input--dots-input">
                  <Counter name="itemDotsNumber" from={0} to={10} renderCounterOnZero preserveZeroGap />
                </div>
                <Input className="sheet-component--attr-input-spec" name="itemSpec" />
              </div>
            )}
          </RepeatingSection>
        </div>
        <div>
          <H3 i18n="skills-u" />
          {skills.map((title) => (
            <AttrInput key={title} i18n={`${title}-u`} from={0} to={10} name={title} />
          ))}
          <RepeatingSection name="hobbySkillList" className="sheet-primary--hobbies">
            {() => (
              <div className="sheet-component sheet-component--attr-input">
                <Input name="itemName" />
                <div className="sheet-component--attr-input--dots-input">
                  <Counter name="itemDotsNumber" from={0} to={10} renderCounterOnZero preserveZeroGap />
                </div>
                <Input className="sheet-component--attr-input-spec" name="itemSpec" />
              </div>
            )}
          </RepeatingSection>
        </div>
        <div>
          <H3 i18n="knowledges-u" />
          {knowledges.map((title) => (
            <AttrInput key={title} i18n={`${title}-u`} from={0} to={10} name={title} />
          ))}
          <RepeatingSection name="hobbyKnowledgeList" className="sheet-primary--hobbies">
            {() => (
              <div className="sheet-component sheet-component--attr-input">
                <Input name="itemName" />
                <div className="sheet-component--attr-input--dots-input">
                  <Counter name="itemDotsNumber" from={0} to={10} renderCounterOnZero preserveZeroGap />
                </div>
                <Input className="sheet-component--attr-input-spec" name="itemSpec" />
              </div>
            )}
          </RepeatingSection>
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
                <Counter fade from={0} to={10} name="points" />
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
                <Input name="name" />
                <Counter fade from={0} to={10} name="points" />
              </div>
            )}
          </RepeatingSection>
        </div>
        <div>
          <H3 i18n="virtues-u" />
          <div className="sheet-primary--virtues">
            {/*todo fix rolls*/}
            <select className="select-no-appearance" name="attr_virtueConsName" defaultValue="Conscience">
              <option value="Conscience" data-i18n="conscience-u" />
              <option value="Conviction" data-i18n="conviction-u" />
            </select>
            <div className="sheet-primary--counter-with-roll">
              <Counter from={1} to={5} name="C_C" />
              <RollButton
                name="attribute"
                data-attribute="C_C"
                data-attribute-name-value="virtueConsName"
                childrenName="C_C"
              />
            </div>
            <select className="select-no-appearance" name="attr_virtueSelfName" defaultValue="Self-Control">
              <option value="Self-Control" data-i18n="selfcontrol-u" />
              <option value="Instinct" data-i18n="instinct-u" />
            </select>
            <div className="sheet-primary--counter-with-roll">
              <Counter from={1} to={5} name="S_I" />
              <RollButton
                name="attribute"
                data-attribute="S_I"
                data-attribute-name-value="virtueSelfName"
                childrenName="S_I"
              />
            </div>
            <H4 i18n="courage-u" />
            <div className="sheet-primary--counter-with-roll">
              <Counter from={1} to={5} name="Courage" />
              <RollButton
                name="attribute"
                data-attribute="Courage"
                data-attribute-name="courage-u"
                childrenName="Courage"
              />
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
            {range(1, 11)
              .reverse()
              .flatMap((i) => [
                <input type="radio" name="attr_pathNumberComputed" value={i} key={`input_${i}`} />,
                <ResizingTextarea name={`MoralPath${i}`} placeholder={`Moral path ${i}`} key={i} />,
              ])}
          </SectionBody>
        </Section>
        <Section>
          <Section>
            <div className="sheet-element-section-heading">
              <div className="sheet-element-section-heading-humanitypaths">
                <input type="text" name="attr_path" defaultValue={translation["humanitypath-u"]} />
                <span name="attr_path" />
              </div>
            </div>
            <SectionBody className="sheet-primary-humanity-path">
              <div className="sheet-primary--counter-with-roll">
                <Counter from={1} to={10} name="pathNumber" className="sheet-primary-humanity-path--counter" />
                <RollButton
                  name="attribute"
                  data-attribute="pathNumber"
                  data-attribute-name-value="path"
                  childrenName="pathNumber"
                />
              </div>
            </SectionBody>
          </Section>
          <Section>
            <SectionHead i18n="willpower-u">
              <span style={{ padding: "0px 8px", opacity: 0.5 }}>
                <span name="attr_WillpowerUsed" />/<span name="attr_Willpower" />
              </span>
            </SectionHead>
            <SectionBody style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <div className="sheet-primary--counter-with-roll">
                <Counter from={1} to={10} name="Willpower" />
                <RollButton
                  name="attribute"
                  data-attribute="Willpower"
                  data-attribute-name="willpower-u"
                  childrenName="willpowerRoll"
                />
              </div>
              <div className="sheet-primary--counter-with-roll">
                <Counter from={0} to={10} name="willpowerUsed" dotStyle="square" style={{ alignItems: "center" }} />
                <RollButton
                  name="attribute"
                  data-attribute="willpowerUsed"
                  data-attribute-name="willpower-current-u"
                  childrenName="willpowerUsed"
                />
              </div>
            </SectionBody>
          </Section>
          <Section className="sheet-component" style={{ display: "flex", flexDirection: "column-reverse" }}>
            <SectionBody>
              <div
                className="sheet-component sheet-component--counter sheet-primary--bloodpool sheet-component--counter-fade"
                style={{ height: "unset" }}
              >
                <input type="radio" name="attr_BloodPool" value={0} defaultChecked />
                {range(1, 101).flatMap((i) => [
                  <input type="radio" name="attr_BloodPool" key={i} value={i} title={`${i}`} />,
                  <input type="radio" name="attr_BloodPoolMax" key={i} value={i} title={`${i}`} />,
                ])}
              </div>

              <div style={{ display: "flex" }}>
                <Input i18n="bloodpoolMax-u" name="BloodPoolMax" type="number" />
                <Input i18n="pointsperturn-u" name="BloodPerTurn" type="number" />
              </div>
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
            <div className="sheet-primary--2col">
              <H5 i18n="walkspeed-u" />
              <div>
                <span name="attr_WalkSpeed">10</span>
                <select className="select-no-appearance" name="attr_yardsmeters" defaultValue="meters">
                  <option value="meters" data-i18n="meters-u" />
                  <option value="yards" data-i18n="yards-u" />
                </select>
              </div>
              <H5 i18n="jogspeed-u" />
              <div>
                <span name="attr_JogSpeed">10</span>
                <select className="select-no-appearance" name="attr_yardsmeters" defaultValue="meters">
                  <option value="meters" data-i18n="meters-u" />
                  <option value="yards" data-i18n="yards-u" />
                </select>
              </div>
              <H5 i18n="runspeed-u" />
              <div>
                <span name="attr_RunSpeed">10</span>
                <select className="select-no-appearance" name="attr_yardsmeters" defaultValue="meters">
                  <option value="meters" data-i18n="meters-u" />
                  <option value="yards" data-i18n="yards-u" />
                </select>
              </div>
            </div>
          </SectionBody>
          <Section i18n="weakness-u">
            <ResizingTextarea name="Weakness" />
          </Section>
        </Section>
      </SectionBody>
    </Section>
  </div>
);
