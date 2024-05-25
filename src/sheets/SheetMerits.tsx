export const SheetMerits = () => <div className="sheet-tab-content sheet-tabMeritFlaws">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Merits</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 220}}>
            <h4 style={{textAlign: "center"}}>Name</h4>
        </div>
        <div className="sheet-col" style={{width: 100}}>
            <h4 style={{textAlign: "center"}}>Points</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Type</h4>
        </div>
        <div className="sheet-col" style={{width: 30}}>
            <h4 style={{textAlign: "center"}}>Desc.</h4>
        </div>
    </div>
    <div>
        <fieldset
            className="repeating_Merits"
            name="attr_meritssection"
        >
            <div className="sheet-col" style={{width: 220}}>
                <input
                    type="text"
                    name="attr_meritname"
                    style={{width: "100%"}}
                />
            </div>
            <div className="sheet-col" style={{width: 100}}>
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
            <div className="sheet-col" style={{width: 150}}>
                <input
                    type="text"
                    name="attr_merittype"
                    style={{width: "100%"}}
                />
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_MeritsDescHide"
            />
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_meritdesc"
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
        <span className="sheet-text-fronth1">Flaws</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: 220}}>
            <h4 style={{textAlign: "center"}}>Name</h4>
        </div>
        <div className="sheet-col" style={{width: 100}}>
            <h4 style={{textAlign: "center"}}>Points</h4>
        </div>
        <div className="sheet-col" style={{width: 150}}>
            <h4 style={{textAlign: "center"}}>Type</h4>
        </div>
        <div className="sheet-col" style={{width: 30}}>
            <h4 style={{textAlign: "center"}}>Desc.</h4>
        </div>
    </div>
    <div>
        <fieldset className="repeating_Flaws" name="attr_flawsection">
            <div className="sheet-col" style={{width: 220}}>
                <input
                    type="text"
                    name="attr_flawname"
                    style={{width: "100%"}}
                />
            </div>
            <div className="sheet-col" style={{width: 100}}>
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
            <div className="sheet-col" style={{width: 150}}>
                <input
                    type="text"
                    name="attr_flawtype"
                    style={{width: "100%"}}
                />
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_FlawsDescHide"
            />
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_flawdesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
</div>
