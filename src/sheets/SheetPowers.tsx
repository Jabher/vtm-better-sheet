export const SheetPowers = () => <div className="sheet-tab-content sheet-tabPowers">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Discipline Powers</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 200}}>
            <h4 style={{textAlign: "center"}}>Discipline</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Power</h4>
        </div>
        <div className="sheet-col" style={{width: 130}}>
            <h4 style={{textAlign: "center"}}>Level</h4>
        </div>
        <div className="sheet-col" style={{width: 30}}>
            <h4 style={{textAlign: "center"}}>Desc.</h4>
        </div>
    </div>
    <div>
        <fieldset
            className="repeating_powers"
            name="attr_repeating_powers"
        >
            <div
                className="sheet-col"
                style={{width: 200, textAlign: "center"}}
            >
                <input
                    type="text"
                    name="attr_SetDisciplineName"
                    placeholder="Discipline Name"
                    style={{width: "100%"}}
                />
            </div>
            <div
                className="sheet-col"
                style={{width: 150, textAlign: "center"}}
            >
                <input
                    type="text"
                    name="attr_SetDisciplinePower"
                    placeholder="Power Name"
                    style={{width: "100%"}}
                />
            </div>
            <div
                className="sheet-col"
                style={{width: 130, textAlign: "center"}}
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
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_SetDisciplinePowerDesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
                <span className="sheet-text-fronth1">
                  Combination Disciplines
                </span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "center"}}>Name</h4>
        </div>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "center"}}>Discipline 1</h4>
        </div>
        <div className="sheet-col" style={{width: "5%"}}>
            <h4 style={{textAlign: "center"}}>Level</h4>
        </div>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "center"}}>Discipline 2</h4>
        </div>
        <div className="sheet-col" style={{width: "5%"}}>
            <h4 style={{textAlign: "center"}}>Level</h4>
        </div>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "center"}}>Discipline 3</h4>
        </div>
        <div className="sheet-col" style={{width: "5%"}}>
            <h4 style={{textAlign: "center"}}>Level</h4>
        </div>
    </div>
    <div>
        <fieldset
            className="repeating_combinationPowers"
            name="attr_repeating_combinationPowers"
        >
            <div
                className="sheet-col"
                style={{width: "20%", textAlign: "center"}}
            >
                <input
                    type="text"
                    name="attr_ComboDisciplineName"
                    placeholder="Combo Name"
                    style={{width: "100%"}}
                />
            </div>
            <div
                className="sheet-col"
                style={{width: "20%", textAlign: "center"}}
            >
                <input
                    type="text"
                    name="attr_ComboDisciplinePower1"
                    placeholder="Discipline 1"
                    style={{width: "100%"}}
                />
            </div>
            <div
                className="sheet-col"
                style={{width: "5%", textAlign: "center"}}
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
                style={{width: "20%", textAlign: "center"}}
            >
                <input
                    type="text"
                    name="attr_ComboDisciplinePower2"
                    placeholder="Discipline 2"
                    style={{width: "100%"}}
                />
            </div>
            <div
                className="sheet-col"
                style={{width: "5%", textAlign: "center"}}
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
                style={{width: "20%", textAlign: "center"}}
            >
                <input
                    type="text"
                    name="attr_ComboDisciplinePower3"
                    placeholder="Discipline 3"
                    style={{width: "100%"}}
                />
            </div>
            <div
                className="sheet-col"
                style={{width: "5%", textAlign: "center"}}
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
            <br/>
            <div
                className="combinationPowers2ndrow"
                name="attr_combinationPowers2ndrow"
            >
                <div className="sheet-col" style={{width: "20%"}}>
                    <h4 style={{textAlign: "center"}}>Required Power 1</h4>
                </div>
                <div className="sheet-col" style={{width: "20%"}}>
                    <h4 style={{textAlign: "center"}}>Required Power 2</h4>
                </div>
                <div className="sheet-col" style={{width: "20%"}}>
                    <h4 style={{textAlign: "center"}}>
                        Book and Pg Number
                    </h4>
                </div>
                <div></div>
                <div
                    className="sheet-col"
                    style={{width: "20%", textAlign: "left"}}
                >
                    <input
                        type="text"
                        name="attr_ComboPowerRequiredNamed1"
                        placeholder="Required Power Name"
                        style={{width: "100%"}}
                    />
                </div>
                <div
                    className="sheet-col"
                    style={{width: "20%", textAlign: "left"}}
                >
                    <input
                        type="text"
                        name="attr_ComboPowerRequiredNamed2"
                        placeholder="Required Power Name"
                        style={{width: "100%"}}
                    />
                </div>
                <div
                    className="sheet-col"
                    style={{width: "20%", textAlign: "left"}}
                >
                    <input
                        type="text"
                        name="attr_ComboPowerBooknPage"
                        placeholder="Book and Pg Number"
                        style={{width: "100%"}}
                    />
                </div>
                <div></div>
                <div className="sheet-col" style={{width: "12%"}}>
                    <h4 style={{textAlign: "center"}}>Desc.</h4>
                </div>
                <input
                    type="checkbox"
                    className="sheet-arrow"
                    name="attr_ComboDisciplinePowerDescHide"
                />
                <span/>
                <br/>
                <div className="sheet-body">
                    <div
                        className="sheet-col"
                        style={{textAlign: "center", width: "98%"}}
                    >
                        <textarea
                            name="attr_ComboDisciplinePowerDesc"
                            style={{width: "80%", height: 100}}
                            defaultValue={""}
                        />
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
</div>
