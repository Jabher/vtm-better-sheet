export const SheetNotes = () => <div className="sheet-colrow sheet-tab-content sheet-tabNotes">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
                <span className="sheet-text-fronth1" data-i18n="notes-u">
                  Notes
                </span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div style={{width: "98%", height: "100%"}}>
                <textarea
                    name="attr_othernotes"
                    className="sheet-gear"
                    defaultValue={""}
                />
    </div>
    <br/>
</div>
