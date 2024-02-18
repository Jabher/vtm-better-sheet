import "./imported/base.css"
import "./imported/charsheet.css"
import "./V20.css"

export const V20 = () => <>
    {/*suppress HtmlFormInputWithoutLabel, CheckEmptyScriptTag */}
    <div className="sheet-image-div-top">
        <div className="sheet-image-div">
            <div className="sheet-image-div-bottom">
                <div className="sheet-border-div">
                    <div className="sheet-main-div">
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabPrime"
                            defaultValue={1}
                            checked
                        />
                        <label className="sheet-tab" data-i18n="Primary">
                            Primary
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabBack"
                            defaultValue={2}
                        />
                        <label className="sheet-tab" data-i18n="backgrounds-u">
                            Backgrounds
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabMeritFlaws"
                            defaultValue={3}
                        />
                        <label className="sheet-tab" data-i18n="MeritsFlaws">
                            Merits &amp; Flaws
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabPowers"
                            defaultValue={4}
                        />
                        <label className="sheet-tab" data-i18n="Powers">
                            Powers
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabOtherTraits"
                            defaultValue={5}
                        />
                        <label className="sheet-tab" data-i18n="OtherTraits">
                            Other Traits
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabNotes"
                            defaultValue={6}
                        />
                        <label className="sheet-tab" data-i18n="notes-u">
                            Notes
                        </label>
                        <div style={{ height: 5 }} />
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabBBond"
                            defaultValue={7}
                        />
                        <label className="sheet-tab" data-i18n="BondBoon">
                            Bond &amp; Boon
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabSorcery"
                            defaultValue={8}
                        />
                        <label className="sheet-tab" data-i18n="BloodSorcery">
                            Blood Sorcery
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabInfo"
                            defaultValue={9}
                        />
                        <label className="sheet-tab" data-i18n="Information">
                            Information
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabExp"
                            defaultValue={10}
                        />
                        <label className="sheet-tab" data-i18n="experience-u">
                            Experience
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabCombat"
                            defaultValue={11}
                        />
                        <label className="sheet-tab" data-i18n="Combat">
                            Combat
                        </label>
                        <input
                            type="radio"
                            name="attr_sheet_type"
                            className="sheet-tab sheet-tabDice"
                            defaultValue={12}
                        />
                        <label className="sheet-tab" data-i18n="Dice">
                            Dice
                        </label>
                        <div style={{ height: 5 }} />
                        <br />
                        <div className="clear" />
                        {/* Primary Sheet */}
                        <div className="sheet-tab-content sheet-tabPrime">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="Primary">
                  Primary
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            {/* BASICS */}
                            <br />
                            <div className="sheet-all">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="name-u"
                                            >
                                                Name:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Name"
                                            />
                                        </td>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="nature-u"
                                            >
                                                Nature:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Nature"
                                            />
                                        </td>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="clan-u"
                                            >
                                                Clan:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Clan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="player-u"
                                            >
                                                Player:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Player"
                                            />
                                        </td>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="demeanor-u"
                                            >
                                                Demeanor:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Demeanor"
                                            />
                                        </td>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="sire-u"
                                            >
                                                Sire:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Sire"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="chronicle-u"
                                            >
                                                Chronicle:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Chronicle"
                                            />
                                        </td>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="concept-u"
                                            >
                                                Concept:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Concept"
                                            />
                                        </td>
                                        <td>
                                            <h3
                                                style={{
                                                    padding: "0 10px",
                                                    textAlign: "right",
                                                    fontSize: 16
                                                }}
                                                data-i18n="generation-u"
                                            >
                                                Generation:
                                            </h3>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="sheet-binput"
                                                name="attr_Generation"
                                            />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="attributes-u">
                  Attributes
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <div>
                                <div className="sheet-3colrow">
                                    <div className="sheet-col">
                                        <h3 style={{ textAlign: "center" }} data-i18n="physical-u">
                                            Physical
                                        </h3>
                                    </div>
                                    <div className="sheet-col">
                                        <h3 style={{ textAlign: "center" }} data-i18n="social-u">
                                            Social
                                        </h3>
                                    </div>
                                    <div className="sheet-col">
                                        <h3 style={{ textAlign: "center" }} data-i18n="mental-u">
                                            Mental
                                        </h3>
                                    </div>
                                </div>
                                <div className="sheet-colrow">
                                    <div className="sheet-col" style={{ width: "33%" }}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="strength-u">Strength</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select className="sheet-dots" name="attr_Strength">
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Strength_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="dexterity-u">Dexterity</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select
                                                        className="sheet-dots"
                                                        name="attr_Dexterity"
                                                    >
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Dexterity_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="stamina-u">Stamina</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select className="sheet-dots" name="attr_Stamina">
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Stamina_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="sheet-col" style={{ width: "33%" }}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="charisma-u">Charisma</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select className="sheet-dots" name="attr_Charisma">
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Charisma_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="manipulation-u">Manipulation</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select
                                                        className="sheet-dots"
                                                        name="attr_Manipulation"
                                                    >
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Manipulation_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="appearance-u">Appearance</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select
                                                        className="sheet-dots"
                                                        name="attr_Appearance"
                                                    >
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Appearance_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="sheet-col" style={{ width: "33%" }}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="perception-u">Perception</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select
                                                        className="sheet-dots"
                                                        name="attr_Perception"
                                                    >
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Perception_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="intelligence-u">Intelligence</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select
                                                        className="sheet-dots"
                                                        name="attr_Intelligence"
                                                    >
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Intelligence_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "30%" }}>
                                                    <h4 data-i18n="wits-u">Wits</h4>
                                                </td>
                                                <td style={{ width: "30%" }}>
                                                    <select className="sheet-dots" name="attr_Wits">
                                                        <option value={0}>0⚪⚪⚪⚪⚪</option>
                                                        <option value={1} selected="">
                                                            1⚫⚪⚪⚪⚪
                                                        </option>
                                                        <option value={2}>2⚫⚫⚪⚪⚪</option>
                                                        <option value={3}>3⚫⚫⚫⚪⚪</option>
                                                        <option value={4}>4⚫⚫⚫⚫⚪</option>
                                                        <option value={5}>5⚫⚫⚫⚫⚫</option>
                                                        <option value={6}>6⚫</option>
                                                        <option value={7}>7⚫</option>
                                                        <option value={8}>8⚫</option>
                                                        <option value={9}>9⚫</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "40%" }}>
                                                    <input
                                                        type="text"
                                                        name="attr_Wits_Spec"
                                                        className="sheet-spec"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="abilities-u">
                  Abilities
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <div>
                                <div className="sheet-3colrow">
                                    <div className="sheet-col">
                                        <h3 style={{ textAlign: "center" }} data-i18n="talents-u">
                                            Talents
                                        </h3>
                                    </div>
                                    <div className="sheet-col">
                                        <h3 style={{ textAlign: "center" }} data-i18n="skills-u">
                                            Skills
                                        </h3>
                                    </div>
                                    <div className="sheet-col">
                                        <h3
                                            style={{ textAlign: "center" }}
                                            data-i18n="knowledges-u"
                                        >
                                            Knowledges
                                        </h3>
                                    </div>
                                </div>
                                <div className="sheet-col" style={{ width: "33%" }}>
                                    <table style={{ width: "100%" }}>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="alertness-u">Alertness</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Alertness">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Alertness_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="athletics-u">Athletics</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Athletics">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Athletics_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="awareness-u">Awareness</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Awareness">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Awareness_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="brawl-u">Brawl</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Brawl">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Brawl_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="empathy-u">Empathy</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Empathy">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Empathy_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="expression-u">Expression</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Expression">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Expression_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="intimidation-u">Intimidation</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Intimidation"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Intimidation_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="leadership-u">Leadership</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Leadership">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Leadership_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="streetwise-u">Streetwise</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Streetwise">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Streetwise_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="subterfuge-u">Subterfuge</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Subterfuge">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Subterfuge_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi1_name"
                                                    className="sheet-inputname"
                                                    placeholder="Hobby Talent 1"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi1">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi1_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi2_name"
                                                    className="sheet-inputname"
                                                    placeholder="Hobby Talent 2"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi2">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi2_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi3_name"
                                                    className="sheet-inputname"
                                                    placeholder="Hobby Talent 3"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi3">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi3_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="sheet-col" style={{ width: "33%" }}>
                                    <table style={{ width: "100%" }}>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="animalken-u">Animal Ken</h4>
                                            </td>
                                            <td style={{ width: "35%" }}>
                                                <select className="sheet-dots" name="attr_AnimalKen">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "35%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_AnimalKen_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="crafts-u">Crafts</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Crafts">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Crafts_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="drive-u">Drive</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Drive">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Drive_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="etiquette-u">Etiquette</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Etiquette">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Etiquette_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="firearms-u">Firearms</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Firearms">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Firearms_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="larceny-u">Larceny</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Larceny">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Larceny_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="melee-u">Melee</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Melee">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Melee_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="performance-u">Performance</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Performance"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Performance_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="stealth-u">Stealth</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Stealth">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Stealth_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="survival-u">Survival</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Survival">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Survival_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi4_name"
                                                    className="sheet-inputname"
                                                    placeholder="Prof Skill 1"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi4">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi4_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi5_name"
                                                    className="sheet-inputname"
                                                    placeholder="Prof Skill 2"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi5">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi5_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi6_name"
                                                    className="sheet-inputname"
                                                    placeholder="Prof Skill 3"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi6">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi6_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="sheet-col" style={{ width: "33%" }}>
                                    <table style={{ width: "100%" }}>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="academics-u">Academics</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Academics">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Academics_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="computer-u">Computer</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Computer">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Computer_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="finance-u">Finance</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Finance">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Finance_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="investigation-u">Investigation</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Investigation"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Investigation_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="law-u">Law</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Law">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Law_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="medicine-u">Medicine</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Medicine">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Medicine_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="occult-u">Occult</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Occult">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Occult_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="politics-u">Politics</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Politics">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Politics_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="science-u">Science</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Science">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Science_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <h4 data-i18n="technology-u">Technology</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Technology">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Technology_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi7_name"
                                                    className="sheet-inputname"
                                                    placeholder="Expert Knowledge 1"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi7">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi7_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi8_name"
                                                    className="sheet-inputname"
                                                    placeholder="Expert Knowledge 2"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi8">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi8_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "30%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi9_name"
                                                    className="sheet-inputname"
                                                    placeholder="Expert Knowledge 3"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Abi9">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                            <td style={{ width: "40%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Abi9_Spec"
                                                    className="sheet-spec"
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="advantages-u">
                  Advantages
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <div>
                                <div className="sheet-3colrow">
                                    <div className="sheet-col">
                                        <h3
                                            style={{ textAlign: "center" }}
                                            data-i18n="disciplines-u"
                                        >
                                            Disciplines
                                        </h3>
                                    </div>
                                    <div className="sheet-col">
                                        <h3
                                            style={{ textAlign: "center" }}
                                            data-i18n="backgrounds-u"
                                        >
                                            Backgrounds
                                        </h3>
                                    </div>
                                    <div className="sheet-col">
                                        <h3 style={{ textAlign: "center" }} data-i18n="virtues-u">
                                            Virtues
                                        </h3>
                                    </div>
                                </div>
                                <div className="sheet-col" style={{ width: "33%" }}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline1Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 1"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline1"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline2Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 2"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline2"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline3Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 3"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline3"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline4Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 4"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline4"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline5Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 5"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline5"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline6Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 6"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline6"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Discipline7Name"
                                                    className="sheet-inputname"
                                                    placeholder="Discipline 7"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select
                                                    className="sheet-dots"
                                                    name="attr_Discipline7"
                                                >
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="sheet-col" style={{ width: "33%" }}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back1Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back1">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back2Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back2">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back3Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back3">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back4Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back4">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back5Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back5">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back6Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back6">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%" }}>
                                                <input
                                                    type="text"
                                                    name="attr_Back7Name"
                                                    className="sheet-inputname"
                                                />
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Back7">
                                                    <option value={0} selected="">
                                                        ⚪⚪⚪⚪⚪
                                                    </option>
                                                    <option value={1}>⚫⚪⚪⚪⚪</option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                    <option value={6}>⚫ 6</option>
                                                    <option value={7}>⚫ 7</option>
                                                    <option value={8}>⚫ 8</option>
                                                    <option value={9}>⚫ 9</option>
                                                    <option value={10}>⚫ 10</option>
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    className="sheet-col"
                                    style={{ width: "33%", height: "100%" }}
                                >
                                    <table style={{ height: 150 }}>
                                        <tbody>
                                        <tr>
                                            <td
                                                style={{ height: "14%", textAlign: "left" }}
                                                colSpan={2}
                                            />
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%", height: "14%" }}>
                                                <select
                                                    className="sheet-text-fronth2"
                                                    name="attr_virtueConsName"
                                                    style={{ width: 100, textAlign: "left" }}
                                                >
                                                    <option
                                                        value="Conscience"
                                                        selected=""
                                                        data-i18n="conscience-u"
                                                    >
                                                        Conscience
                                                    </option>
                                                    <option value="Conviction" data-i18n="conviction-u">
                                                        Conviction
                                                    </option>
                                                </select>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_C_C">
                                                    <option value={0}>⚪⚪⚪⚪⚪</option>
                                                    <option value={1} selected="">
                                                        ⚫⚪⚪⚪⚪
                                                    </option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: "14%", textAlign: "left" }} />
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%", height: "14%" }}>
                                                <select
                                                    className="sheet-text-fronth2"
                                                    name="attr_virtueSelfName"
                                                    style={{ width: 100 }}
                                                >
                                                    <option
                                                        value="Self-Control"
                                                        selected=""
                                                        data-i18n="selfcontrol-u"
                                                    >
                                                        Self-Control
                                                    </option>
                                                    <option value="Instinct" data-i18n="instinct-u">
                                                        Instinct
                                                    </option>
                                                </select>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_S_I">
                                                    <option value={0}>⚪⚪⚪⚪⚪</option>
                                                    <option value={1} selected="">
                                                        ⚫⚪⚪⚪⚪
                                                    </option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: "14%" }} />
                                        </tr>
                                        <tr>
                                            <td style={{ width: "70%", height: "14%" }}>
                                                <h4 data-i18n="courage-u">Courage</h4>
                                            </td>
                                            <td style={{ width: "30%" }}>
                                                <select className="sheet-dots" name="attr_Courage">
                                                    <option value={0}>⚪⚪⚪⚪⚪</option>
                                                    <option value={1} selected="">
                                                        ⚫⚪⚪⚪⚪
                                                    </option>
                                                    <option value={2}>⚫⚫⚪⚪⚪</option>
                                                    <option value={3}>⚫⚫⚫⚪⚪</option>
                                                    <option value={4}>⚫⚫⚫⚫⚪</option>
                                                    <option value={5}>⚫⚫⚫⚫⚫</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ height: "14%" }} />
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="sheet-line-behind" />
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <div
                                    className="sheet-col"
                                    style={{ width: "100%", textAlign: "center" }}
                                >
                  <span className="sheet-text-fronth3" data-i18n="pathsins-u">
                    Path Sins
                  </span>
                                </div>
                                <div className="sheet-line-behindh3" />
                                <div className="sheet-col" style={{ width: 260 }}>
                                    <h5>
                                        10
                                        <textarea
                                            type="text"
                                            name="attr_MoralPath10"
                                            style={{ width: 234, height: 36, verticalAlign: "top" }}
                                            defaultValue={
                                                '</h5>\n                                <h5>9 <textarea type="text" name="attr_MoralPath9"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>8 <textarea type="text" name="attr_MoralPath8"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>7 <textarea type="text" name="attr_MoralPath7"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>6 <textarea type="text" name="attr_MoralPath6"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>5 <textarea type="text" name="attr_MoralPath5"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>4 <textarea type="text" name="attr_MoralPath4"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>3 <textarea type="text" name="attr_MoralPath3"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>2 <textarea type="text" name="attr_MoralPath2"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                                <h5>1 <textarea type="text" name="attr_MoralPath1"\n                                                style="width:235px; height:36px; vertical-align:top"/></h5>\n                            </div>\n                        </div>\n\n\n                        <div class="sheet-col" style="width:33%" align="center">\n                            <div class="sheet-col" style="width:100%; text-align:center"><span\n                                    class="sheet-text-fronth3" data-i18n="humanitypath-u">Path</span></div>\n                            <div class="sheet-line-behindh3"></div>\n                            <div class="sheet-row">\n                                <input type="text" name="attr_PathoEname" style="width:80%"/>\n                            </div>\n                            <div class="sheet-row" align="center" style="margin-left:-15px">\n                                <input type="radio" name="attr_PathoE" value="0" class=" zero"/><span></span> <input\n                                    type="radio" name="attr_PathoE" value="1"/><span></span> <input type="radio"\n                                                                                                    name="attr_PathoE"\n                                                                                                    value="2"/><span></span>\n                                <input type="radio" name="attr_PathoE" value="3"/><span></span> <input type="radio"\n                                                                                                       name="attr_PathoE"\n                                                                                                       value="4"/><span></span>\n                                <input type="radio" name="attr_PathoE" value="5" checked/><span></span> <input\n                                    type="radio" name="attr_PathoE" value="6"/><span></span> <input type="radio"\n                                                                                                    name="attr_PathoE"\n                                                                                                    value="7"/><span></span>\n                                <input type="radio" name="attr_PathoE" value="8"/><span></span> <input type="radio"\n                                                                                                       name="attr_PathoE"\n                                                                                                       value="9"/><span></span>\n                                <input type="radio" name="attr_PathoE" value="10"/><span></span>\n                            </div>\n                            <div class="sheet-row" align="center">\n                                <h5 data-i18n="bearing-u">Bearing <input type="text" name="attr_Bearing"\n                                                                         style="width:90px"/> <input type="number"\n                                                                                                     name="attr_BearingMod"\n                                                                                                     style="width:45px"/>\n                                </h5>\n                            </div>\n                            <br>\n                            <div class="sheet-col" style="width:100%; text-align:center"><span\n                                    class="sheet-text-fronth3" data-i18n="willpower-u">Willpower</span></div>\n                            <div class="sheet-line-behindh3"></div>\n                            <div align="center"><input type="radio" name="attr_Willpower" value="1"/><span></span>\n                                <input type="radio" name="attr_Willpower" value="2"/><span></span> <input type="radio"\n                                                                                                          name="attr_Willpower"\n                                                                                                          value="3"/><span></span>\n                                <input type="radio" name="attr_Willpower" value="4"/><span></span> <input type="radio"\n                                                                                                          name="attr_Willpower"\n                                                                                                          value="5"\n                                                                                                          checked="checked"/><span></span>\n                                <input type="radio" name="attr_Willpower" value="6"/><span></span> <input type="radio"\n                                                                                                          name="attr_Willpower"\n                                                                                                          value="7"/><span></span>\n                                <input type="radio" name="attr_Willpower" value="8"/><span></span> <input type="radio"\n                                                                                                          name="attr_Willpower"\n                                                                                                          value="9"/><span></span>\n                                <input type="radio" name="attr_Willpower" value="10"/><span></span>\n                            </div>\n                            <div align="center" style="margin-left:-15px">\n                                <input type="radio" name="attr_Willpower_Used" value="0" class=" zero"\n                                       checked/><span></span> <input type="radio" name="attr_Willpower_Used" value="1"\n                                                                     class=" used"/><span></span> <input type="radio"\n                                                                                                         name="attr_Willpower_Used"\n                                                                                                         value="2"\n                                                                                                         class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="3" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="4" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="5" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="6" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="7" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="8" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="9" class=" used"/><span></span>\n                                <input type="radio" name="attr_Willpower_Used" value="10" class=" used"/><span></span>\n                            </div>\n                            <br><br>\n                            <div class="sheet-col" style="width:100%; text-align:center"><span\n                                    class="sheet-text-fronth3" data-i18n="bloodpool-u">Blood Pool</span></div>\n                            <div class="sheet-line-behindh3"></div>\n                            <div align="center" style="margin-left:-15px">\n                                <input type="radio" name="attr_BloodPool" value="0" class=" zero" checked/><span></span>\n                                <input type="radio" name="attr_BloodPool" value="1" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="2" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="3" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="4" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="5" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="6" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="7" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="8" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="9" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="10" class=" used"/><span></span><br>\n\n                                <input type="radio" name="attr_BloodPool" value="11" class=" used"\n                                       style="margin-left:5px"/><span></span> <input type="radio" name="attr_BloodPool"\n                                                                                     value="12"\n                                                                                     class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="13" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="14" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="15" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="16" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="17" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="18" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="19" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="20" class=" used"/><span></span><br>\n                                <input type="radio" name="attr_BloodPool" value="22" class=" used"\n                                       style="margin-left:5px"/><span></span> <input type="radio" name="attr_BloodPool"\n                                                                                     value="22"\n                                                                                     class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="23" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="24" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="25" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="26" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="27" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="28" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="29" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="30" class=" used"/><span></span><br>\n                                <input type="radio" name="attr_BloodPool" value="33" class=" used"\n                                       style="margin-left:5px"/><span></span> <input type="radio" name="attr_BloodPool"\n                                                                                     value="32"\n                                                                                     class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="33" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="34" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="35" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="36" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="37" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="38" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="39" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="40" class=" used"/><span></span><br>\n                                <input type="radio" name="attr_BloodPool" value="44" class=" used"\n                                       style="margin-left:5px"/><span></span> <input type="radio" name="attr_BloodPool"\n                                                                                     value="42"\n                                                                                     class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="43" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="44" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="45" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="46" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="47" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="48" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="49" class=" used"/><span></span> <input\n                                    type="radio" name="attr_BloodPool" value="50" class=" used"/><span></span><br>\n                            </div>\n                            <h5><span data-i18n="pointsperturn-u">Points Per Turn </span> <input type="number"\n                                                                                                 name="attr_BPPT"\n                                                                                                 style="width:45px"\n                                                                                                 value="1"/></h5>\n                            <h5><span data-i18n="maxblood-u"> Max Blood </span> <input type="number" name="attr_MAXPT"\n                                                                                       style="width:45px" value="10"/>\n                            </h5>\n                            <h5><span data-i18n="maxtrait-u"> Max Trait </span> <input type="number" name="attr_MAXTT"\n                                                                                       style="width:45px" value="5"/>\n                            </h5>\n\n                            <br>\n                            <div class="sheet-row">\n                                <div class="sheet-col" style="width:100%; text-align:center"><span\n                                        class="sheet-text-fronth3" data-i18n="experience-u">Experience</span></div>\n                                <div class="sheet-line-behindh3"></div>\n                            </div>\n                            <div class="sheet-row" align="center">\n                                <textarea name="attr_experience" style="width:90%; height:70px">'
                                            }
                                        />
                                    </h5>
                                </div>
                                <br />
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <div
                                    className="sheet-col"
                                    style={{ width: "100%", textAlign: "center" }}
                                >
                  <span className="sheet-text-fronth3" data-i18n="health-u">
                    Health
                  </span>
                                </div>
                                <div className="sheet-line-behindh3" />
                                <div style={{ paddingLeft: 10 }}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "50%", textAlign: "left" }}>
                                                <h4 data-i18n="extrabruised-u">Extra Bruised</h4>
                                            </td>
                                            <td style={{ width: 0 }}></td>
                                            <td style={{ width: 0 }}></td>
                                            <td
                                                style={{
                                                    width: "50%",
                                                    textAlign: "left",
                                                    paddingLeft: 14,
                                                    paddingRight: 14
                                                }}
                                            >
                                                <select
                                                    name="attr_BruisedExtra1"
                                                    className="sheet-extrahealthr1"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra2"
                                                    className="sheet-extrahealthr1"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra3"
                                                    className="sheet-extrahealthr1"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra4"
                                                    className="sheet-extrahealthr1"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                            <td
                                                style={{
                                                    width: "50%",
                                                    textAlign: "left",
                                                    paddingLeft: 9
                                                }}
                                            >
                                                <select
                                                    name="attr_BruisedExtra5"
                                                    className="sheet-extrahealthr2"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra6"
                                                    className="sheet-extrahealthr2"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra7"
                                                    className="sheet-extrahealthr2"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra8"
                                                    className="sheet-extrahealthr2"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                            <td
                                                style={{
                                                    width: "50%",
                                                    textAlign: "left",
                                                    paddingLeft: 14
                                                }}
                                            >
                                                <select
                                                    name="attr_BruisedExtra9"
                                                    className="sheet-extrahealthr3"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra10"
                                                    className="sheet-extrahealthr3"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra11"
                                                    className="sheet-extrahealthr3"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                                <select
                                                    name="attr_BruisedExtra12"
                                                    className="sheet-extrahealthr3"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="bruised-u">Bruised</h4>
                                            </td>
                                            <td style={{ width: "10%" }}></td>
                                            <td style={{ width: "11%" }}>
                                                <input
                                                    type="radio"
                                                    className="sheet-Hbut sheet-Hbut0"
                                                    name="attr_Health"
                                                    defaultValue={0}
                                                    defaultChecked=""
                                                />
                                                <span />
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                <select name="attr_Bruised" className="sheet-health">
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="hurt-u">Hurt</h4>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <b>-1</b>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <input
                                                    type="radio"
                                                    className="sheet-Hbut sheet-Hbut1"
                                                    name="attr_Health"
                                                    defaultValue={-1}
                                                />
                                                <span />
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                <select name="attr_Hurt" className="sheet-health">
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="injured-u">Injured</h4>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <b>-1</b>
                                            </td>
                                            <td style={{ width: "10%" }}></td>
                                            <td style={{ width: "20%" }}>
                                                <select name="attr_Injured" className="sheet-health">
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="wounded-u">Wounded</h4>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <b>-2</b>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <input
                                                    type="radio"
                                                    className="sheet-Hbut sheet-Hbut2"
                                                    name="attr_Health"
                                                    defaultValue={-2}
                                                />
                                                <span />
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                <select name="attr_Wounded" className="sheet-health">
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="mauled-u">Mauled</h4>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <b>-2</b>
                                            </td>
                                            <td style={{ width: "10%" }}></td>
                                            <td style={{ width: "20%" }}>
                                                <select name="attr_Mauled" className="sheet-health">
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="crippled-u">Crippled</h4>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <b>-5</b>
                                            </td>
                                            <td style={{ width: "10%" }}>
                                                <input
                                                    type="radio"
                                                    className="sheet-Hbut sheet-Hbut5"
                                                    name="attr_Health"
                                                    defaultValue={-5}
                                                />
                                                <span />
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                <select name="attr_Crippled" className="sheet-health">
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: "60%", textAlign: "left" }}>
                                                <h4 data-i18n="incapacitated-u">Incapacitated</h4>
                                            </td>
                                            <td style={{ width: "10%" }}></td>
                                            <td style={{ width: "10%" }}>
                                                <input
                                                    type="radio"
                                                    className="sheet-Hbut sheet-HbutI"
                                                    name="attr_Health"
                                                    defaultValue="[[-5]]"
                                                />
                                                <span />
                                            </td>
                                            <td style={{ width: "20%" }}>
                                                <select
                                                    name="attr_Incapacitated"
                                                    className="sheet-health"
                                                >
                                                    <option />
                                                    <option value="Bashing">/</option>
                                                    <option value="Lethal">X</option>
                                                    <option value="Aggravated">#</option>
                                                </select>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <div
                                    className="sheet-col"
                                    style={{ width: "100%", textAlign: "center" }}
                                >
                  <span className="sheet-text-fronth3" data-i18n="movement-u">
                    Movement
                  </span>
                                </div>
                                <div className="sheet-line-behindh3" />
                                <h5>
                                    <span data-i18n="dexspeed-u">Dex Speed </span>
                                    <input
                                        type="number"
                                        name="attr_Dexterity"
                                        style={{ width: 45 }}
                                        defaultValue={1}
                                        readOnly=""
                                    />
                                </h5>
                                <h5>
                                    <span data-i18n="dexboostspeed-u">Dex Boost Speed </span>
                                    <input
                                        type="number"
                                        name="attr_DexterityBoost"
                                        style={{ width: 45 }}
                                        defaultValue={0}
                                        readOnly=""
                                    />
                                </h5>
                                <h5>
                                    <span data-i18n="celerityspeed-u">Celerity Speed </span>
                                    <input
                                        type="number"
                                        name="attr_CeleritySpeed"
                                        style={{ width: 45 }}
                                        defaultValue={0}
                                    />
                                </h5>
                                <h5>
                                    <span data-i18n="miscspeed-u">Misc Speed </span>
                                    <input
                                        type="number"
                                        name="attr_MiscSpeed"
                                        style={{ width: 45 }}
                                        defaultValue={0}
                                    />
                                </h5>
                                <br />
                                <h5>
                                    <span data-i18n="walkspeed-u">Walk Speed </span>
                                    <input
                                        className="speedoutput"
                                        type="text"
                                        name="attr_WalkSpeed"
                                        defaultValue={7}
                                        disabled="true"
                                    />{" "}
                                    <span data-i18n="yardsmeters-u">Yards/Meters</span>
                                </h5>
                                <h5>
                                    <span data-i18n="jogspeed-u">Jog Speed </span>
                                    <input
                                        className="speedoutput"
                                        type="text"
                                        name="attr_JogSpeed"
                                        defaultValue="12+@{Dexterity}+@{DexterityBoost}+@{CeleritySpeed}+@{MiscSpeed}"
                                        disabled="true"
                                    />
                                    <span data-i18n="yardsmeters-u">Yards/Meters</span>
                                </h5>
                                <h5>
                                    <span data-i18n="runspeed-u">Run Speed </span>
                                    <input
                                        className="speedoutput"
                                        type="text"
                                        name="attr_RunSpeed"
                                        defaultValue="20+(3*@{Dexterity}+@{DexterityBoost}+@{CeleritySpeed}+@{MiscSpeed})"
                                        disabled="true"
                                    />
                                    <span data-i18n="yardsmeters-u">Yards/Meters</span>
                                </h5>
                                <br />
                                <div className="sheet-row">
                                    <div
                                        className="sheet-col"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                    <span className="sheet-text-fronth3" data-i18n="weakness-u">
                      Weakness
                    </span>
                                    </div>
                                    <div className="sheet-line-behindh3" />
                                </div>
                                <div className="sheet-row" align="center">
                  <textarea
                      name="attr_Weakness"
                      style={{ width: "95%", height: 70 }}
                      defaultValue={""}
                  />
                                </div>
                            </div>
                        </div>
                        {/* Combat */}
                        <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="meleeweapons-u">
                  Melee Weapons
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div>
                                <div className="sheet-col" style={{ width: "38%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="name2-u">
                                        Name
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "10%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="type-u">
                                        Type
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "9%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="minstr-u">
                                        Min Str.
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "8%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="damage-u">
                                        Damage
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "12%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="lethality-u">
                                        Lethality
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "8%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="conceal-u">
                                        Conceal
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "5%" }}></div>
                                <fieldset
                                    name="attr_repeating_MeleeWeapons"
                                    className="repeating_MeleeWeapons"
                                >
                                    <div className="sheet-col" style={{ width: "38%" }}>
                                        <input
                                            type="text"
                                            name="attr_MeleeWeaponName"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <input
                                            type="text"
                                            name="attr_MeleeWeaponType"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "9%" }}>
                                        <input
                                            type="number"
                                            name="attr_MeleeWeaponMinimumStrength"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "8%" }}>
                                        <input
                                            type="number"
                                            name="attr_MeleeWeaponDamage"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_MeleeWeaponLethality"
                                        >
                                            <option value={0} data-i18n="bashing-u">
                                                Bashing
                                            </option>
                                            <option value={2} selected="" data-i18n="lethal-u">
                                                Lethal
                                            </option>
                                            <option value={3} data-i18n="aggravated-u">
                                                Aggravated
                                            </option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: "8%" }}>
                                        <input
                                            type="text"
                                            name="attr_MeleeWeaponConceal"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_MeleeWeaponDescHide"
                                    />
                                    <span />
                                    <div className="sheet-body">
                                        <b>Notes:</b>
                                        <input
                                            type="text"
                                            name="attr_MeleeWeaponDesc"
                                            className="sheet-binput"
                                            style={{ width: "70%" }}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span
                    className="sheet-text-fronth1"
                    data-i18n="rangedweapons-u"
                >
                  Ranged Weapons
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <br />
                            <div>
                                <div className="sheet-col" style={{ width: "27%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="name2-u">
                                        Name
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="type-u">
                                        Type
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="minstr-u">
                                        Min Str.
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "8%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="damage-u">
                                        Damage
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "12%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="lethality-u">
                                        Lethality
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="range-u">
                                        Range
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="rate-u">
                                        Rate
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="clip-u">
                                        Clip
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "8%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="conceal-u">
                                        Conceal
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "5%" }}></div>
                                <fieldset
                                    name="attr_repeating_RangedWeapons"
                                    className="repeating_RangedWeapons"
                                >
                                    <div className="sheet-col" style={{ width: "27%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponName"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponType"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponMinimumStrength"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "8%" }}>
                                        <input
                                            type="number"
                                            name="attr_RangedWeaponDamage"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_RangedWeaponLethality"
                                        >
                                            <option value={0} data-i18n="bashing-u">
                                                Bashing
                                            </option>
                                            <option value={2} selected="" data-i18n="lethal-u">
                                                Lethal
                                            </option>
                                            <option value={3} data-i18n="aggravated-u">
                                                Aggravated
                                            </option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponRange"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponRate"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponClip"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "8%" }}>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponConceal"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_RangedWeaponDescHide"
                                    />
                                    <span />
                                    <div className="sheet-body">
                                        <b data-i18n="notes-u">Notes:</b>
                                        <input
                                            type="text"
                                            name="attr_RangedWeaponDesc"
                                            className="sheet-binput"
                                            style={{ width: "70%" }}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="armorshields-u">
                  Armor &amp; Shields
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <br />
                            <div>
                                <div className="sheet-col" style={{ width: "4%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="onq-u">
                                        On?
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "29%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="name2-u">
                                        Name
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "12%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="type-u">
                                        Type
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "12%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="class-u">
                                        Class
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="rating-u">
                                        Rating
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "7%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="penalty-u">
                                        Penalty
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "10%" }}>
                                    <h5 style={{ textAlign: "center" }} data-i18n="aggravatedq-u">
                                        Aggravated?
                                    </h5>
                                </div>
                                <div className="sheet-col" style={{ width: "5%" }}></div>
                                <fieldset
                                    name="attr_repeating_rangeadattacks"
                                    className="repeating_RangedAttacks"
                                >
                                    <div className="sheet-col" style={{ width: "4%" }}>
                                        <input
                                            type="checkbox"
                                            className="sheet-APIcheck"
                                            name="attr_WearingArmor"
                                        />
                                        <span />
                                    </div>
                                    <div className="sheet-col" style={{ width: "29%" }}>
                                        <input
                                            type="text"
                                            name="attr_ArmorName"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_ArmorType"
                                        >
                                            <option value={1} selected="" data-i18n="armor-u">
                                                Armor
                                            </option>
                                            <option value={2} data-i18n="shield-u">
                                                Shield
                                            </option>
                                            <option value={3} data-i18n="bodymod-u">
                                                Body Mod.
                                            </option>
                                            <option value={3} data-i18n="other-u">
                                                Other
                                            </option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <input
                                            type="text"
                                            name="attr_ArmorClass"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="number"
                                            name="attr_ArmorRating"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "7%" }}>
                                        <input
                                            type="number"
                                            name="attr_ArmorPenalty"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_ArmorAgainstAggravated"
                                        >
                                            <option value={0} selected="" data-i18n="no-u">
                                                No
                                            </option>
                                            <option value={1} data-i18n="yes-u">
                                                Yes
                                            </option>
                                        </select>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_ArmorDescHide"
                                    />
                                    <span />
                                    <div className="sheet-body">
                                        <b data-i18n="notes-u">Notes:</b>
                                        <input
                                            type="text"
                                            name="attr_ArmorDesc"
                                            className="sheet-binput"
                                            style={{ width: "70%" }}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="gear-u">
                  Gear
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "95%", height: "100%", textAlign: "center" }}
                            >
                <textarea
                    name="attr_gear"
                    className="sheet-gear"
                    defaultValue={""}
                />
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Vehicles</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <br />
                            <fieldset
                                name="attr_repeating_vehicles"
                                className="repeating_Vehicles"
                            >
                                <div>
                                    <div className="sheet-col" style={{ width: "20%" }}>
                                        <h5 style={{ textAlign: "center" }}>Vehicle</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <h5 style={{ textAlign: "center" }}>Type</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <h5 style={{ textAlign: "center" }}>Safe Speed</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <h5 style={{ textAlign: "center" }}>Max Speed</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <h5 style={{ textAlign: "center" }}>Maneuver</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <h5 style={{ textAlign: "center" }}>Passengers</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "5%" }}>
                                        <h5 style={{ textAlign: "center" }} data-i18n="notes-u">
                                            Notes
                                        </h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "20%" }}>
                                        <input
                                            type="text"
                                            name="attr_ArmorName"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_VehicleType"
                                        >
                                            <option selected="">Car</option>
                                            <option>Airplane</option>
                                            <option>Boat</option>
                                            <option>Motorcycle</option>
                                            <option>Truck</option>
                                            <option>Tank</option>
                                            <option>Semi</option>
                                            <option>Utility Vehicle</option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: "12%" }}>
                                        <input
                                            type="text"
                                            name="attr_SafeSpeed"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <input
                                            type="text"
                                            name="attr_MaxSpeed"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <input
                                            type="number"
                                            name="attr_Maneuver"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <input
                                            type="number"
                                            name="attr_Passengers"
                                            defaultValue={0}
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_VehicleDescHide"
                                    />
                                    <span />
                                    <div className="sheet-body">
                    <textarea
                        name="attr_VehicleDesc"
                        className="sheet-binput"
                        style={{ width: "70%", height: 150 }}
                        defaultValue={""}
                    />
                                    </div>
                                </div>
                            </fieldset>
                            <br />
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Havens</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <br />
                            <fieldset
                                name="attr_repeating_havens"
                                className="repeating_havens"
                            >
                                <div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "25%", paddingLeft: 39 }}
                                    >
                                        <h5 style={{ textAlign: "center" }}>Name</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <h5 style={{ textAlign: "center" }}>Luxury</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <h5 style={{ textAlign: "center" }}>Size</h5>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <h5 style={{ textAlign: "center" }}>Security</h5>
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "10%", paddingRight: 15 }}
                                    >
                                        <h5 style={{ textAlign: "center" }} data-i18n="notes-u">
                                            Notes
                                        </h5>
                                    </div>
                                    <br />
                                    <div className="sheet-col" style={{ width: "25%" }}>
                                        <input
                                            type="text"
                                            name="attr_HavenName"
                                            style={{ width: "100%" }}
                                            className="sheet-binput"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <select className="sheet-dots" name="attr_Luxuryrating">
                                            <option value={0} selected="">
                                                ⚪⚪⚪⚪⚪
                                            </option>
                                            <option value={1}>⚫⚪⚪⚪⚪</option>
                                            <option value={2}>⚫⚫⚪⚪⚪</option>
                                            <option value={3}>⚫⚫⚫⚪⚪</option>
                                            <option value={4}>⚫⚫⚫⚫⚪</option>
                                            <option value={5}>⚫⚫⚫⚫⚫</option>
                                            <option value={6}>⚫ 6</option>
                                            <option value={7}>⚫ 7</option>
                                            <option value={8}>⚫ 8</option>
                                            <option value={9}>⚫ 9</option>
                                            <option value={10}>⚫ 10</option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <select className="sheet-dots" name="attr_Sizerating">
                                            <option value={0} selected="">
                                                ⚪⚪⚪⚪⚪
                                            </option>
                                            <option value={1}>⚫⚪⚪⚪⚪</option>
                                            <option value={2}>⚫⚫⚪⚪⚪</option>
                                            <option value={3}>⚫⚫⚫⚪⚪</option>
                                            <option value={4}>⚫⚫⚫⚫⚪</option>
                                            <option value={5}>⚫⚫⚫⚫⚫</option>
                                            <option value={6}>⚫ 6</option>
                                            <option value={7}>⚫ 7</option>
                                            <option value={8}>⚫ 8</option>
                                            <option value={9}>⚫ 9</option>
                                            <option value={10}>⚫ 10</option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: "10%" }}>
                                        <select className="sheet-dots" name="attr_Securityrating">
                                            <option value={0} selected="">
                                                ⚪⚪⚪⚪⚪
                                            </option>
                                            <option value={1}>⚫⚪⚪⚪⚪</option>
                                            <option value={2}>⚫⚫⚪⚪⚪</option>
                                            <option value={3}>⚫⚫⚫⚪⚪</option>
                                            <option value={4}>⚫⚫⚫⚫⚪</option>
                                            <option value={5}>⚫⚫⚫⚫⚫</option>
                                            <option value={6}>⚫ 6</option>
                                            <option value={7}>⚫ 7</option>
                                            <option value={8}>⚫ 8</option>
                                            <option value={9}>⚫ 9</option>
                                            <option value={10}>⚫ 10</option>
                                        </select>
                                    </div>
                                    <b />
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_HavenDescHide"
                                    />
                                    <span />
                                    <div className="sheet-body">
                    <textarea
                        name="attr_HavenDesc"
                        className="sheet-binput"
                        style={{ width: "70%", height: 150 }}
                        defaultValue={""}
                    />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {/* Notes */}
                        <div className="sheet-colrow sheet-tab-content sheet-tabNotes">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1" data-i18n="notes-u">
                  Notes
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ width: "98%", height: "100%" }}>
                <textarea
                    name="attr_othernotes"
                    className="sheet-gear"
                    defaultValue={""}
                />
                            </div>
                            <br />
                        </div>
                        {/*Expanded Backgrounds*/}
                        <div className="sheet-tab-content sheet-tabBack">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Backgrounds</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <div className="sheet-col" style={{ width: "20%" }}>
                                <h3 style={{ textAlign: "center" }}>Send Rolls to</h3>
                                <select
                                    className="sheet-center-dots"
                                    name="attr_sendRollTo"
                                    style={{ width: 130, textAlign: "center" }}
                                >
                                    <option value="" selected="">
                                        Public
                                    </option>
                                    <option value="/w ?{Whisper to who?}">Private</option>
                                    <option value="/w gm">ST</option>
                                    <option value="/w @{Name}">Myself</option>
                                </select>
                            </div>
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "center" }}>Name</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "right" }}>Rating</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "center" }}>Difficulty</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "left" }}>Roll</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset
                                    className="repeating_Backs"
                                    name="attr_repeating_Backs"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <input type="text" name="attr_ebackname" />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_ebackrating"
                                        >
                                            <option value={0} selected="">
                                                0⚪
                                            </option>
                                            <option value={1}>1⚫</option>
                                            <option value={2}>2⚫</option>
                                            <option value={3}>3⚫</option>
                                            <option value={4}>4⚫</option>
                                            <option value={5}>5⚫</option>
                                            <option value={6}>6⚫</option>
                                            <option value={7}>7⚫</option>
                                            <option value={8}>8⚫</option>
                                            <option value={9}>9⚫</option>
                                            <option value={10}>10⚫</option>
                                        </select>
                                    </div>
                                    <input
                                        type="number"
                                        name="attr_ebackgrounddiff"
                                        className="sheet-inputname"
                                        defaultValue={6}
                                    />
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <button
                                            className="sheet-custom-button sheet-vampire-button"
                                            type="roll"
                                            name="roll_backgroundRatingMySelf"
                                            style={{ fontSize: 12, width: 75 }}
                                            value="@{sendRollTo} @{Name} &{template:wod} {{name=@{Name}}} {{roll_name=@{ebackname}}} {{attr=@{ebackname}}} {{attr_num=@{ebackrating}}} {{result=[[{(@{ebackrating})d10}>@{ebackgrounddiff}f1]]}} "
                                        >
                                            Roll
                                        </button>
                                    </div>
                                    <br />
                                    <div className="sheet-col" style={{ width: "20%" }}>
                                        <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_BackgroundDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_ebackdesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                        </div>
                        {/*Info & History*/}
                        <div className="sheet-tab-content sheet-tabInfo">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Description</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div className="sheet-col" style={{ width: "100%" }}>
                                <div className="sheet-col">
                                    <div align="right" className="sheet-col">
                                        <h4>Age:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Apparent Age:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Place of Birth:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Date of Birth:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>R.I.P.:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Hair:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Eyes:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Race:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Nationality:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Height:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Weight:</h4>
                                        <h4 style={{ margin: "10px 0 0 0" }}>Sex:</h4>
                                    </div>
                                    <div className="sheet-col" style={{ width: 100 }}>
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_AgeDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_ApparentAgeDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_PlaceDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_DateDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_RIPDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_HairDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_EyesDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_RaceDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_NationalityDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_HeightDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_WeightDesc"
                                        />
                                        <br />
                                        <input
                                            type="text"
                                            className="sheet-descbinput"
                                            name="attr_SexDesc"
                                        />
                                    </div>
                                </div>
                                <div className="sheet-col">
                  <textarea
                      name="attr_descriptionChar"
                      style={{ width: 500, height: 200 }}
                      defaultValue={""}
                  />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">History</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ width: "98%", height: "100%" }}>
                <textarea
                    name="attr_history"
                    className="sheet-gear"
                    defaultValue={""}
                />
                            </div>
                            <br />
                        </div>
                        {/*Blood Bonds & Boons*/}
                        <div className="sheet-tab-content sheet-tabBBond">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Blood Bonds</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 230 }}>
                                    <h4 style={{ textAlign: "center" }}>Who</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 120 }}>
                                    <h4 style={{ textAlign: "center" }}>To Target</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 120 }}>
                                    <h4 style={{ textAlign: "center" }}>To Me</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 30 }}>
                                    <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset className="repeating_Bonds" name="attr_bondssection">
                                    <div className="sheet-col" style={{ width: 230 }}>
                                        <input
                                            type="text"
                                            name="attr_boundToName"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 120 }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_ratingBond"
                                        >
                                            <option value={0} style={{ color: "Black" }} selected="">
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
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: 120 }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_reverseRatingBond"
                                        >
                                            <option value={0} style={{ color: "Black" }} selected="">
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
                                        </select>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_BloodBondDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_bounddesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Vinculums</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 230 }}>
                                    <h4 style={{ textAlign: "center" }}>Who</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 120 }}>
                                    <h4 style={{ textAlign: "center" }}>To Target</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 120 }}>
                                    <h4 style={{ textAlign: "center" }}>To Me</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 30 }}>
                                    <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset className="repeating_Vincs" name="attr_vincssection">
                                    <div className="sheet-col" style={{ width: 230 }}>
                                        <input
                                            type="text"
                                            name="attr_vincToName"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 120 }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_ratingVinc"
                                        >
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
                                    <div className="sheet-col" style={{ width: 120 }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_reverseRatingVinc"
                                        >
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
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_VincDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_vincbounddesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Boons</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 160 }}>
                                    <h4 style={{ textAlign: "center" }}>Debtor</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 160 }}>
                                    <h4 style={{ textAlign: "center" }}>To Who</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Type</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 30 }}>
                                    <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset className="repeating_Boons" name="attr_boonssection">
                                    <div className="sheet-col" style={{ width: 160 }}>
                                        <input
                                            type="text"
                                            name="attr_boonDebtorName"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 160 }}>
                                        <input
                                            type="text"
                                            name="attr_boonToName"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <select
                                            className="sheet-center-select"
                                            name="attr_ratingBoon"
                                            style={{ height: 25 }}
                                        >
                                            <option value={1} selected="">
                                                Trival
                                            </option>
                                            <option value={2}>Minor</option>
                                            <option value={3}>Major</option>
                                            <option value={4}>Life</option>
                                            <option value={0} selected="">
                                                Unknown
                                            </option>
                                        </select>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_BoonDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_boondesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                        </div>
                        {/*Blood Sorcery*/}
                        <div className="sheet-tab-content sheet-tabSorcery">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Blood Sorcery</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <div className="sheet-col" style={{ width: "20%" }}>
                                <h3 style={{ textAlign: "center" }}>Send Rolls to</h3>
                                <select
                                    className="sheet-center-dots"
                                    name="attr_sendRollTo"
                                    style={{ width: 130, textAlign: "center" }}
                                >
                                    <option value="" selected="">
                                        Public
                                    </option>
                                    <option value="/w ?{Whisper to who?}">Private</option>
                                    <option value="/w gm">ST</option>
                                    <option value="/w @{Name}">Myself</option>
                                </select>
                            </div>
                            <br />
                            <br />
                            <table>
                                <tbody>
                                <tr>
                                    <td style={{ width: "70%", textAlign: "center" }}>
                                        <input
                                            type="text"
                                            name="attr_BloodSorcery1_name"
                                            className="sheet-othertraitname"
                                            placeholder="Sorcery Name"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="sheet-dots"
                                            name="attr_BloodSorceryRating1"
                                        >
                                            <option value={1}>1⚫⚪⚪⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={2}>2⚫⚫⚪⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={3}>3⚫⚫⚫⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={4}>4⚫⚫⚫⚫⚪⚪⚪⚪⚪⚪</option>
                                            <option value={5}>5⚫⚫⚫⚫⚫⚪⚪⚪⚪⚪</option>
                                            <option value={6}>6⚫⚫⚫⚫⚫⚫⚪⚪⚪⚪</option>
                                            <option value={7}>7⚫⚫⚫⚫⚫⚫⚫⚪⚪⚪</option>
                                            <option value={8}>8⚫⚫⚫⚫⚫⚫⚫⚫⚪⚪</option>
                                            <option value={9}>9⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪</option>
                                            <option value={10}>10⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br />
                            <table>
                                <tbody>
                                <tr>
                                    <td style={{ width: "70%", textAlign: "center" }}>
                                        <input
                                            type="text"
                                            name="attr_BloodSorcery2_name"
                                            className="sheet-othertraitname"
                                            placeholder="Sorcery Name"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="sheet-dots"
                                            name="attr_BloodSorceryRating2"
                                        >
                                            <option value={1}>1⚫⚪⚪⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={2}>2⚫⚫⚪⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={3}>3⚫⚫⚫⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={4}>4⚫⚫⚫⚫⚪⚪⚪⚪⚪⚪</option>
                                            <option value={5}>5⚫⚫⚫⚫⚫⚪⚪⚪⚪⚪</option>
                                            <option value={6}>6⚫⚫⚫⚫⚫⚫⚪⚪⚪⚪</option>
                                            <option value={7}>7⚫⚫⚫⚫⚫⚫⚫⚪⚪⚪</option>
                                            <option value={8}>8⚫⚫⚫⚫⚫⚫⚫⚫⚪⚪</option>
                                            <option value={9}>9⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪</option>
                                            <option value={10}>10⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br />
                            <table>
                                <tbody>
                                <tr>
                                    <td style={{ width: "70%", textAlign: "center" }}>
                                        <input
                                            type="text"
                                            name="attr_BloodSorcery3_name"
                                            className="sheet-othertraitname"
                                            placeholder="Sorcery Name"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="sheet-dots"
                                            name="attr_BloodSorceryRating3"
                                        >
                                            <option value={1}>1⚫⚪⚪⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={2}>2⚫⚫⚪⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={3}>3⚫⚫⚫⚪⚪⚪⚪⚪⚪⚪</option>
                                            <option value={4}>4⚫⚫⚫⚫⚪⚪⚪⚪⚪⚪</option>
                                            <option value={5}>5⚫⚫⚫⚫⚫⚪⚪⚪⚪⚪</option>
                                            <option value={6}>6⚫⚫⚫⚫⚫⚫⚪⚪⚪⚪</option>
                                            <option value={7}>7⚫⚫⚫⚫⚫⚫⚫⚪⚪⚪</option>
                                            <option value={8}>8⚫⚫⚫⚫⚫⚫⚫⚫⚪⚪</option>
                                            <option value={9}>9⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪</option>
                                            <option value={10}>10⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Paths</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path1_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%", textAlign: "center" }}>
                                            <select className="sheet-dots" name="attr_Path1">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path2_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%", textAlign: "center" }}>
                                            <select className="sheet-dots" name="attr_Path2">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%", textAlign: "center" }}>
                                            <input
                                                type="text"
                                                name="attr_Path3_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path3">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path4_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path4">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path5_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path5">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path6_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path6">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path7_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path7">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path8_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path8">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path9_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path9">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path10_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path10">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path11_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%", textAlign: "center" }}>
                                            <select className="sheet-dots" name="attr_Path11">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "60%" }}>
                                            <input
                                                type="text"
                                                name="attr_Path12_name"
                                                className="sheet-othertraitname"
                                                placeholder="Path Name"
                                            />
                                        </td>
                                        <td style={{ width: "20%" }}>
                                            <select className="sheet-dots" name="attr_Path12">
                                                <option value={1}>1⚫</option>
                                                <option value={2}>2⚫</option>
                                                <option value={3}>3⚫</option>
                                                <option value={4}>4⚫</option>
                                                <option value={5}>5⚫</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Rituals</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 50 }}>
                                    <h4 style={{ textAlign: "center" }}>Level</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Name</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Attribute/Willpower</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Ability</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 50 }}>
                                    <h4 style={{ textAlign: "center" }}>Difficulty</h4>
                                </div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <fieldset
                                    className="repeating_Rituals"
                                    name="attr_ritualssection"
                                >
                                    <div className="sheet-col" style={{ width: 50 }}>
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_rituallevel"
                                        >
                                            <option value={1}>1⚫</option>
                                            <option value={2}>2⚫</option>
                                            <option value={3}>3⚫</option>
                                            <option value={4}>4⚫</option>
                                            <option value={5}>5⚫</option>
                                            <option value={6}>6⚫</option>
                                            <option value={7}>7⚫</option>
                                            <option value={8}>8⚫</option>
                                            <option value={9}>9⚫</option>
                                            <option value={10}>10⚫</option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <input
                                            type="text"
                                            name="attr_ritualname"
                                            style={{ width: "100%" }}
                                            placeholder="Ritual Name"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <select
                                            name="attr_ritualAW"
                                            className="sheet-center-select"
                                        >
                                            <optgroup label="Physical">
                                                <option value="@{Strength}+@{StrengthBoost}">
                                                    Strength
                                                </option>
                                                <option
                                                    value="@{Dexterity}+@{DexterityBoost}"
                                                    selected=""
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
                                                <option value="@{Wits}+@{WitsBoost}">Wits</option>
                                            </optgroup>
                                            <optgroup label="Willpower">
                                                <option value="@{Willpower}" selected="">
                                                    Perm. Willpower
                                                </option>
                                                <option value="@{Willpower_Used}">
                                                    Temp. Willpower
                                                </option>
                                            </optgroup>
                                            <optgroup label="Other">
                                                <option value={0}>None</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <select
                                            name="attr_ritualAbility"
                                            className="sheet-center-select"
                                        >
                                            <optgroup label="Talents">
                                                <option value="@{Alertness}">Alertness</option>
                                                <option value="@{Athletics}">Athletics</option>
                                                <option value="@{Awareness}">Awareness</option>
                                                <option value="@{Brawl}">Brawl</option>
                                                <option value="@{Empathy}">Empathy</option>
                                                <option value="@{Expression}">Expression</option>
                                                <option value="@{Intimidation}">Intimidation</option>
                                                <option value="@{Leadership}">Leadership</option>
                                                <option value="@{Streetwise}">Streetwise</option>
                                                <option value="@{Subterfuge}">Subterfuge</option>
                                                <option value="@{Abi1}">Hobby Talent 1</option>
                                                <option value="@{Abi2}">Hobby Talent 2</option>
                                                <option value="@{Abi3}">Hobby Talent 3</option>
                                            </optgroup>
                                            <optgroup label="Skills">
                                                <option value="@{AnimalKen}">AnimalKen</option>
                                                <option value="@{Crafts}">Crafts</option>
                                                <option value="@{Drive}">Drive</option>
                                                <option value="@{Etiquette}">Etiquette</option>
                                                <option value="@{Firearms}">Firearms</option>
                                                <option value="@{Larceny}">Larceny</option>
                                                <option value="@{Melee}">Melee</option>
                                                <option value="@{Performance}">Performance</option>
                                                <option value="@{Stealth}">Stealth</option>
                                                <option value="@{Survival}">Survival</option>
                                                <option value="@{Abi4}">Prof. Skill 1</option>
                                                <option value="@{Abi5}">Prof. Skill 2</option>
                                                <option value="@{Abi6}">Prof. Skill 3</option>
                                            </optgroup>
                                            <optgroup label="Knowledges">
                                                <option value="@{Academics}">Academics</option>
                                                <option value="@{Computer}">Computer</option>
                                                <option value="@{Finance}">Finance</option>
                                                <option value="@{Investigation}">Investigation</option>
                                                <option value="@{Law}">Law</option>
                                                <option value="@{Medicine}">Medicine</option>
                                                <option value="@{Occult}">Occult</option>
                                                <option value="@{Politics}">Politics</option>
                                                <option value="@{Science}">Science</option>
                                                <option value="@{Technology}">Technology</option>
                                                <option value="@{Abi7}">Expert Know. 1</option>
                                                <option value="@{Abi8}">Expert Know. 2</option>
                                                <option value="@{Abi9}">Expert Know. 3</option>
                                            </optgroup>
                                            <optgroup label="Other">
                                                <option value={0} selected="">
                                                    None
                                                </option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: 50 }}>
                                        <input
                                            type="number"
                                            name="attr_ritualDiff"
                                            style={{ width: "100%" }}
                                            defaultValue={6}
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <div className="sheet-col" style={{ width: 150 }}>
                                            <h4 style={{ textAlign: "center" }}>Book and Page</h4>
                                        </div>
                                        <div className="sheet-col" style={{ width: 100 }}>
                                            <h4 style={{ textAlign: "center", fontSize: 10 }}>
                                                Wound Penalties?
                                            </h4>
                                        </div>
                                        <div className="sheet-col" style={{ width: 100 }}>
                                            <h4 style={{ textAlign: "center" }}>Roll</h4>
                                        </div>
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <input
                                            type="text"
                                            name="attr_ritualBookandPage"
                                            style={{ width: "100%" }}
                                            placeholder="Book and Page"
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 100 }}>
                                        <select
                                            name="attr_ritualuseHealth"
                                            className="sheet-center-select"
                                        >
                                            <option value="@{Health}" selected="">
                                                Yes
                                            </option>
                                            <option value={0}>No</option>
                                        </select>
                                    </div>
                                    <div style={{ display: "inline" }}>
                                        <button
                                            className="sheet-custom-button sheet-vampire-button"
                                            type="roll"
                                            name="roll_ritualRoll"
                                            style={{ fontSize: 12, width: 75 }}
                                            value="@{sendRollTo} @{Name} &{template:wodritual} {{name=@{Name}}} {{roll_name=@{ritualname}}} {{rlevel=Ritual Level}} {{rlevel_num=@{rituallevel}}} {{attr=Attribute}} {{attr_num=@{ritualAW}}} {{skill=Ability}} {{skill_num=@{ritualAbility}}} {{hp_mod=@{ritualuseHealth}}} {{result=[[{(@{ritualAW}+@{ritualAbility}+@{ritualuseHealth})d10sd}>@{ritualDiff}f1]]}} {{rdesc_text=@{ritualdesc}}} {{rbp=}} {{rbp_text=@{ritualBookandPage}}}"
                                        >
                                            Roll
                                        </button>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="sheet-col" style={{ width: 30 }}>
                                            <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                        </div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_RitualDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_ritualdesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <br />
                        </div>
                        {/*Traits*/}
                        <div className="sheet-tab-content sheet-tabOtherTraits">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Secondary Abilities</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary1_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 1"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary1">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary2_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 2"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary2">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary3_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 3"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary3">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary4_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 4"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary4">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary5_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 5"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary5">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary6_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 6"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary6">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary7_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 7"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary7">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary8_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 8"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary8">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary9_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 9"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary9">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary10_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 10"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary10">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary11_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 11"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary11">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary12_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 12"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary12">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary13_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 13"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary13">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary14_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 14"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary14">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Secondary15_name"
                                                className="sheet-othertraitname"
                                                placeholder="Secondary 15"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Secondary15">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Other Traits</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other1_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 1"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other1">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other2_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 2"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other2">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other3_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 3"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other3">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other4_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 4"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other4">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other5_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 5"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other5">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other6_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 6"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other6">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other7_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 7"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other7">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other8_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 8"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other8">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other9_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 9"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other9">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other10_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 10"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other10">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sheet-col" style={{ width: "33%" }}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other11_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 11"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other11">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other12_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 12"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other12">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other13_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 13"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other13">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other14_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 14"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other14">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70%" }}>
                                            <input
                                                type="text"
                                                name="attr_Other15_name"
                                                className="sheet-othertraitname"
                                                placeholder="Other 15"
                                            />
                                        </td>
                                        <td style={{ width: "30%" }}>
                                            <select className="sheet-dots" name="attr_Other15">
                                                <option value={0} selected="">
                                                    ⚪⚪⚪⚪⚪
                                                </option>
                                                <option value={1}>⚫⚪⚪⚪⚪</option>
                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                <option value={6}>⚫ 6</option>
                                                <option value={7}>⚫ 7</option>
                                                <option value={8}>⚫ 8</option>
                                                <option value={9}>⚫ 9</option>
                                            </select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <br />
                        </div>
                        {/*Merits&Flaws*/}
                        <div className="sheet-tab-content sheet-tabMeritFlaws">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Merits</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 220 }}>
                                    <h4 style={{ textAlign: "center" }}>Name</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 100 }}>
                                    <h4 style={{ textAlign: "center" }}>Points</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Type</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 30 }}>
                                    <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset
                                    className="repeating_Merits"
                                    name="attr_meritssection"
                                >
                                    <div className="sheet-col" style={{ width: 220 }}>
                                        <input
                                            type="text"
                                            name="attr_meritname"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 100 }}>
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_meritpoints"
                                        >
                                            <option value={1} selected="">
                                                ⚫⚪⚪⚪⚪⚪⚪
                                            </option>
                                            <option value={2}>⚫⚫⚪⚪⚪⚪⚪</option>
                                            <option value={3}>⚫⚫⚫⚪⚪⚪⚪</option>
                                            <option value={4}>⚫⚫⚫⚫⚪⚪⚪</option>
                                            <option value={5}>⚫⚫⚫⚫⚫⚪⚪</option>
                                            <option value={6}>⚫⚫⚫⚫⚫⚫⚪</option>
                                            <option value={7}>⚫⚫⚫⚫⚫⚫⚫</option>
                                            <option value={0}>Unknown</option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <input
                                            type="text"
                                            name="attr_merittype"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_MeritsDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_meritdesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Flaws</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 220 }}>
                                    <h4 style={{ textAlign: "center" }}>Name</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 100 }}>
                                    <h4 style={{ textAlign: "center" }}>Points</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Type</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 30 }}>
                                    <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset className="repeating_Flaws" name="attr_flawsection">
                                    <div className="sheet-col" style={{ width: 220 }}>
                                        <input
                                            type="text"
                                            name="attr_flawname"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="sheet-col" style={{ width: 100 }}>
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_flawpoints"
                                        >
                                            <option value={1} selected="">
                                                ⚫⚪⚪⚪⚪⚪⚪
                                            </option>
                                            <option value={2}>⚫⚫⚪⚪⚪⚪⚪</option>
                                            <option value={3}>⚫⚫⚫⚪⚪⚪⚪</option>
                                            <option value={4}>⚫⚫⚫⚫⚪⚪⚪</option>
                                            <option value={5}>⚫⚫⚫⚫⚫⚪⚪</option>
                                            <option value={6}>⚫⚫⚫⚫⚫⚫⚪</option>
                                            <option value={7}>⚫⚫⚫⚫⚫⚫⚫</option>
                                            <option value={0}>Unknown</option>
                                        </select>
                                    </div>
                                    <div className="sheet-col" style={{ width: 150 }}>
                                        <input
                                            type="text"
                                            name="attr_flawtype"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_FlawsDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_flawdesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                        </div>
                        {/*Powers*/}
                        <div className="sheet-tab-content sheet-tabPowers">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Discipline Powers</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: 200 }}>
                                    <h4 style={{ textAlign: "center" }}>Discipline</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 150 }}>
                                    <h4 style={{ textAlign: "center" }}>Power</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 130 }}>
                                    <h4 style={{ textAlign: "center" }}>Level</h4>
                                </div>
                                <div className="sheet-col" style={{ width: 30 }}>
                                    <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset
                                    className="repeating_powers"
                                    name="attr_repeating_powers"
                                >
                                    <div
                                        className="sheet-col"
                                        style={{ width: 200, textAlign: "center" }}
                                    >
                                        <input
                                            type="text"
                                            name="attr_SetDisciplineName"
                                            placeholder="Discipline Name"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: 150, textAlign: "center" }}
                                    >
                                        <input
                                            type="text"
                                            name="attr_SetDisciplinePower"
                                            placeholder="Power Name"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: 130, textAlign: "center" }}
                                    >
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_SetDisciplineLevel"
                                        >
                                            <option value={1}>1⚫</option>
                                            <option value={2}>2⚫</option>
                                            <option value={3}>3⚫</option>
                                            <option value={4}>4⚫</option>
                                            <option value={5}>5⚫</option>
                                            <option value={6}>6⚫</option>
                                            <option value={7}>7⚫</option>
                                            <option value={8}>8⚫</option>
                                            <option value={9}>9⚫</option>
                                            <option value={10}>10⚫</option>
                                        </select>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="sheet-arrow"
                                        name="attr_SetDisciplinePowerDescHide"
                                    />
                                    <span />
                                    <br />
                                    <div className="sheet-body">
                                        <div
                                            className="sheet-col"
                                            style={{ textAlign: "center", width: "98%" }}
                                        >
                      <textarea
                          name="attr_SetDisciplinePowerDesc"
                          style={{ width: "80%", height: 100 }}
                          defaultValue={""}
                      />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <br />
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                <span className="sheet-text-fronth1">
                  Combination Disciplines
                </span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "center" }}>Name</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "center" }}>Discipline 1</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "5%" }}>
                                    <h4 style={{ textAlign: "center" }}>Level</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "center" }}>Discipline 2</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "5%" }}>
                                    <h4 style={{ textAlign: "center" }}>Level</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h4 style={{ textAlign: "center" }}>Discipline 3</h4>
                                </div>
                                <div className="sheet-col" style={{ width: "5%" }}>
                                    <h4 style={{ textAlign: "center" }}>Level</h4>
                                </div>
                            </div>
                            <div>
                                <fieldset
                                    className="repeating_combinationPowers"
                                    name="attr_repeating_combinationPowers"
                                >
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <input
                                            type="text"
                                            name="attr_ComboDisciplineName"
                                            placeholder="Combo Name"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <input
                                            type="text"
                                            name="attr_ComboDisciplinePower1"
                                            placeholder="Discipline 1"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "5%", textAlign: "center" }}
                                    >
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_ComboDisciplineLevel1"
                                        >
                                            <option value={1} selected="">
                                                1⚫
                                            </option>
                                            <option value={2}>2⚫</option>
                                            <option value={3}>3⚫</option>
                                            <option value={4}>4⚫</option>
                                            <option value={5}>5⚫</option>
                                            <option value={6}>6⚫</option>
                                            <option value={7}>7⚫</option>
                                            <option value={8}>8⚫</option>
                                            <option value={9}>9⚫</option>
                                            <option value={10}>10⚫</option>
                                        </select>
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <input
                                            type="text"
                                            name="attr_ComboDisciplinePower2"
                                            placeholder="Discipline 2"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "5%", textAlign: "center" }}
                                    >
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_ComboDisciplineLevel2"
                                        >
                                            <option value={1} selected="">
                                                1⚫
                                            </option>
                                            <option value={2}>2⚫</option>
                                            <option value={3}>3⚫</option>
                                            <option value={4}>4⚫</option>
                                            <option value={5}>5⚫</option>
                                            <option value={6}>6⚫</option>
                                            <option value={7}>7⚫</option>
                                            <option value={8}>8⚫</option>
                                            <option value={9}>9⚫</option>
                                            <option value={10}>10⚫</option>
                                        </select>
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "20%", textAlign: "center" }}
                                    >
                                        <input
                                            type="text"
                                            name="attr_ComboDisciplinePower3"
                                            placeholder="Discipline 3"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "5%", textAlign: "center" }}
                                    >
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_ComboDisciplineLevel3"
                                        >
                                            <option value={1} selected="">
                                                1⚫
                                            </option>
                                            <option value={2}>2⚫</option>
                                            <option value={3}>3⚫</option>
                                            <option value={4}>4⚫</option>
                                            <option value={5}>5⚫</option>
                                            <option value={6}>6⚫</option>
                                            <option value={7}>7⚫</option>
                                            <option value={8}>8⚫</option>
                                            <option value={9}>9⚫</option>
                                            <option value={10}>10⚫</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div
                                        className="combinationPowers2ndrow"
                                        name="attr_combinationPowers2ndrow"
                                    >
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <h4 style={{ textAlign: "center" }}>Required Power 1</h4>
                                        </div>
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <h4 style={{ textAlign: "center" }}>Required Power 2</h4>
                                        </div>
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <h4 style={{ textAlign: "center" }}>
                                                Book and Pg Number
                                            </h4>
                                        </div>
                                        <div></div>
                                        <div
                                            className="sheet-col"
                                            style={{ width: "20%", textAlign: "left" }}
                                        >
                                            <input
                                                type="text"
                                                name="attr_ComboPowerRequiredNamed1"
                                                placeholder="Required Power Name"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div
                                            className="sheet-col"
                                            style={{ width: "20%", textAlign: "left" }}
                                        >
                                            <input
                                                type="text"
                                                name="attr_ComboPowerRequiredNamed2"
                                                placeholder="Required Power Name"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div
                                            className="sheet-col"
                                            style={{ width: "20%", textAlign: "left" }}
                                        >
                                            <input
                                                type="text"
                                                name="attr_ComboPowerBooknPage"
                                                placeholder="Book and Pg Number"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div></div>
                                        <div className="sheet-col" style={{ width: "12%" }}>
                                            <h4 style={{ textAlign: "center" }}>Desc.</h4>
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="sheet-arrow"
                                            name="attr_ComboDisciplinePowerDescHide"
                                        />
                                        <span />
                                        <br />
                                        <div className="sheet-body">
                                            <div
                                                className="sheet-col"
                                                style={{ textAlign: "center", width: "98%" }}
                                            >
                        <textarea
                            name="attr_ComboDisciplinePowerDesc"
                            style={{ width: "80%", height: 100 }}
                            defaultValue={""}
                        />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                        </div>
                        {/*Experience sheet*/}
                        <div className="sheet-tab-content sheet-tabExp">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Experience</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div className="sheet-colrow sheet-table">
                                <div className="sheet-col sheet-XPdesc">
                                    Description of Expenditure
                                </div>
                                <div className="sheet-col sheet-XPspent">Points Spent</div>
                                <div className="sheet-col sheet-XPdate">Date</div>
                                <fieldset className="repeating_XP" name="attr_expsection">
                                    <input
                                        type="text"
                                        className="sheet-XPdesc"
                                        name="attr_XPdesc"
                                    />
                                    <input
                                        type="text"
                                        className="sheet-XPspent"
                                        name="attr_XPspent"
                                    />
                                    <input
                                        type="text"
                                        className="sheet-XPdate"
                                        name="attr_XPdate"
                                    />
                                </fieldset>
                            </div>
                            <br />
                        </div>
                        {/*Dice*/}
                        <div className="sheet-tab-content sheet-tabDice">
                            <div
                                className="sheet-col"
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <span className="sheet-text-fronth1">Dice Pools</span>
                            </div>
                            <div className="sheet-line-behind" />
                            <br />
                            <div
                                className="sheet-col"
                                align="center"
                                style={{ width: "100%" }}
                            >
                                <div className="sheet-col" style={{ width: "20%" }}>
                                    <h3 style={{ textAlign: "center" }}>Send Rolls to</h3>
                                    <select
                                        className="sheet-center-dots"
                                        name="attr_sendRollTo"
                                        style={{ width: 130, textAlign: "center" }}
                                    >
                                        <option value="" selected="">
                                            Public
                                        </option>
                                        <option value="/w ?{Whisper to who?}">Private</option>
                                        <option value="/w gm">ST</option>
                                        <option value="/w @{Name}">Myself</option>
                                    </select>
                                </div>
                                <br />
                                <div
                                    className="sheet-col"
                                    align="center"
                                    style={{ width: "100%" }}
                                >
                                    <br />
                                    <div
                                        className="sheet-col"
                                        align="center"
                                        style={{ width: "100%" }}
                                    >
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <h4 style={{ textAlign: "center" }}>Perm. Willpower</h4>
                                            <input
                                                type="number"
                                                name="attr_PermWillpowerDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                            <div style={{ display: "inline" }}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_PermWillpowerRoll"
                                                    style={{ fontSize: 12 }}
                                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=Perm. Willpower}} {{attr=Perm. Willpower}} {{attr_num=@{Willpower}}} {{result=[[{@{Willpower}d10sd}>@{PermWillpowerDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="sheet-col" style={{ width: "15%" }}>
                                            <h4 style={{ textAlign: "center" }}>Temp. Willpower</h4>
                                            <input
                                                type="number"
                                                name="attr_TempWillpowerDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                            <div style={{ display: "inline" }}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_TempWillpowerRoll"
                                                    style={{ fontSize: 12 }}
                                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=Temp. Willpower}} {{attr=Temp. Willpower}} {{attr_num=@{Willpower_Used}}} {{result=[[{@{Willpower_Used}d10sd}>@{tempWillpowerDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <select
                                                className="sheet-center-select"
                                                name="attr_virtueConsName"
                                            >
                                                <option value="Conscience" selected="">
                                                    Conscience
                                                </option>
                                                <option value="Conviction">Conviction</option>
                                            </select>
                                            <br />
                                            <input
                                                type="number"
                                                name="attr_ConscConvDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                            <div style={{ display: "inline" }}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_ConscConvRoll"
                                                    style={{ fontSize: 12 }}
                                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=@{virtueConsName}}} {{attr=@{virtueConsName}}} {{attr_num=@{C_C}}} {{result=[[{@{C_C}d10sd}>@{ConscConvDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <select
                                                className="sheet-center-select"
                                                name="attr_virtueSelfName"
                                            >
                                                <option value="Self-Control" selected="">
                                                    Self-Control
                                                </option>
                                                <option value="Instinct">Instinct</option>
                                            </select>
                                            <br />
                                            <input
                                                type="number"
                                                name="attr_SelfCInstDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                            <div style={{ display: "inline" }}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_SelfCInstRoll"
                                                    style={{ fontSize: 12 }}
                                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=@{virtueSelfName}}} {{attr=@{virtueSelfName}}} {{attr_num=@{S_I}}} {{result=[[{@{S_I}d10sd}>@{SelfCInstDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="sheet-col" style={{ width: "20%" }}>
                                            <h4 style={{ textAlign: "center" }}>Courage</h4>
                                            <input
                                                type="number"
                                                name="attr_CourageDiff"
                                                className="sheet-inputname"
                                                defaultValue={6}
                                            />
                                            <div style={{ display: "inline" }}>
                                                <button
                                                    className="sheet-custom-button sheet-vampire-button"
                                                    type="roll"
                                                    name="roll_CourageRoll"
                                                    style={{ fontSize: 12 }}
                                                    value="@{sendRollTo} &{template:wod} {{name=@{Name}}} {{roll_name=Courage}} {{attr=Courage}} {{attr_num=@{Courage}}} {{result=[[{@{Courage}d10sd}>@{CourageDiff}f1]]}} "
                                                >
                                                    Roll
                                                </button>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div
                                        className="sheet-col"
                                        style={{ width: 150, textAlign: "center" }}
                                    >
                                        <h4 style={{ textAlign: "center", width: "100%" }}>
                                            Wound Penalties
                                        </h4>
                                        <select name="attr_Health" className="sheet-center-select">
                                            <option value={0} selected="">
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
                                        style={{ width: 140, textAlign: "center", marginLeft: 25 }}
                                    >
                                        <h4 style={{ textAlign: "center", width: "100%" }}>
                                            Temp. Willpower
                                        </h4>
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_Willpower_Used"
                                            style={{ width: 130, textAlign: "center" }}
                                        >
                                            <option value={0} selected="">
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
                                        style={{ width: 130, textAlign: "center", marginLeft: 25 }}
                                    >
                                        <h4 style={{ textAlign: "center", width: "100%" }}>
                                            Blood Points
                                        </h4>
                                        <select
                                            className="sheet-center-dots"
                                            name="attr_BloodPool"
                                            style={{ width: 130, textAlign: "center" }}
                                        >
                                            <option value={0} selected="">
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
                                    <br />
                                    <br />
                                    <div
                                        className="sheet-col"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                    <span className="sheet-text-fronth1">
                      Boosted Attributes
                    </span>
                                    </div>
                                    <div className="sheet-line-behind" />
                                    <br />
                                    <div>
                                        <div className="sheet-colrow">
                                            <div className="sheet-col" style={{ width: "33%" }}>
                                                <table style={{ textAlign: "center", width: "100%" }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h5>Name</h5>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <h5>Base</h5>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <h5>Boost</h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Strength</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Strength"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_StrengthBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Dexterity</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Dexterity"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_DexterityBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Stamina</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Stamina"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_StaminaBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="sheet-col" style={{ width: "33%" }}>
                                                <table style={{ textAlign: "center", width: "100%" }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h5>Name</h5>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <h5>Base</h5>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <h5>Boost</h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Charisma</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Charisma"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_CharismaBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Manipulation</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Manipulation"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_ManipulationBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Appearance</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Appearance"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_AppearanceBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="sheet-col" style={{ width: "33%" }}>
                                                <table style={{ textAlign: "center", width: "100%" }}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h5>Name</h5>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <h5>Base</h5>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <h5>Boost</h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Perception</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Perception"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_PerceptionBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Intelligence</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_Intelligence"
                                                            >
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_IntelligenceBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <h4>Wits</h4>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select className="sheet-dots" name="attr_Wits">
                                                                <option value={0}>⚪⚪⚪⚪⚪</option>
                                                                <option value={1} selected="">
                                                                    ⚫⚪⚪⚪⚪
                                                                </option>
                                                                <option value={2}>⚫⚫⚪⚪⚪</option>
                                                                <option value={3}>⚫⚫⚫⚪⚪</option>
                                                                <option value={4}>⚫⚫⚫⚫⚪</option>
                                                                <option value={5}>⚫⚫⚫⚫⚫</option>
                                                                <option value={6}>⚫ 6</option>
                                                                <option value={7}>⚫ 7</option>
                                                                <option value={8}>⚫ 8</option>
                                                                <option value={9}>⚫ 9</option>
                                                            </select>
                                                        </td>
                                                        <td style={{ width: "30%" }}>
                                                            <select
                                                                className="sheet-dots"
                                                                name="attr_WitsBoost"
                                                            >
                                                                <option value={-10}>† -10</option>
                                                                <option value={-9}>† -9</option>
                                                                <option value={-8}>† -8</option>
                                                                <option value={-7}>† -7</option>
                                                                <option value={-6}>† -6</option>
                                                                <option value={-5}>† -5</option>
                                                                <option value={-4}>† -4</option>
                                                                <option value={-3}>† -3</option>
                                                                <option value={-2}>† -2</option>
                                                                <option value={-1}>† -1</option>
                                                                <option value={0} selected="">
                                                                    ⚪ 0
                                                                </option>
                                                                <option value={1}>⚫ +1</option>
                                                                <option value={2}>⚫ +2</option>
                                                                <option value={3}>⚫ +3</option>
                                                                <option value={4}>⚫ +4</option>
                                                                <option value={5}>⚫ +5</option>
                                                                <option value={6}>⚫ +6</option>
                                                                <option value={7}>⚫ +7</option>
                                                                <option value={8}>⚫ +8</option>
                                                                <option value={9}>⚫ +9</option>
                                                                <option value={10}>⚫ +10</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div
                                        className="sheet-col"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                                        <span className="sheet-text-fronth1">Main Dice Pools</span>
                                    </div>
                                    <div className="sheet-line-behind" />
                                    <br />
                                    <div className="sheet-colrow sheet-table">
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Name
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Attribute
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Abillity
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Discipline
                                                    </h4>
                                                </td>
                                                <td style={{ width: "5%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Modifiers
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
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
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Difficulty
                                                    </h4>
                                                </td>
                                                <td style={{ width: "20%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
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
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                <tr>
                                                    <td style={{ width: "15%" }}>
                                                        <input
                                                            type="text"
                                                            name="attr_mainrollTitle"
                                                            className="sheet-inputname"
                                                        />
                                                    </td>
                                                    <td style={{ width: "15%" }}>
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
                                                    <td style={{ width: "15%" }}>
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
                                                    <td style={{ width: "15%" }}>
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
                                                    <td style={{ width: "5%", textAlign: "center" }}>
                                                        <input
                                                            type="number"
                                                            defaultValue={0}
                                                            className="sheet-inputname"
                                                            name="attr_mainmodNumber"
                                                        />
                                                    </td>
                                                    <td style={{ width: "10%", textAlign: "center" }}>
                                                        <select
                                                            name="attr_useHealth"
                                                            className="sheet-center-select"
                                                        >
                                                            <option value="@{Health}">Yes</option>
                                                            <option value={0}>No</option>
                                                        </select>
                                                    </td>
                                                    <td style={{ width: "10%", textAlign: "center" }}>
                                                        <input
                                                            type="number"
                                                            name="attr_mainrollDiff"
                                                            className="sheet-inputname"
                                                            defaultValue={6}
                                                        />
                                                    </td>
                                                    <td style={{ width: "20%", textAlign: "center" }}>
                                                        <div style={{ display: "inline" }}>
                                                            <button
                                                                className="sheet-custom-button sheet-vampire-button"
                                                                type="roll"
                                                                name="roll_mainRoll"
                                                                style={{ fontSize: 12, width: 75 }}
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
                                        <br />
                                        <br />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                                        <span className="sheet-text-fronth1">Initiative</span>
                                    </div>
                                    <div className="sheet-line-behind" />
                                    <br />
                                    <div className="sheet-colrow sheet-table">
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Attribute 1
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Attribute 2
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Discipline
                                                    </h4>
                                                </td>
                                                <td style={{ width: "5%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Modifiers
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
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
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Difficulty
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Add to Tracker?
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Rolls
                                                    </h4>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "15%", textAlign: "center" }}>
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
                                                                selected=""
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
                                                <td style={{ width: "15%", textAlign: "center" }}>
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
                                                                selected=""
                                                            >
                                                                Wits
                                                            </option>
                                                        </optgroup>
                                                        <optgroup label="Other">
                                                            <option value={0}>None</option>
                                                        </optgroup>
                                                    </select>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
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
                                                            <option value={0} selected="">
                                                                None
                                                            </option>
                                                        </optgroup>
                                                    </select>
                                                </td>
                                                <td style={{ width: "5%", textAlign: "center" }}>
                                                    <input
                                                        type="number"
                                                        defaultValue={0}
                                                        className="sheet-inputname"
                                                        name="attr_modNumber"
                                                    />
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <select
                                                        name="attr_initiativeuseHealth"
                                                        className="sheet-center-select"
                                                    >
                                                        <option value="@{Health}">Yes</option>
                                                        <option value={0}>No</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "5%", textAlign: "center" }}>
                                                    <input
                                                        type="number"
                                                        name="attr_initrollDiff"
                                                        className="sheet-inputname"
                                                        defaultValue={6}
                                                    />
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <select
                                                        name="attr_initiativeaddTracker"
                                                        className="sheet-center-select"
                                                    >
                                                        <option value="&{tracker}">Yes</option>
                                                        <option value=" ">No</option>
                                                    </select>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <div style={{ display: "inline" }}>
                                                        <button
                                                            className="sheet-custom-button sheet-vampire-button"
                                                            type="roll"
                                                            name="roll_initiativeRoll"
                                                            style={{ fontSize: 12, width: 75 }}
                                                            value="@{sendRollTo} @{Name} &{template:wodinitiative} {{name=@{Name}}} {{roll_name=Initiative}} {{attr1=Attribute 1}} {{attr1_num=@{attribute1Roll}}} {{attr2=Attribute 2}} {{attr2_num=@{attribute2Roll}}} {{pwr=Celerity}} {{pwr_num=@{initiativedisciplineRoll}}} {{mod_num=@{modNumber}}} {{hp_mod=@{initiativeuseHealth}}} {{result=[[[[@{attribute1Roll}+@{attribute2Roll}+@{initiativedisciplineRoll}+@{modNumber}+@{initiativeuseHealth}]]+[[1d10]] @{initiativeaddTracker}]]}} "
                                                        >
                                                            Roll
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <br />
                                    <br />
                                    <div
                                        className="sheet-col"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                    <span className="sheet-text-fronth1">
                      Combat Dice Pools
                    </span>
                                    </div>
                                    <div className="sheet-line-behind" />
                                    <br />
                                    <div className="sheet-colrow sheet-table">
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Name
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Attribute
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Abillity
                                                    </h4>
                                                </td>
                                                <td style={{ width: "15%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Discipline
                                                    </h4>
                                                </td>
                                                <td style={{ width: "5%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Modifiers
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
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
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Difficulty
                                                    </h4>
                                                </td>
                                                <td style={{ width: "20%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
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
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                <tr>
                                                    <td style={{ width: "15%", textAlign: "center" }}>
                                                        <input
                                                            type="text"
                                                            name="attr_combatrollTitle"
                                                            className="sheet-inputname"
                                                        />
                                                    </td>
                                                    <td style={{ width: "15%", textAlign: "center" }}>
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
                                                    <td style={{ width: "15%", textAlign: "center" }}>
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
                                                    <td style={{ width: "15%", textAlign: "center" }}>
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
                                                    <td style={{ width: "5%", textAlign: "center" }}>
                                                        <input
                                                            type="number"
                                                            defaultValue={0}
                                                            className="sheet-inputname"
                                                            name="attr_combatmodNumber"
                                                        />
                                                    </td>
                                                    <td style={{ width: "10%", textAlign: "center" }}>
                                                        <select
                                                            name="attr_combatuseHealth"
                                                            className="sheet-center-select"
                                                        >
                                                            <option value="@{Health}">Yes</option>
                                                            <option value={0}>No</option>
                                                        </select>
                                                    </td>
                                                    <td style={{ width: "10%", textAlign: "center" }}>
                                                        <input
                                                            type="number"
                                                            name="attr_combatDiff"
                                                            className="sheet-inputname"
                                                            defaultValue={6}
                                                        />
                                                    </td>
                                                    <td style={{ width: "20%", textAlign: "center" }}>
                                                        <div style={{ display: "inline" }}>
                                                            <button
                                                                className="sheet-custom-button sheet-vampire-button"
                                                                type="roll"
                                                                name="roll_combatRoll"
                                                                style={{ fontSize: 12, width: 75 }}
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
                                        <br />
                                        <br />
                                    </div>
                                    <div
                                        className="sheet-col"
                                        style={{ width: "100%", textAlign: "center" }}
                                    >
                    <span className="sheet-text-fronth1">
                      Custom Dice Pools
                    </span>
                                    </div>
                                    <div className="sheet-line-behind" />
                                    <br />
                                    <div className="sheet-colrow sheet-table">
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                            <tr>
                                                <td style={{ width: "35%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Name
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Dice
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
                                                        Difficulty
                                                    </h4>
                                                </td>
                                                <td style={{ width: "10%", textAlign: "center" }}>
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
                                                <td style={{ width: "45%", textAlign: "center" }}>
                                                    <h4 style={{ width: "100%", textAlign: "center" }}>
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
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                <tr>
                                                    <td style={{ width: "35%" }}>
                                                        <input
                                                            type="text"
                                                            name="attr_rollCustomDiceTitle"
                                                            className="sheet-inputname"
                                                            style={{ width: "100%" }}
                                                        />
                                                    </td>
                                                    <td style={{ width: "10%" }}>
                                                        <input
                                                            type="number"
                                                            name="attr_rollCustomDiceAmount"
                                                            className="sheet-inputname"
                                                            style={{ width: "100%" }}
                                                            defaultValue="0/"
                                                        />
                                                    </td>
                                                    <td style={{ width: "10%" }}>
                                                        <input
                                                            type="number"
                                                            name="attr_rollCustomDifficulty"
                                                            className="sheet-inputname"
                                                            style={{ width: "100%" }}
                                                            defaultValue="6/"
                                                        />
                                                    </td>
                                                    <td style={{ width: "10%", textAlign: "center" }}>
                                                        <select
                                                            name="attr_customuseHealth"
                                                            className="sheet-center-select"
                                                        >
                                                            <option value="@{Health}">Yes</option>
                                                            <option value={0}>No</option>
                                                        </select>
                                                    </td>
                                                    <td style={{ width: "45%", textAlign: "center" }}>
                                                        <div style={{ display: "inline" }}>
                                                            <button
                                                                className="sheet-custom-button sheet-vampire-button"
                                                                type="roll"
                                                                name="roll_customRoll"
                                                                style={{ fontSize: 12 }}
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
                                        <br />
                                        <input
                                            type="number"
                                            name="attr_StrengthScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_DexterityScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_StaminaScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_CharismaScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_ManipulationScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_AppearanceScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_PerceptionScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_IntelligenceScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <input
                                            type="number"
                                            name="attr_WitsScript"
                                            style={{ visibility: "collapse" }}
                                        />
                                        <br />
                                    </div>
                                </div>
                                {/*
<rolltemplate class="sheet-rolltemplate-wod">
    <table>
  <tr><th>{{name}} rolls{{#roll_name}} {{roll_name}}{{/roll_name}}</th></tr>
  <tr><td class="attr">
      {{#attr}}
          {{attr}}({{attr_num}})
      {{/attr}}
			{{#attr1}}
          {{attr1}}({{attr1_num}})
      {{/attr1}}
			{{#attr2}}
          + {{attr2}}({{attr2_num}})
      {{/attr2}}
      {{#skill}}
           + {{skill}}({{skill_num}})
      {{/skill}}
		    {{#pwr}}
		    	 + {{pwr}}({{pwr_num}})
		    {{/pwr}}
      {{#mod_num}}
           + Modifiers({{mod_num}})
      {{/mod_num}}
			{{#hp_mod}}
           + Wound({{hp_mod}})
      {{/hp_mod}}
  </td></tr>
  <tr>
      <td class="result">{{result}} Successes</td>
  </tr>
    </table>
</rolltemplate>
*/}
                                <rolltemplate className="sheet-rolltemplate-wod">
                                    <div className="regularContainer">
                                        <div className="regularHeaderContainer">
                                            {"{"}
                                            {"{"}name{"}"}
                                            {"}"} rolls{"{"}
                                            {"{"}#roll_name{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}roll_name{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}/roll_name{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#attr{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}attr{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#attr1{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}attr1{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr1_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr1{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#attr2{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}attr2{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr2_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr2{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#skill{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}skill{"}"}
                                            {"}"}({"{"}
                                            {"{"}skill_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/skill{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#pwr{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}pwr{"}"}
                                            {"}"}({"{"}
                                            {"{"}pwr_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/pwr{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#mod_num{"}"}
                                            {"}"}+ Modifiers({"{"}
                                            {"{"}mod_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/mod_num{"}"}
                                            {"}"}
                                        </div>
                                        <div className="regularAttr">
                                            {"{"}
                                            {"{"}#hp_mod{"}"}
                                            {"}"}+ Wound({"{"}
                                            {"{"}hp_mod{"}"}
                                            {"}"}){"{"}
                                            {"{"}/hp_mod{"}"}
                                            {"}"}
                                        </div>
                                        <div>
                                            <div className="regularResult">
                                                {"{"}
                                                {"{"}result{"}"}
                                                {"}"} Successes
                                            </div>
                                        </div>
                                    </div>
                                </rolltemplate>
                                <rolltemplate className="sheet-rolltemplate-wodinitiative">
                                    <div className="initiativeContainer">
                                        <div className="initiativeHeader">
                                            {"{"}
                                            {"{"}name{"}"}
                                            {"}"} rolls{"{"}
                                            {"{"}#roll_name{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}roll_name{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}/roll_name{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#attr{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}attr{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#attr1{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}attr1{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr1_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr1{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#attr2{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}attr2{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr2_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr2{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#skill{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}skill{"}"}
                                            {"}"}({"{"}
                                            {"{"}skill_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/skill{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#pwr{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}pwr{"}"}
                                            {"}"}({"{"}
                                            {"{"}pwr_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/pwr{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#mod_num{"}"}
                                            {"}"}+ Modifiers({"{"}
                                            {"{"}mod_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/mod_num{"}"}
                                            {"}"}
                                        </div>
                                        <div className="initiativeAttr">
                                            {"{"}
                                            {"{"}#hp_mod{"}"}
                                            {"}"}+ Wound({"{"}
                                            {"{"}hp_mod{"}"}
                                            {"}"}){"{"}
                                            {"{"}/hp_mod{"}"}
                                            {"}"}
                                        </div>
                                        <div>
                                            <div className="initiativeResult">
                                                {"{"}
                                                {"{"}result{"}"}
                                                {"}"} Initiative
                                            </div>
                                        </div>
                                    </div>
                                </rolltemplate>
                                <rolltemplate className="sheet-rolltemplate-wodritual">
                                    <div className="ritualcontainer">
                                        <div className="ritualheader">
                                            {"{"}
                                            {"{"}name{"}"}
                                            {"}"} casts {"{"}
                                            {"{"}#roll_name{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}roll_name{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}/roll_name{"}"}
                                            {"}"}
                                        </div>
                                        <div className="rituallevel">
                                            {"{"}
                                            {"{"}#rlevel{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}rlevel{"}"}
                                            {"}"} {"{"}
                                            {"{"}rlevel_num{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}/rlevel{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#attr{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}attr{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#attr1{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}attr1{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr1_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr1{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#attr2{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}attr2{"}"}
                                            {"}"}({"{"}
                                            {"{"}attr2_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/attr2{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#skill{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}skill{"}"}
                                            {"}"}({"{"}
                                            {"{"}skill_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/skill{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#pwr{"}"}
                                            {"}"}+ {"{"}
                                            {"{"}pwr{"}"}
                                            {"}"}({"{"}
                                            {"{"}pwr_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/pwr{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#mod_num{"}"}
                                            {"}"}+ Modifiers({"{"}
                                            {"{"}mod_num{"}"}
                                            {"}"}){"{"}
                                            {"{"}/mod_num{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualattribute">
                                            {"{"}
                                            {"{"}#hp_mod{"}"}
                                            {"}"}+ Wound({"{"}
                                            {"{"}hp_mod{"}"}
                                            {"}"}){"{"}
                                            {"{"}/hp_mod{"}"}
                                            {"}"}
                                        </div>
                                        <div className="ritualresult">
                                            {"{"}
                                            {"{"}result{"}"}
                                            {"}"} Successes
                                        </div>
                                        <div className="ritualdescription">
                                            {"{"}
                                            {"{"}#rdesc_text{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}rdesc_text{"}"}
                                            {"}"}
                                            {"{"}
                                            {"{"}/rdesc_text{"}"}
                                            {"}"}
                                        </div>
                                        <div className="scrollbar">
                                            <div className="ritualbookpage">
                                                {"{"}
                                                {"{"}#rbp_text{"}"}
                                                {"}"}
                                                {"{"}
                                                {"{"}rbp_text{"}"}
                                                {"}"}
                                                {"{"}
                                                {"{"}/rbp_text{"}"}
                                                {"}"}
                                            </div>
                                        </div>
                                    </div>
                                </rolltemplate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
