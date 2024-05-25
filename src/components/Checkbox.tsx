import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./Checkbox.css";
import { Labelled } from "./Labelled.tsx";

export const Checkbox = ({
  i18n,
  name,
  className,
  symbol,
  symbolUnchecked,
  ...rest
}: DOMProps<"input", { i18n: I18n; name: string; symbol?: string; symbolUnchecked?: string }>) => (
  <Labelled className="sheet-component sheet-component--checkbox" i18n={i18n}>
    <input
      className={cn("material-symbols-outlined", className)}
      type="checkbox"
      data-symbol={symbol}
      data-symbol-unchecked={symbolUnchecked}
      {...rest}
    />
  </Labelled>
);
