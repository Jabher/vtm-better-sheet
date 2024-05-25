import cn from "classnames";
import { I18n } from "../types.ts";
import { H5 } from "./globals/Headings.tsx";
import "./AttrInput.css";
import { Input } from "./Input.tsx";
import { Counter } from "./Counter.tsx";

export const AttrInput = ({ i18n, name, from = 0, to }: { i18n: I18n; from: 0 | 1; to: number; name: string }) => (
  <div
    className={cn("sheet-component sheet-component--attr-input", {
      "sheet-component--attr-input-expanding": to > 5,
    })}
  >
    <H5 i18n={i18n} className="sheet-component--attr-input--title" />
    <div className="sheet-component--attr-input--dots-input">
      <Counter name={name} from={from} to={to} renderCounterOnZero preserveZeroGap />
    </div>
    <Input className="sheet-component--attr-input-spec" name={`${name}_Spec`} />
  </div>
);
