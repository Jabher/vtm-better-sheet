import {V20} from "./V20.tsx";
import {useMediaQuery} from "usehooks-ts";
import {useWorker, WorkerApi} from "./useWorker.ts";

function worker(api: WorkerApi) {
    // api.on('change:sheet_type', console.log)

    api.on(['sheet:opened', 'change:Dexterity', 'change:DexterityBoost', 'change:CeleritySpeed', 'change:MiscSpeed'], async () => {
        const attrs = await api.getAttrs('Dexterity', 'DexterityBoost', 'CeleritySpeed', 'MiscSpeed');
        console.log(attrs)
        void api.setAttrs({
            JogSpeed: 12 + Number(attrs.Dexterity) + Number(attrs.DexterityBoost) + Number(attrs.CeleritySpeed) + Number(attrs.MiscSpeed),
            RunSpeed: 20 + (3 * Number(attrs.Dexterity) + Number(attrs.DexterityBoost) + Number(attrs.CeleritySpeed) + Number(attrs.MiscSpeed))
        })
    })
}

function App() {
    const isDarkOS = useMediaQuery("(prefers-color-scheme: dark)", {
        defaultValue: false,
    })
    const formRef = useWorker(worker);

    return (
        <div className={isDarkOS ? "sheet-darkmode" : ""} style={{minHeight: '100vh', width: '100vw'}}>
            <div id="dialog-window" style={{minHeight: '100%', width: '100%'}}>
                <div className="dialog largedialog characterviewer"
                     style={{minHeight: '100%', width: '100%', display: 'block'}}>
                    <div className="tab-content" style={{minHeight: '100%', width: '100%'}}>
                        <form className="sheetform" autoComplete="off" style={{minHeight: '100%', width: '100%'}} ref={formRef}>
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
