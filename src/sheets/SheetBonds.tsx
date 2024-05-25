export const SheetBonds = () => <div className="sheet-tab-content sheet-tabBBond">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Blood Bonds</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 230}}>
            <h4 style={{textAlign: "center"}}>Who</h4>
        </div>
        <div className="sheet-col" style={{width: 120}}>
            <h4 style={{textAlign: "center"}}>To Target</h4>
        </div>
        <div className="sheet-col" style={{width: 120}}>
            <h4 style={{textAlign: "center"}}>To Me</h4>
        </div>
        <div className="sheet-col" style={{width: 30}}>
            <h4 style={{textAlign: "center"}}>Desc.</h4>
        </div>
    </div>
    <div>
        <fieldset className="repeating_Bonds" name="attr_bondssection">
            <div className="sheet-col" style={{width: 230}}>
                <input
                    type="text"
                    name="attr_boundToName"
                    style={{width: "100%"}}
                />
            </div>
            <div className="sheet-col" style={{width: 120}}>
                <select
                    className="sheet-center-select"
                    name="attr_ratingBond"
                >
                    <option value={0} style={{color: "Black"}} selected="">
                        No Blood Bond
                    </option>
                    <option value={1} style={{color: "LightCoral"}}>
                        First Drink
                    </option>
                    <option value={2} style={{color: "LightCoral"}}>
                        Second Drink
                    </option>
                    <option value={3} style={{color: "Crimson"}}>
                        Full Blood Bond
                    </option>
                </select>
            </div>
            <div className="sheet-col" style={{width: 120}}>
                <select
                    className="sheet-center-select"
                    name="attr_reverseRatingBond"
                >
                    <option value={0} style={{color: "Black"}} selected="">
                        No Blood Bond
                    </option>
                    <option value={1} style={{color: "LightCoral"}}>
                        First Drink
                    </option>
                    <option value={2} style={{color: "LightCoral"}}>
                        Second Drink
                    </option>
                    <option value={3} style={{color: "Crimson"}}>
                        Full Blood Bond
                    </option>
                </select>
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_BloodBondDescHide"
            />
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_bounddesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Vinculums</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 230}}>
            <h4 style={{textAlign: "center"}}>Who</h4>
        </div>
        <div className="sheet-col" style={{width: 120}}>
            <h4 style={{textAlign: "center"}}>To Target</h4>
        </div>
        <div className="sheet-col" style={{width: 120}}>
            <h4 style={{textAlign: "center"}}>To Me</h4>
        </div>
        <div className="sheet-col" style={{width: 30}}>
            <h4 style={{textAlign: "center"}}>Desc.</h4>
        </div>
    </div>
    <div>
        <fieldset className="repeating_Vincs" name="attr_vincssection">
            <div className="sheet-col" style={{width: 230}}>
                <input
                    type="text"
                    name="attr_vincToName"
                    style={{width: "100%"}}
                />
            </div>
            <div className="sheet-col" style={{width: 120}}>
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
            <div className="sheet-col" style={{width: 120}}>
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
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_vincbounddesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Boons</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 160}}>
            <h4 style={{textAlign: "center"}}>Debtor</h4>
        </div>
        <div className="sheet-col" style={{width: 160}}>
            <h4 style={{textAlign: "center"}}>To Who</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Type</h4>
        </div>
        <div className="sheet-col" style={{width: 30}}>
            <h4 style={{textAlign: "center"}}>Desc.</h4>
        </div>
    </div>
    <div>
        <fieldset className="repeating_Boons" name="attr_boonssection">
            <div className="sheet-col" style={{width: 160}}>
                <input
                    type="text"
                    name="attr_boonDebtorName"
                    style={{width: "100%"}}
                />
            </div>
            <div className="sheet-col" style={{width: 160}}>
                <input
                    type="text"
                    name="attr_boonToName"
                    style={{width: "100%"}}
                />
            </div>
            <div className="sheet-col" style={{width: 150}}>
                <select
                    className="sheet-center-select"
                    name="attr_ratingBoon"
                    style={{height: 25}}
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
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_boondesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
</div>
