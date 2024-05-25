import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./Boost.css";

export const Boost = ({ name, className, children, ...rest }: DOMProps<"div", { name: `attr_${string}` }>) => (
  <div className={cn(className, "sheet-component sheet-component--boost")} {...rest}>
    <input type="radio" name={`${name}Boost`} value="0" />
    <span className="sheet-component--boost-value" name={`${name}Boost`} />
    <span className="sheet-component--boost-zero material-symbols-outlined">swap_vert</span>
  </div>
);
