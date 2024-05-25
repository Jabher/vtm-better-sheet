import "./imported/base.css"
import "./imported/charsheet.css"
import "./V20.css"
// import "./V20-old.css"
import {SheetPrimary} from "./sheets/SheetPrimary.tsx";
import {SheetCombat} from "./sheets/SheetCombat.tsx";
import {SheetNotes} from "./sheets/SheetNotes.tsx";
import {SheetBackgrounds} from "./sheets/SheetBackgrounds.tsx";
import {SheetInfo} from "./sheets/SheetInfo.tsx";
import {SheetBonds} from "./sheets/SheetBonds.tsx";
import {SheetSorcery} from "./sheets/SheetSorcery.tsx";
import {SheetTraits} from "./sheets/SheetTraits.tsx";
import {SheetMerits} from "./sheets/SheetMerits.tsx";
import {SheetPowers} from "./sheets/SheetPowers.tsx";
import {SheetExperience} from "./sheets/SheetExperience.tsx";
import {SheetDice} from "./sheets/SheetDice.tsx";
import {I18n} from "./types.ts";
import translation from "./translation.json";

import './components/Button.css'
import './components/V20Header.css'
import {V20Container} from "./V20-container.tsx";

const sheets: Partial<Record<I18n, () => JSX.Element>> = {
    Primary: SheetPrimary,
    "backgrounds-u": SheetBackgrounds,
    MeritsFlaws: SheetMerits,
    Powers: SheetPowers,
    OtherTraits: SheetTraits,
    Notes: SheetNotes,
    BondBoon: SheetBonds,
    BloodSorcery: SheetSorcery,
    Information: SheetInfo,
    "experience-u": SheetExperience,
    Combat: SheetCombat,
    Dice: SheetDice
}

const SHEET_TYPE_ATTR = "attr_sheet_type"

export const V20 = () => <V20Container>
        <div className="sheet-toplevel-nav">
            {
                (Object.keys(sheets) as I18n[]).map((section, i) =>
                    <label data-i18n={section}
                           htmlFor={`${SHEET_TYPE_ATTR}_${i}`}>
                        {translation[section]}
                    </label>
                )
            }
            <div style={{flexGrow: 1}}></div>
        </div>
        {
            Object.values(sheets).map((Sheet, i) => <>
                <input id={`${SHEET_TYPE_ATTR}_${i}`} type="radio" value={i} defaultChecked={i == 0}
                       name="attr_sheet_type"
                       className="sheet-utility-hidden-input-radio sheet-utility--page-selector"/>
                <Sheet/>
            </>)
        }
</V20Container>
