import {Section, SectionBody, SectionHead} from "../components/Section.tsx";
import {Input, ReadonlyInput} from "../components/Input.tsx";
import {H3} from "../globals/Headings.tsx";
import "./SheetDice.css";

export const SheetDice = () => <div className="sheet-tab-content sheet-dice">
    <Section>
        <SectionHead>Dice Pools</SectionHead>
        <SectionBody>
            <div className="sheet-col" style={{width: "100%"}}>
                <div className="sheet-col" style={{width: "20%"}}>
                    <h3 style={{textAlign: "center"}}>Send Rolls to</h3>
                    <select className="sheet-center-dots" name="attr_sendRollTo">
                        <option value="" selected>Public</option>
                        <option value="/w ?{Whisper to who?}">Private</option>
                        <option value="/w gm">ST</option>
                        <option value="/w @{Name}">Myself</option>
                    </select>
                </div>
                <div className="sheet-col">
                    <div className="sheet-col">
                        <div className="sheet-col">
                            <h4>Perm. Willpower</h4>
                            <input type="number" name="attr_PermWillpowerDiff" className="sheet-inputname"
                                   defaultValue={6}/>
                            <div style={{display: "inline"}}>
                                <button
                                    className="sheet-custom-button sheet-vampire-button"
                                    type="roll"
                                    name="roll_PermWillpowerRoll"
                                    style={{fontSize: 12}}
                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=Perm. Willpower}} {{attr=Perm. Willpower}} {{attr_num=@{Willpower}}} {{result=[[{@{Willpower}d10sd}>@{PermWillpowerDiff}f1]]}} "
                                >Roll
                                </button>
                            </div>
                        </div>
                        <div className="sheet-col" style={{width: "15%"}}>
                            <h4>Temp. Willpower</h4>
                            <input type="number" name="attr_TempWillpowerDiff" className="sheet-inputname"
                                   defaultValue={6}/>
                            <div style={{display: "inline"}}>
                                <button
                                    className="sheet-custom-button sheet-vampire-button"
                                    type="roll"
                                    name="roll_TempWillpowerRoll"
                                    style={{fontSize: 12}}
                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=Temp. Willpower}} {{attr=Temp. Willpower}} {{attr_num=@{Willpower_Used}}} {{result=[[{@{Willpower_Used}d10sd}>@{tempWillpowerDiff}f1]]}} "
                                >Roll
                                </button>
                            </div>
                        </div>
                        <div className="sheet-col" style={{width: "20%"}}>
                            <select
                                className="sheet-center-select"
                                name="attr_virtueConsName"
                            >
                                <option value="Conscience" selected>
                                    Conscience
                                </option>
                                <option value="Conviction">Conviction</option>
                            </select>
                            <br/>
                            <input
                                type="number"
                                name="attr_ConscConvDiff"
                                className="sheet-inputname"
                                defaultValue={6}
                            />
                            <div style={{display: "inline"}}>
                                <button
                                    className="sheet-custom-button sheet-vampire-button"
                                    type="roll"
                                    name="roll_ConscConvRoll"
                                    style={{fontSize: 12}}
                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=@{virtueConsName}}} {{attr=@{virtueConsName}}} {{attr_num=@{C_C}}} {{result=[[{@{C_C}d10sd}>@{ConscConvDiff}f1]]}} "
                                >
                                    Roll
                                </button>
                                <br/>
                            </div>
                        </div>
                        <div className="sheet-col" style={{width: "20%"}}>
                            <select
                                className="sheet-center-select"
                                name="attr_virtueSelfName"
                            >
                                <option value="Self-Control" selected>
                                    Self-Control
                                </option>
                                <option value="Instinct">Instinct</option>
                            </select>
                            <br/>
                            <input
                                type="number"
                                name="attr_SelfCInstDiff"
                                className="sheet-inputname"
                                defaultValue={6}
                            />
                            <div style={{display: "inline"}}>
                                <button
                                    className="sheet-custom-button sheet-vampire-button"
                                    type="roll"
                                    name="roll_SelfCInstRoll"
                                    style={{fontSize: 12}}
                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=@{virtueSelfName}}} {{attr=@{virtueSelfName}}} {{attr_num=@{S_I}}} {{result=[[{@{S_I}d10sd}>@{SelfCInstDiff}f1]]}} "
                                >
                                    Roll
                                </button>
                                <br/>
                            </div>
                        </div>
                        <div className="sheet-col" style={{width: "20%"}}>
                            <h4 style={{textAlign: "center"}}>Courage</h4>
                            <input
                                type="number"
                                name="attr_CourageDiff"
                                className="sheet-inputname"
                                defaultValue={6}
                            />
                            <div style={{display: "inline"}}>
                                <button
                                    className="sheet-custom-button sheet-vampire-button"
                                    type="roll"
                                    name="roll_CourageRoll"
                                    style={{fontSize: 12}}
                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=Courage}} {{attr=Courage}} {{attr_num=@{Courage}}} {{result=[[{@{Courage}d10sd}>@{CourageDiff}f1]]}} "
                                >
                                    Roll
                                </button>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div
                        className="sheet-col"
                        style={{width: 150, textAlign: "center"}}
                    >
                        <h4 style={{textAlign: "center", width: "100%"}}>
                            Wound Penalties
                        </h4>
                        <select name="attr_Health" className="sheet-center-select">
                            <option value={0} selected>
                                Healthy/Bruised (0)
                            </option>
                            <option value={-1}>Hurt/Injured (-1)</option>
                            <option value={-2}>Wounded/Mauled (-2)</option>
                            <option value={-5}>Crippled (-5)</option>
                            <option value="[[-5]]">Incapacitated (-5*)</option>
                        </select>
                    </div>
                    <div
                        className="sheet-col"
                        style={{width: 140, textAlign: "center", marginLeft: 25}}
                    >
                        <h4 style={{textAlign: "center", width: "100%"}}>
                            Temp. Willpower
                        </h4>
                        <select
                            className="sheet-center-dots"
                            name="attr_Willpower_Used"
                            style={{width: 130, textAlign: "center"}}
                        >
                            <option value={0} selected>
                                ☐☐☐☐☐☐☐☐☐☐
                            </option>
                            <option value={1}>☒☐☐☐☐☐☐☐☐☐</option>
                            <option value={2}>☒☒☐☐☐☐☐☐☐☐</option>
                            <option value={3}>☒☒☒☐☐☐☐☐☐☐</option>
                            <option value={4}>☒☒☒☒☐☐☐☐☐☐</option>
                            <option value={5}>☒☒☒☒☒☐☐☐☐☐</option>
                            <option value={6}>☒☒☒☒☒☒☐☐☐☐</option>
                            <option value={7}>☒☒☒☒☒☒☒☐☐☐</option>
                            <option value={8}>☒☒☒☒☒☒☒☒☐☐</option>
                            <option value={9}>☒☒☒☒☒☒☒☒☒☐</option>
                            <option value={10}>☒☒☒☒☒☒☒☒☒☒</option>
                        </select>
                    </div>
                    <div
                        className="sheet-col"
                        style={{width: 130, textAlign: "center", marginLeft: 25}}
                    >
                        <h4 style={{textAlign: "center", width: "100%"}}>
                            Blood Points
                        </h4>
                        <select
                            className="sheet-center-dots"
                            name="attr_BloodPool"
                            style={{width: 130, textAlign: "center"}}
                        >
                            <option value={0} selected>
                                ☐☐☐☐☐☐☐☐☐☐
                            </option>
                            <option value={1}>☒☐☐☐☐☐☐☐☐☐</option>
                            <option value={2}>☒☒☐☐☐☐☐☐☐☐</option>
                            <option value={3}>☒☒☒☐☐☐☐☐☐☐</option>
                            <option value={4}>☒☒☒☒☐☐☐☐☐☐</option>
                            <option value={5}>☒☒☒☒☒☐☐☐☐☐</option>
                            <option value={6}>☒☒☒☒☒☒☐☐☐☐</option>
                            <option value={7}>☒☒☒☒☒☒☒☐☐☐</option>
                            <option value={8}>☒☒☒☒☒☒☒☒☐☐</option>
                            <option value={9}>☒☒☒☒☒☒☒☒☒☐</option>
                            <option value={10}>☒☒☒☒☒☒☒☒☒☒</option>
                            <option value={11}>☒ 11</option>
                            <option value={12}>☒ 12</option>
                            <option value={13}>☒ 13</option>
                            <option value={14}>☒ 14</option>
                            <option value={15}>☒ 15</option>
                            <option value={16}>☒ 16</option>
                            <option value={17}>☒ 17</option>
                            <option value={18}>☒ 18</option>
                            <option value={19}>☒ 19</option>
                            <option value={20}>☒☒ 20</option>
                            <option value={21}>☒☒ 21</option>
                            <option value={22}>☒☒ 22</option>
                            <option value={23}>☒☒ 23</option>
                            <option value={24}>☒☒ 24</option>
                            <option value={25}>☒☒ 25</option>
                            <option value={26}>☒☒ 26</option>
                            <option value={27}>☒☒ 27</option>
                            <option value={28}>☒☒ 28</option>
                            <option value={29}>☒☒ 29</option>
                            <option value={30}>☒☒☒ 30</option>
                            <option value={31}>☒☒☒ 31</option>
                            <option value={32}>☒☒☒ 32</option>
                            <option value={33}>☒☒☒ 33</option>
                            <option value={34}>☒☒☒ 34</option>
                            <option value={35}>☒☒☒ 35</option>
                            <option value={36}>☒☒☒ 36</option>
                            <option value={37}>☒☒☒ 37</option>
                            <option value={38}>☒☒☒ 38</option>
                            <option value={39}>☒☒☒ 39</option>
                            <option value={40}>☒☒☒☒ 40</option>
                            <option value={41}>☒☒☒☒ 41</option>
                            <option value={42}>☒☒☒☒ 42</option>
                            <option value={43}>☒☒☒☒ 43</option>
                            <option value={44}>☒☒☒☒ 44</option>
                            <option value={45}>☒☒☒☒ 45</option>
                            <option value={46}>☒☒☒☒ 46</option>
                            <option value={47}>☒☒☒☒ 47</option>
                            <option value={48}>☒☒☒☒ 48</option>
                            <option value={49}>☒☒☒☒ 49</option>
                            <option value={50}>☒☒☒☒☒ 50</option>
                        </select>
                    </div>
                    <Section>
                        <SectionHead>Boosted Attributes</SectionHead>
                        <SectionBody className="sheet-3col sheet-attributes">
                            <div>
                                <H3 i18n="strength-u"><ReadonlyInput value="@{Strength}"/></H3>
                                <Input labelName="Boost" name="attr_StrengthBoost" type="number" defaultValue={0}/>
                                <H3 i18n="dexterity-u"><ReadonlyInput value="@{Dexterity}"/></H3>
                                <Input labelName="Boost" name="attr_DexterityBoost" type="number" defaultValue={0}/>
                                <H3 i18n="stamina-u"><ReadonlyInput value="@{Stamina}"/></H3>
                                <Input labelName="Boost" name="attr_StaminaBoost" type="number" defaultValue={0}/>
                            </div>
                            <div>
                                <H3 i18n="charisma-u"><ReadonlyInput value="@{Charisma}"/></H3>
                                <Input labelName="Boost" name="attr_CharismaBoost" type="number" defaultValue={0}/>
                                <H3 i18n="manipulation-u"><ReadonlyInput value="@{Manipulation}"/></H3>
                                <Input labelName="Boost" name="attr_ManipulationBoost" type="number" defaultValue={0}/>
                                <H3 i18n="appearance-u"><ReadonlyInput value="@{Appearance}"/></H3>
                                <Input labelName="Boost" name="attr_AppearanceBoost" type="number" defaultValue={0}/>
                            </div>
                            <div>
                                <H3 i18n="perception-u"><ReadonlyInput value="@{Perception}"/></H3>
                                <Input labelName="Boost" name="attr_PerceptionBoost" type="number" defaultValue={0}/>
                                <H3 i18n="intelligence-u"><ReadonlyInput value="@{Intelligence}"/></H3>
                                <Input labelName="Boost" name="attr_IntelligenceBoost" type="number" defaultValue={0}/>
                                <H3 i18n="wits-u"><ReadonlyInput value="@{Wits}"/></H3>
                                <Input labelName="Boost" name="attr_WitsBoost" type="number" defaultValue={0}/>
                            </div>
                        </SectionBody>
                    </Section>
                    <Section>
                        <SectionHead>Main Dice Pools</SectionHead>
                        <SectionBody className="sheet-colrow sheet-table">
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Name
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Attribute
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Abillity
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Discipline
                                        </h4>
                                    </td>
                                    <td style={{width: "5%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Modifiers
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4
                                            style={{
                                                width: "100%",
                                                textAlign: "center",
                                                fontSize: 10
                                            }}
                                        >
                                            Wound Penalties?
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Difficulty
                                        </h4>
                                    </td>
                                    <td style={{width: "20%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Rolls
                                        </h4>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <fieldset
                                className="repeating_mainDice"
                                name="attr_maindicesection"
                            >
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td style={{width: "15%"}}>
                                            <input
                                                type="text"
                                                name="attr_mainrollTitle"
                                                className="sheet-inputname"
                                            />
                                        </td>
                                        <td style={{width: "15%"}}>
                                            <select
                                                name="attr_mainattributeRoll"
                                                className="sheet-center-select"
                                            >
                                                <optgroup label="Physical">
                                                    <option value="@{Strength}+@{StrengthBoost}">
                                                        Strength
                                                    </option>
                                                    <option value="@{Dexterity}+@{DexterityBoost}">
                                                        Dexterity
                                                    </option>
                                                    <option value="@{Stamina}+@{StaminaBoost}">
                                                        Stamina
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Social">
                                                    <option value="@{Charisma}+@{CharismaBoost}">
                                                        Charisma
                                                    </option>
                                                    <option value="@{Manipulation}+@{ManipulationBoost}">
                                                        Manipulation
                                                    </option>
                                                    <option value="@{Appearance}+@{AppearanceBoost}">
                                                        Appearance
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Mental">
                                                    <option value="@{Perception}+@{PerceptionBoost}">
                                                        Perception
                                                    </option>
                                                    <option value="@{Intelligence}+@{IntelligenceBoost}">
                                                        Intelligence
                                                    </option>
                                                    <option value="@{Wits}+@{WitsBoost}">
                                                        Wits
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Other">
                                                    <option value={0}>None</option>
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td style={{width: "15%"}}>
                                            <select
                                                name="attr_mainabilityRoll"
                                                className="sheet-center-select"
                                            >
                                                <optgroup label="Talents">
                                                    <option value="@{Alertness}">
                                                        Alertness
                                                    </option>
                                                    <option value="@{Athletics}">
                                                        Athletics
                                                    </option>
                                                    <option value="@{Awareness}">
                                                        Awareness
                                                    </option>
                                                    <option value="@{Brawl}">Brawl</option>
                                                    <option value="@{Empathy}">Empathy</option>
                                                    <option value="@{Expression}">
                                                        Expression
                                                    </option>
                                                    <option value="@{Intimidation}">
                                                        Intimidation
                                                    </option>
                                                    <option value="@{Leadership}">
                                                        Leadership
                                                    </option>
                                                    <option value="@{Streetwise}">
                                                        Streetwise
                                                    </option>
                                                    <option value="@{Subterfuge}">
                                                        Subterfuge
                                                    </option>
                                                    <option value="@{Abi1}">
                                                        Hobby Talent 1
                                                    </option>
                                                    <option value="@{Abi2}">
                                                        Hobby Talent 2
                                                    </option>
                                                    <option value="@{Abi3}">
                                                        Hobby Talent 3
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Skills">
                                                    <option value="@{AnimalKen}">
                                                        AnimalKen
                                                    </option>
                                                    <option value="@{Crafts}">Crafts</option>
                                                    <option value="@{Drive}">Drive</option>
                                                    <option value="@{Etiquette}">
                                                        Etiquette
                                                    </option>
                                                    <option value="@{Firearms}">Firearms</option>
                                                    <option value="@{Larceny}">Larceny</option>
                                                    <option value="@{Melee}">Melee</option>
                                                    <option value="@{Performance}">
                                                        Performance
                                                    </option>
                                                    <option value="@{Stealth}">Stealth</option>
                                                    <option value="@{Survival}">Survival</option>
                                                    <option value="@{Abi4}">Prof. Skill 1</option>
                                                    <option value="@{Abi5}">Prof. Skill 2</option>
                                                    <option value="@{Abi6}">Prof. Skill 3</option>
                                                </optgroup>
                                                <optgroup label="Knowledges">
                                                    <option value="@{Academics}">
                                                        Academics
                                                    </option>
                                                    <option value="@{Computer}">Computer</option>
                                                    <option value="@{Finance}">Finance</option>
                                                    <option value="@{Investigation}">
                                                        Investigation
                                                    </option>
                                                    <option value="@{Law}">Law</option>
                                                    <option value="@{Medicine}">Medicine</option>
                                                    <option value="@{Occult}">Occult</option>
                                                    <option value="@{Politics}">Politics</option>
                                                    <option value="@{Science}">Science</option>
                                                    <option value="@{Technology}">
                                                        Technology
                                                    </option>
                                                    <option value="@{Abi7}">
                                                        Expert Know. 1
                                                    </option>
                                                    <option value="@{Abi8}">
                                                        Expert Know. 2
                                                    </option>
                                                    <option value="@{Abi9}">
                                                        Expert Know. 3
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Other">
                                                    <option value={0}>None</option>
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td style={{width: "15%"}}>
                                            <select
                                                name="attr_maindisciplineRoll"
                                                className="sheet-center-select"
                                            >
                                                <optgroup label="Disciplines">
                                                    <option value="@{Discipline1}">
                                                        Discipline 1
                                                    </option>
                                                    <option value="@{Discipline2}">
                                                        Discipline 2
                                                    </option>
                                                    <option value="@{Discipline3}">
                                                        Discipline 3
                                                    </option>
                                                    <option value="@{Discipline4}">
                                                        Discipline 4
                                                    </option>
                                                    <option value="@{Discipline5}">
                                                        Discipline 5
                                                    </option>
                                                    <option value="@{Discipline6}">
                                                        Discipline 6
                                                    </option>
                                                    <option value="@{Discipline7}">
                                                        Discipline 7
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Other">
                                                    <option selected="selected" value={0}>
                                                        None
                                                    </option>
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td style={{width: "5%", textAlign: "center"}}>
                                            <input
                                                type="number"
                                                defaultValue={0}
                                                className="sheet-inputname"
                                                name="attr_mainmodNumber"
                                            />
                                        </td>
                                        <td style={{width: "10%", textAlign: "center"}}>
                                            <select
                                                name="attr_useHealth"
                                                className="sheet-center-select"
                                            >
                                                <option value="@{Health}">Yes</option>
                                                <option value={0}>No</option>
                                            </select>
                                        </td>
                                        <td style={{width: "10%", textAlign: "center"}}>
                                            <input
                                                type="number"
                                                name="attr_mainrollDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                        </td>
                                        <td style={{width: "20%", textAlign: "center"}}>
                                            <div style={{display: "inline"}}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_mainRoll"
                                                    style={{fontSize: 12, width: 75}}
                                                    value="@{sendRollTo} @{Name} &{template:wod} {{name=@{Name}}} {{roll_name=@{mainrollTitle}}} {{attr=Attribute}} {{attr_num=@{mainattributeRoll}}} {{skill=Ability}} {{skill_num=@{mainabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{maindisciplineRoll}}} {{mod_num=@{mainmodNumber}}} {{hp_mod=@{useHealth}}} {{result=[[{(@{mainattributeRoll}+@{mainabilityRoll}+@{maindisciplineRoll}+@{mainmodNumber}+@{useHealth})d10sd}>@{mainrollDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                            <br/>
                            <br/>
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHead>Initiative</SectionHead>
                        <SectionBody className="sheet-colrow sheet-table">
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Attribute 1
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Attribute 2
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Discipline
                                        </h4>
                                    </td>
                                    <td style={{width: "5%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Modifiers
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4
                                            style={{
                                                width: "100%",
                                                textAlign: "center",
                                                fontSize: 10
                                            }}
                                        >
                                            Wound Penalties?
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Difficulty
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Add to Tracker?
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Rolls
                                        </h4>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <select
                                            name="attr_attribute1Roll"
                                            className="sheet-center-select"
                                        >
                                            <optgroup label="Physical">
                                                <option value="@{Strength}+@{StrengthBoost}">
                                                    Strength
                                                </option>
                                                <option
                                                    value="@{Dexterity}+@{DexterityBoost}"
                                                    selected
                                                >
                                                    Dexterity
                                                </option>
                                                <option value="@{Stamina}+@{StaminaBoost}">
                                                    Stamina
                                                </option>
                                            </optgroup>
                                            <optgroup label="Social">
                                                <option value="@{Charisma}+@{CharismaBoost}">
                                                    Charisma
                                                </option>
                                                <option value="@{Manipulation}+@{ManipulationBoost}">
                                                    Manipulation
                                                </option>
                                                <option value="@{Appearance}+@{AppearanceBoost}">
                                                    Appearance
                                                </option>
                                            </optgroup>
                                            <optgroup label="Mental">
                                                <option value="@{Perception}+@{PerceptionBoost}">
                                                    Perception
                                                </option>
                                                <option value="@{Intelligence}+@{IntelligenceBoost}">
                                                    Intelligence
                                                </option>
                                                <option value="@{Wits}+@{WitsBoost}">
                                                    Wits
                                                </option>
                                            </optgroup>
                                            <optgroup label="Other">
                                                <option value={0}>None</option>
                                            </optgroup>
                                        </select>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <select
                                            name="attr_attribute2Roll"
                                            className="sheet-center-select"
                                        >
                                            <optgroup label="Physical">
                                                <option value="@{Strength}+@{StrengthBoost}">
                                                    Strength
                                                </option>
                                                <option value="@{Dexterity}+@{DexterityBoost}">
                                                    Dexterity
                                                </option>
                                                <option value="@{Stamina}+@{StaminaBoost}">
                                                    Stamina
                                                </option>
                                            </optgroup>
                                            <optgroup label="Social">
                                                <option value="@{Charisma}+@{CharismaBoost}">
                                                    Charisma
                                                </option>
                                                <option value="@{Manipulation}+@{ManipulationBoost}">
                                                    Manipulation
                                                </option>
                                                <option value="@{Appearance}+@{AppearanceBoost}">
                                                    Appearance
                                                </option>
                                            </optgroup>
                                            <optgroup label="Mental">
                                                <option value="@{Perception}+@{PerceptionBoost}">
                                                    Perception
                                                </option>
                                                <option value="@{Intelligence}+@{IntelligenceBoost}">
                                                    Intelligence
                                                </option>
                                                <option
                                                    value="@{Wits}+@{WitsBoost}"
                                                    selected
                                                >
                                                    Wits
                                                </option>
                                            </optgroup>
                                            <optgroup label="Other">
                                                <option value={0}>None</option>
                                            </optgroup>
                                        </select>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <select
                                            name="attr_initiativedisciplineRoll"
                                            className="sheet-center-select"
                                        >
                                            <optgroup label="Disciplines">
                                                <option value="@{Discipline1}">
                                                    Discipline 1
                                                </option>
                                                <option value="@{Discipline2}">
                                                    Discipline 2
                                                </option>
                                                <option value="@{Discipline3}">
                                                    Discipline 3
                                                </option>
                                                <option value="@{Discipline4}">
                                                    Discipline 4
                                                </option>
                                                <option value="@{Discipline5}">
                                                    Discipline 5
                                                </option>
                                                <option value="@{Discipline6}">
                                                    Discipline 6
                                                </option>
                                                <option value="@{Discipline7}">
                                                    Discipline 7
                                                </option>
                                            </optgroup>
                                            <optgroup label="Other">
                                                <option value={0} selected>
                                                    None
                                                </option>
                                            </optgroup>
                                        </select>
                                    </td>
                                    <td style={{width: "5%", textAlign: "center"}}>
                                        <input
                                            type="number"
                                            defaultValue={0}
                                            className="sheet-inputname"
                                            name="attr_modNumber"
                                        />
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <select
                                            name="attr_initiativeuseHealth"
                                            className="sheet-center-select"
                                        >
                                            <option value="@{Health}">Yes</option>
                                            <option value={0}>No</option>
                                        </select>
                                    </td>
                                    <td style={{width: "5%", textAlign: "center"}}>
                                        <input
                                            type="number"
                                            name="attr_initrollDiff"
                                            className="sheet-inputname"
                                            defaultValue={6}
                                        />
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <select
                                            name="attr_initiativeaddTracker"
                                            className="sheet-center-select"
                                        >
                                            <option value="&{tracker}">Yes</option>
                                            <option value=" ">No</option>
                                        </select>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <div style={{display: "inline"}}>
                                            <button
                                                className="sheet-custom-button sheet-vampire-button"
                                                type="roll"
                                                name="roll_initiativeRoll"
                                                style={{fontSize: 12, width: 75}}
                                                value="@{sendRollTo} @{Name} &{template:wodinitiative} {{name=@{Name}}} {{roll_name=Initiative}} {{attr1=Attribute 1}} {{attr1_num=@{attribute1Roll}}} {{attr2=Attribute 2}} {{attr2_num=@{attribute2Roll}}} {{pwr=Celerity}} {{pwr_num=@{initiativedisciplineRoll}}} {{mod_num=@{modNumber}}} {{hp_mod=@{initiativeuseHealth}}} {{result=[[[[@{attribute1Roll}+@{attribute2Roll}+@{initiativedisciplineRoll}+@{modNumber}+@{initiativeuseHealth}]]+[[1d10]] @{initiativeaddTracker}]]}} "
                                            >
                                                Roll
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </SectionBody>
                    </Section>
                    <Section>
                        <SectionHead>Combat Dice Pools</SectionHead>
                        <SectionBody>
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Name
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Attribute
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Abillity
                                        </h4>
                                    </td>
                                    <td style={{width: "15%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Discipline
                                        </h4>
                                    </td>
                                    <td style={{width: "5%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Modifiers
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4
                                            style={{
                                                width: "100%",
                                                textAlign: "center",
                                                fontSize: 10
                                            }}
                                        >
                                            Wound Penalties?
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Difficulty
                                        </h4>
                                    </td>
                                    <td style={{width: "20%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Rolls
                                        </h4>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <fieldset
                                className="repeating_combatDice"
                                name="attr_combatdicesection"
                            >
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td style={{width: "15%", textAlign: "center"}}>
                                            <input
                                                type="text"
                                                name="attr_combatrollTitle"
                                                className="sheet-inputname"
                                            />
                                        </td>
                                        <td style={{width: "15%", textAlign: "center"}}>
                                            <select
                                                name="attr_combatattributeRoll"
                                                className="sheet-center-select"
                                            >
                                                <optgroup label="Physical">
                                                    <option value="@{Strength}+@{StrengthBoost}">
                                                        Strength
                                                    </option>
                                                    <option value="@{Dexterity}+@{DexterityBoost}">
                                                        Dexterity
                                                    </option>
                                                    <option value="@{Stamina}+@{StaminaBoost}">
                                                        Stamina
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Social">
                                                    <option value="@{Charisma}+@{CharismaBoost}">
                                                        Charisma
                                                    </option>
                                                    <option value="@{Manipulation}+@{ManipulationBoost}">
                                                        Manipulation
                                                    </option>
                                                    <option value="@{Appearance}+@{AppearanceBoost}">
                                                        Appearance
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Mental">
                                                    <option value="@{Perception}+@{PerceptionBoost}">
                                                        Perception
                                                    </option>
                                                    <option value="@{Intelligence}+@{IntelligenceBoost}">
                                                        Intelligence
                                                    </option>
                                                    <option value="@{Wits}+@{WitsBoost}">
                                                        Wits
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Other">
                                                    <option value={0}>None</option>
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td style={{width: "15%", textAlign: "center"}}>
                                            <select
                                                name="attr_combatabilityRoll"
                                                className="sheet-center-select"
                                            >
                                                <optgroup label="Talents">
                                                    <option value="@{Alertness}">
                                                        Alertness
                                                    </option>
                                                    <option value="@{Athletics}">
                                                        Athletics
                                                    </option>
                                                    <option value="@{Awareness}">
                                                        Awareness
                                                    </option>
                                                    <option value="@{Brawl}">Brawl</option>
                                                    <option value="@{Empathy}">Empathy</option>
                                                    <option value="@{Expression}">
                                                        Expression
                                                    </option>
                                                    <option value="@{Intimidation}">
                                                        Intimidation
                                                    </option>
                                                    <option value="@{Leadership}">
                                                        Leadership
                                                    </option>
                                                    <option value="@{Streetwise}">
                                                        Streetwise
                                                    </option>
                                                    <option value="@{Subterfuge}">
                                                        Subterfuge
                                                    </option>
                                                    <option value="@{Abi1}">
                                                        Hobby Talent 1
                                                    </option>
                                                    <option value="@{Abi2}">
                                                        Hobby Talent 2
                                                    </option>
                                                    <option value="@{Abi3}">
                                                        Hobby Talent 3
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Skills">
                                                    <option value="@{AnimalKen}">
                                                        AnimalKen
                                                    </option>
                                                    <option value="@{Crafts}">Crafts</option>
                                                    <option value="@{Drive}">Drive</option>
                                                    <option value="@{Etiquette}">
                                                        Etiquette
                                                    </option>
                                                    <option value="@{Firearms}">Firearms</option>
                                                    <option value="@{Larceny}">Larceny</option>
                                                    <option value="@{Melee}">Melee</option>
                                                    <option value="@{Performance}">
                                                        Performance
                                                    </option>
                                                    <option value="@{Stealth}">Stealth</option>
                                                    <option value="@{Survival}">Survival</option>
                                                    <option value="@{Abi4}">Prof. Skill 1</option>
                                                    <option value="@{Abi5}">Prof. Skill 2</option>
                                                    <option value="@{Abi6}">Prof. Skill 3</option>
                                                </optgroup>
                                                <optgroup label="Knowledges">
                                                    <option value="@{Academics}">
                                                        Academics
                                                    </option>
                                                    <option value="@{Computer}">Computer</option>
                                                    <option value="@{Finance}">Finance</option>
                                                    <option value="@{Investigation}">
                                                        Investigation
                                                    </option>
                                                    <option value="@{Law}">Law</option>
                                                    <option value="@{Medicine}">Medicine</option>
                                                    <option value="@{Occult}">Occult</option>
                                                    <option value="@{Politics}">Politics</option>
                                                    <option value="@{Science}">Science</option>
                                                    <option value="@{Technology}">
                                                        Technology
                                                    </option>
                                                    <option value="@{Abi7}">
                                                        Expert Know. 1
                                                    </option>
                                                    <option value="@{Abi8}">
                                                        Expert Know. 2
                                                    </option>
                                                    <option value="@{Abi9}">
                                                        Expert Know. 3
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Other">
                                                    <option value={0}>None</option>
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td style={{width: "15%", textAlign: "center"}}>
                                            <select
                                                name="attr_combatdisciplineRoll"
                                                className="sheet-center-select"
                                            >
                                                <optgroup label="Disciplines">
                                                    <option value="@{Discipline1}">
                                                        Discipline 1
                                                    </option>
                                                    <option value="@{Discipline2}">
                                                        Discipline 2
                                                    </option>
                                                    <option value="@{Discipline3}">
                                                        Discipline 3
                                                    </option>
                                                    <option value="@{Discipline4}">
                                                        Discipline 4
                                                    </option>
                                                    <option value="@{Discipline5}">
                                                        Discipline 5
                                                    </option>
                                                    <option value="@{Discipline6}">
                                                        Discipline 6
                                                    </option>
                                                    <option value="@{Discipline7}">
                                                        Discipline 7
                                                    </option>
                                                </optgroup>
                                                <optgroup label="Other">
                                                    <option selected="selected" value={0}>
                                                        None
                                                    </option>
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td style={{width: "5%", textAlign: "center"}}>
                                            <input
                                                type="number"
                                                defaultValue={0}
                                                className="sheet-inputname"
                                                name="attr_combatmodNumber"
                                            />
                                        </td>
                                        <td style={{width: "10%", textAlign: "center"}}>
                                            <select
                                                name="attr_combatuseHealth"
                                                className="sheet-center-select"
                                            >
                                                <option value="@{Health}">Yes</option>
                                                <option value={0}>No</option>
                                            </select>
                                        </td>
                                        <td style={{width: "10%", textAlign: "center"}}>
                                            <input
                                                type="number"
                                                name="attr_combatDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                        </td>
                                        <td style={{width: "20%", textAlign: "center"}}>
                                            <div style={{display: "inline"}}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_combatRoll"
                                                    style={{fontSize: 12, width: 75}}
                                                    value="@{sendRollTo} @{Name} &{template:wod} {{name=@{Name}}} {{roll_name=@{combatrollTitle}}} {{attr=Attribute}} {{attr_num=@{combatattributeRoll}}} {{skill=Ability}} {{skill_num=@{combatabilityRoll}}} {{pwr=Discipline}} {{pwr_num=@{combatdisciplineRoll}}} {{mod_num=@{combatmodNumber}}} {{hp_mod=@{combatuseHealth}}} {{result=[[{(@{combatattributeRoll}+@{combatabilityRoll}+@{combatdisciplineRoll}+@{combatmodNumber}+@{combatuseHealth})d10sd}>@{combatDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHead>Custom Dice Pools</SectionHead>
                        <SectionBody>
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td style={{width: "35%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Name
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Dice
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Difficulty
                                        </h4>
                                    </td>
                                    <td style={{width: "10%", textAlign: "center"}}>
                                        <h4
                                            style={{
                                                width: "100%",
                                                textAlign: "center",
                                                fontSize: 10
                                            }}
                                        >
                                            Wound Penalties?
                                        </h4>
                                    </td>
                                    <td style={{width: "45%", textAlign: "center"}}>
                                        <h4 style={{width: "100%", textAlign: "center"}}>
                                            Roll
                                        </h4>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <fieldset
                                className="repeating_CustomDice"
                                name="attr_customdicesection"
                            >
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td style={{width: "35%"}}>
                                            <input
                                                type="text"
                                                name="attr_rollCustomDiceTitle"
                                                className="sheet-inputname"
                                                style={{width: "100%"}}
                                            />
                                        </td>
                                        <td style={{width: "10%"}}>
                                            <input
                                                type="number"
                                                name="attr_rollCustomDiceAmount"
                                                className="sheet-inputname"
                                                style={{width: "100%"}}
                                                defaultValue="0/"
                                            />
                                        </td>
                                        <td style={{width: "10%"}}>
                                            <input
                                                type="number"
                                                name="attr_rollCustomDifficulty"
                                                className="sheet-inputname"
                                                style={{width: "100%"}}
                                                defaultValue="6/"
                                            />
                                        </td>
                                        <td style={{width: "10%", textAlign: "center"}}>
                                            <select
                                                name="attr_customuseHealth"
                                                className="sheet-center-select"
                                            >
                                                <option value="@{Health}">Yes</option>
                                                <option value={0}>No</option>
                                            </select>
                                        </td>
                                        <td style={{width: "45%", textAlign: "center"}}>
                                            <div style={{display: "inline"}}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_customRoll"
                                                    style={{fontSize: 12}}
                                                    value="@{sendRollTo} @{Name} &{template:wod} {{name=@{Name}}} {{roll_name=@{rollCustomDiceTitle}}} {{attr=Dice Pool}} {{attr_num=@{rollCustomDiceAmount}}} {{hp_mod=@{customuseHealth}}} {{result=[[{(@{rollCustomDiceAmount}+@{customuseHealth})d10sd}>@{rollCustomDifficulty}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                            <input
                                type="number"
                                name="attr_StrengthScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_DexterityScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_StaminaScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_CharismaScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_ManipulationScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_AppearanceScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_PerceptionScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_IntelligenceScript"
                                style={{visibility: "collapse"}}
                            />
                            <input
                                type="number"
                                name="attr_WitsScript"
                                style={{visibility: "collapse"}}
                            />
                        </SectionBody>
                    </Section>
                </div>

                <template className="sheet-rolltemplate-wod">
                    <div className="regularContainer">
                        <div className="regularHeaderContainer">
                            {`{{name}} rolls{{#roll_name}}`}
                            {`{{roll_name}}{{/roll_name}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#attr}}`}
                            {`{{attr}}({{attr_num}})`}
                            {`{{/attr}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#attr1}}`}
                            {`{{attr1}}({{attr1_num}})`}
                            {`{{/attr1}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#attr2}}`}
                            {`+ {{attr2}}({{attr2_num}})`}
                            {`{{/attr2}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#skill}}`}
                            {`+ {{skill}}({{skill_num}})`}
                            {`{{/skill}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#pwr}}`}
                            {`+ {{pwr}}({{pwr_num}})`}
                            {`{{/pwr}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#mod_num}}`}
                            {`+ Modifiers({{mod_num}})`}
                            {`{{/mod_num}}`}
                        </div>
                        <div className="regularAttr">
                            {`{{#hp_mod}}`}
                            {`+ Wound({{hp_mod}})`}
                            {`{{/hp_mod}}`}
                        </div>
                        <div>
                            <div className="regularResult">
                                {`{{result}} Successes`}
                            </div>
                        </div>
                    </div>
                </template>
                <template className="sheet-rolltemplate-wodinitiative">
                    <div className="initiativeContainer">
                        <div className="initiativeHeader">
                            {`{{name}} rolls{{#roll_name}}`}
                            {`{{roll_name}}{{/roll_name}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#attr}}`}
                            {`{{attr}}({{attr_num}})`}
                            {`{{/attr}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#attr1}}`}
                            {`{{attr1}}({{attr1_num}})`}
                            {`{{/attr1}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#attr2}}`}
                            {`+ {{attr2}}({{attr2_num}})`}
                            {`{{/attr2}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#skill}}`}
                            {`+ {{skill}}({{skill_num}})`}
                            {`{{/skill}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#pwr}}`}
                            {`+ {{pwr}}({{pwr_num}})`}
                            {`{{/pwr}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#mod_num}}`}
                            {`+ Modifiers({{mod_num}})`}
                            {`{{/mod_num}}`}
                        </div>
                        <div className="initiativeAttr">
                            {`{{#hp_mod}}`}
                            {`+ Wound({{hp_mod}})`}
                            {`{{/hp_mod}}`}
                        </div>
                        <div>
                            <div className="initiativeResult">
                                {`{{result}} Initiative`}
                            </div>
                        </div>
                    </div>
                </template>
                <template className="sheet-rolltemplate-wodritual">
                    <div className="ritualcontainer">
                        <div className="ritualheader">
                            {`{{name}} casts {{#roll_name}}`}
                            {`{{roll_name}}{{/roll_name}}`}
                        </div>
                        <div className="rituallevel">
                            {`{{#rlevel}}`}
                            {`{{rlevel}} {{rlevel_num}}`}
                            {`{{/rlevel}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#attr}}`}
                            {`{{attr}}({{attr_num}})`}
                            {`{{/attr}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#attr1}}`}
                            {`{{attr1}}({{attr1_num}})`}
                            {`{{/attr1}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#attr2}}`}
                            {`+ {{attr2}}({{attr2_num}})`}
                            {`{{/attr2}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#skill}}`}
                            {`+ {{skill}}({{skill_num}})`}
                            {`{{/skill}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#pwr}}`}
                            {`+ {{pwr}}({{pwr_num}})`}
                            {`{{/pwr}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#mod_num}}`}
                            {`+ Modifiers({{mod_num}})`}
                            {`{{/mod_num}}`}
                        </div>
                        <div className="ritualattribute">
                            {`{{#hp_mod}}`}
                            {`+ Wound({{hp_mod}})`}
                            {`{{/hp_mod}}`}
                        </div>
                        <div className="ritualresult">{`{{result}} Successes`}</div>
                        <div className="ritualdescription">
                            {`{{#rdesc_text}}`}
                            {`{{rdesc_text}}`}
                            {`{{/rdesc_text}}`}
                        </div>
                        <div className="scrollbar">
                            <div className="ritualbookpage">
                                {`{{#rbp_text}}`}
                                {`{{rbp_text}}`}
                                {`{{/rbp_text}}`}

                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </SectionBody>
    </Section>

</div>
