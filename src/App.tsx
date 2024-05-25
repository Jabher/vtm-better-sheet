import {V20} from "./V20.tsx";
import {useMediaQuery} from "usehooks-ts";

function App() {
    const isDarkOS = useMediaQuery("(prefers-color-scheme: dark)", {
        defaultValue: false,
    })
    return (
        <div className={isDarkOS ? "sheet-darkmode" : ""} style={{minHeight: '100vh', width: '100vw'}}>
            <div id="dialog-window" style={{minHeight: '100%', width: '100%'}}>
                <div className="dialog largedialog characterviewer" style={{minHeight: '100%', width: '100%', display: 'block'}}>
                    <div className="tab-content" style={{minHeight: '100%', width: '100%'}}>
                        <form className="sheetform" autoComplete="off" style={{minHeight: '100%', width: '100%'}}>
                            <div className="charactersheet tab-pane charsheet lang-undefined"
                                 style={{display: "block"}}>
                                <V20/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
