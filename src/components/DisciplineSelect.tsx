import { range } from "ramda";
import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import { SelectInput } from "./SelectInput.tsx";

export const DisciplineSelect = ({ i18n, name, className, ...rest }: DOMProps<"select", { i18n?: I18n }>) => (
  <SelectInput
    i18n={i18n || "discipline-label"}
    name={name}
    defaultValue={0}
    className={cn("sheet-component--discipline-select", className)}
    {...rest}
  >
    {range(1, 16).map((i) => (
      <option key={i} value={i} name={`attr_Discipline${i}Name`} />
    ))}
    <option value="0">---</option>
  </SelectInput>
);
