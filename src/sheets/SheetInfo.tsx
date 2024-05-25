export const SheetInfo = () => <div className="sheet-tab-content sheet-tabInfo">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Description</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div className="sheet-col" style={{width: "100%"}}>
        <div className="sheet-col">
            <div align="right" className="sheet-col">
                <h4>Age:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Apparent Age:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Place of Birth:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Date of Birth:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>R.I.P.:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Hair:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Eyes:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Race:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Nationality:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Height:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Weight:</h4>
                <h4 style={{margin: "10px 0 0 0"}}>Sex:</h4>
            </div>
            <div className="sheet-col" style={{width: 100}}>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_AgeDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_ApparentAgeDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_PlaceDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_DateDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_RIPDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_HairDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_EyesDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_RaceDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_NationalityDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_HeightDesc"
                />
                <br/>
                <input
                    type="text"
                    className="sheet-descbinput"
                    name="attr_WeightDesc"
                />
                <br/>
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
                      style={{width: 500, height: 200}}
                      defaultValue={""}
                  />
        </div>
    </div>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">History</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{width: "98%", height: "100%"}}>
                <textarea
                    name="attr_history"
                    className="sheet-gear"
                    defaultValue={""}
                />
    </div>
    <br/>
</div>
