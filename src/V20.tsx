import { ReactNode } from "react";
import "./V20.css";
import { I18n } from "./types.ts";

import "./components/Button.css";
import "./components/V20Header.css";
import "./fonts.css";
import "./styles/overrides.css";
import "./styles/globals.css";
import { RollTemplates } from "./RollTemplates.tsx";
import { range } from "ramda";

const SHEET_TYPE_ATTR = "attr_sheet_type";

export const V20 = ({ sheets }: { sheets: Partial<Record<I18n, () => ReactNode>> }) => (
  <>
    <div style={{ display: "none" }}>
      {range(1, 15).map((i) => (
        <input key={i} name={`attr_Discipline${i}Name`} />
      ))}
    </div>
    <div className="sheet-toplevel-nav">
      {(Object.keys(sheets) as I18n[]).map((section, i) => (
        <label data-i18n={section} htmlFor={`${SHEET_TYPE_ATTR}_${i}`} key={`section_${i}`} />
      ))}
      <div style={{ flexGrow: 1 }}></div>
    </div>
    <input type="checkbox" style={{ display: "none" }} name="attr_V20_Initialized" defaultChecked={false} />
    {Object.values(sheets).map((Sheet, i) => (
      <span style={{ display: "contents" }} key={i}>
        <input
          id={`${SHEET_TYPE_ATTR}_${i}`}
          type="radio"
          value={i}
          defaultChecked={i == 0}
          name="attr_sheet_type"
          className="sheet-utility-hidden-input-radio sheet-utility--page-selector"
        />
        <Sheet key={`sheet_${i}`} />
      </span>
    ))}
    <RollTemplates />
  </>
);
