import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./SelectInput.css";

export const SelectInput = ({ className, style, i18n, children, ...rest }: DOMProps<"select", { i18n?: I18n }>) => (
  <div className={cn(className, "sheet-component sheet-component--select-input")} style={style}>
    <select defaultValue={0} {...rest}>
      {children}
    </select>
    {i18n ? <label data-i18n={i18n}></label> : null}
  </div>
);
