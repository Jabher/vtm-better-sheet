export const SheetSorcery = () => <div className="sheet-tab-content sheet-tabSorcery">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Blood Sorcery</span>
    </div>
    <div className="sheet-line-behind"/>
    <div className="sheet-col" style={{width: "20%"}}>
        <h3 style={{textAlign: "center"}}>Send Rolls to</h3>
        <select
            className="sheet-center-dots"
            name="attr_sendRollTo"
            style={{width: 130, textAlign: "center"}}
        >
            <option value="" selected="">
                Public
            </option>
            <option value="/w ?{Whisper to who?}">Private</option>
            <option value="/w gm">ST</option>
            <option value="/w @{Name}">Myself</option>
        </select>
    </div>
    <br/>
    <br/>
    <table>
        <tbody>
        <tr>
            <td style={{width: "70%", textAlign: "center"}}>
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
    <br/>
    <table>
        <tbody>
        <tr>
            <td style={{width: "70%", textAlign: "center"}}>
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
    <br/>
    <table>
        <tbody>
        <tr>
            <td style={{width: "70%", textAlign: "center"}}>
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
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Paths</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div className="sheet-col" style={{width: "33%"}}>
        <table>
            <tbody>
            <tr>
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path1_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%", textAlign: "center"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path2_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%", textAlign: "center"}}>
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
                <td style={{width: "60%", textAlign: "center"}}>
                    <input
                        type="text"
                        name="attr_Path3_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path4_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
    <div className="sheet-col" style={{width: "33%"}}>
        <table>
            <tbody>
            <tr>
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path5_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path6_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path7_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path8_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
    <div className="sheet-col" style={{width: "33%"}}>
        <table>
            <tbody>
            <tr>
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path9_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path10_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path11_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%", textAlign: "center"}}>
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
                <td style={{width: "60%"}}>
                    <input
                        type="text"
                        name="attr_Path12_name"
                        className="sheet-othertraitname"
                        placeholder="Path Name"
                    />
                </td>
                <td style={{width: "20%"}}>
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
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Rituals</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 50}}>
            <h4 style={{textAlign: "center"}}>Level</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Name</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Attribute/Willpower</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Ability</h4>
        </div>
        <div className="sheet-col" style={{width: 50}}>
            <h4 style={{textAlign: "center"}}>Difficulty</h4>
        </div>
    </div>
    <div style={{textAlign: "center"}}>
        <fieldset
            className="repeating_Rituals"
            name="attr_ritualssection"
        >
            <div className="sheet-col" style={{width: 50}}>
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
            <div className="sheet-col" style={{width: 150}}>
                <input
                    type="text"
                    name="attr_ritualname"
                    style={{width: "100%"}}
                    placeholder="Ritual Name"
                />
            </div>
            <div className="sheet-col" style={{width: 150}}>
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
            <div className="sheet-col" style={{width: 150}}>
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
            <div className="sheet-col" style={{width: 50}}>
                <input
                    type="number"
                    name="attr_ritualDiff"
                    style={{width: "100%"}}
                    defaultValue={6}
                />
            </div>
            <br/>
            <div>
                <div className="sheet-col" style={{width: 150}}>
                    <h4 style={{textAlign: "center"}}>Book and Page</h4>
                </div>
                <div className="sheet-col" style={{width: 100}}>
                    <h4 style={{textAlign: "center", fontSize: 10}}>
                        Wound Penalties?
                    </h4>
                </div>
                <div className="sheet-col" style={{width: 100}}>
                    <h4 style={{textAlign: "center"}}>Roll</h4>
                </div>
            </div>
            <div className="sheet-col" style={{width: 150}}>
                <input
                    type="text"
                    name="attr_ritualBookandPage"
                    style={{width: "100%"}}
                    placeholder="Book and Page"
                />
            </div>
            <div className="sheet-col" style={{width: 100}}>
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
            <div style={{display: "inline"}}>
                <button
                    className="sheet-custom-button sheet-vampire-button"
                    type="roll"
                    name="roll_ritualRoll"
                    style={{fontSize: 12, width: 75}}
                    value="@{sendRollTo} @{Name} &{template:wodritual} {{name=@{Name}}} {{roll_name=@{ritualname}}} {{rlevel=Ritual Level}} {{rlevel_num=@{rituallevel}}} {{attr=Attribute}} {{attr_num=@{ritualAW}}} {{skill=Ability}} {{skill_num=@{ritualAbility}}} {{hp_mod=@{ritualuseHealth}}} {{result=[[{(@{ritualAW}+@{ritualAbility}+@{ritualuseHealth})d10sd}>@{ritualDiff}f1]]}} {{rdesc_text=@{ritualdesc}}} {{rbp=}} {{rbp_text=@{ritualBookandPage}}}"
                >
                    Roll
                </button>
            </div>
            <br/>
            <div>
                <div className="sheet-col" style={{width: 30}}>
                    <h4 style={{textAlign: "center"}}>Desc.</h4>
                </div>
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_RitualDescHide"
            />
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_ritualdesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
    <br/>
</div>
