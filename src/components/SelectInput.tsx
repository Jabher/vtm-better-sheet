import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./SelectInput.css";
import { Labelled } from "./Labelled.tsx";

export const SelectInput = ({
  className,
  style,
  i18n,
  children,
  name,
  ...rest
}: DOMProps<"select", { i18n?: I18n }>) => (
  <Labelled className={cn(className, "sheet-component sheet-component--select-input")} style={style} i18n={i18n}>
    <select defaultValue={0} name={`attr_${name}`} {...rest}>
      {children}
    </select>
  </Labelled>
);
