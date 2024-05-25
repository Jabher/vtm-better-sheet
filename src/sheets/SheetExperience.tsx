export const SheetExperience = () => <div className="sheet-tab-content sheet-tabExp">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Experience</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
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
    <br/>
</div>
