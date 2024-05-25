import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./Boost.css";
import { Input } from "./Input.tsx";

export const Boost = ({ name, className, children, ...rest }: DOMProps<"div", { name: `attr_${string}` }>) => (
  <div className={cn(className, "sheet-component sheet-component--boost")} {...rest}>
    <input type="radio" name={`${name}Boost`} value="0" />
    <div className="sheet-component--boost-dropdown">
      <span className="material-symbols-outlined">swap_vert</span>
      <div className="sheet-component--boost-selector">
        <Input i18n="boosts-label" name={`${name}Boost`} type="number" />
      </div>
    </div>
    <span className="sheet-component--boost-value" name={`${name}Boost`} />
  </div>
);
