import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./Labelled.css";

export const Labelled = ({ children, i18n, className, ...rest }: DOMProps<"div", { i18n?: I18n }>) => (
  <div className={cn("sheet-component--labelled", className)} {...rest}>
    {children}
    {i18n ? <label data-i18n={i18n} /> : null}
  </div>
);
