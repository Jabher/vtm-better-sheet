import { ReactNode } from "react";
import "./imported/base.css";
import "./V20.css";
import { I18n } from "./types.ts";
import translation from "./translation.json";

import "./components/Button.css";
import "./components/V20Header.css";
import "./fonts.css";
import "./styles/overrides.css";
import "./styles/globals.css";

const SHEET_TYPE_ATTR = "attr_sheet_type";

export const V20 = ({ sheets }: { sheets: Partial<Record<I18n, () => ReactNode>> }) => (
  <>
    <div className="sheet-toplevel-nav">
      {(Object.keys(sheets) as I18n[]).map((section, i) => (
        <label data-i18n={section} htmlFor={`${SHEET_TYPE_ATTR}_${i}`} key={section}>
          {translation[section]}
        </label>
      ))}
      <div style={{ flexGrow: 1 }}></div>
    </div>
    {Object.values(sheets).map((Sheet, i) => (
      <>
        <input
          id={`${SHEET_TYPE_ATTR}_${i}`}
          type="radio"
          value={i}
          defaultChecked={i == 0}
          name="attr_sheet_type"
          className="sheet-utility-hidden-input-radio sheet-utility--page-selector"
        />
        <Sheet />
      </>
    ))}
  </>
);