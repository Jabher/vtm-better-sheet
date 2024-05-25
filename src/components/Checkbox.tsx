import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./Checkbox.css";

export const Checkbox = ({ i18n, name, className, symbol, ...rest }: DOMProps<"input", { i18n: I18n; name: string, symbol?: string }>) => (
  <div className="sheet-component sheet-component--checkbox">
    <label data-i18n={i18n} />
    <input
      className={cn("sheet-component sheet-component--checkbox material-symbols-outlined", className)}
      type="checkbox"
      data-symbol={symbol}
      {...rest}
    />
  </div>
);
