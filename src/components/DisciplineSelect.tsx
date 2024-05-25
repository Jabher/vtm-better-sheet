import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import { Input } from "./Input.tsx";

export const DisciplineSelect = ({ i18n, name, className, ...rest }: DOMProps<"input", { i18n?: I18n }>) => (
  <Input
    i18n={i18n || "discipline-label"}
    name={name}
    className={cn("sheet-component--discipline-select", className)}
    list="user-discipline-datalist"
    {...rest}
  />
);
