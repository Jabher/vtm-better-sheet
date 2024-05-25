import { range } from "ramda";
import { DOMProps, I18n } from "../types.ts";
import { SelectInput } from "./SelectInput.tsx";

export const DisciplineSelect = ({ i18n, name, ...rest }: DOMProps<"select", { i18n?: I18n }>) => (
  <SelectInput i18n={i18n || "discipline-label"} name={name} defaultValue={0} {...rest}>
    {range(1, 11).map((i) => (
      <option key={i} value={i} name={`attr_Discipline${i}Name`} />
    ))}
    <option value="0">---</option>
  </SelectInput>
);
