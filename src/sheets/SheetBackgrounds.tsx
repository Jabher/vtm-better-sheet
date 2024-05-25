export const SheetBackgrounds = () => <div className="sheet-tab-content sheet-tabBack">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Backgrounds</span>
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
    <div style={{textAlign: "center"}}>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "center"}}>Name</h4>
        </div>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "right"}}>Rating</h4>
        </div>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "center"}}>Difficulty</h4>
        </div>
        <div className="sheet-col" style={{width: "20%"}}>
            <h4 style={{textAlign: "left"}}>Roll</h4>
        </div>
    </div>
    <div>
        <fieldset
            className="repeating_Backs"
            name="attr_repeating_Backs"
            style={{textAlign: "center"}}
        >
            <div
                className="sheet-col"
                style={{width: "20%", textAlign: "center"}}
            >
                <input type="text" name="attr_ebackname"/>
            </div>
            <div
                className="sheet-col"
                style={{width: "20%", textAlign: "center"}}
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
                style={{width: "20%", textAlign: "center"}}
            >
                <button
                    className="sheet-custom-button sheet-vampire-button"
                    type="roll"
                    name="roll_backgroundRatingMySelf"
                    style={{fontSize: 12, width: 75}}
                    value="@{sendRollTo} @{Name} &{template:wod} {{name=@{Name}}} {{roll_name=@{ebackname}}} {{attr=@{ebackname}}} {{attr_num=@{ebackrating}}} {{result=[[{(@{ebackrating})d10}>@{ebackgrounddiff}f1]]}} "
                >
                    Roll
                </button>
            </div>
            <br/>
            <div className="sheet-col" style={{width: "20%"}}>
                <h4 style={{textAlign: "center"}}>Desc.</h4>
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_BackgroundDescHide"
            />
            <span/>
            <br/>
            <div className="sheet-body">
                <div
                    className="sheet-col"
                    style={{textAlign: "center", width: "98%"}}
                >
                      <textarea
                          name="attr_ebackdesc"
                          style={{width: "80%", height: 100}}
                          defaultValue={""}
                      />
                </div>
            </div>
        </fieldset>
    </div>
    <br/>
</div>
