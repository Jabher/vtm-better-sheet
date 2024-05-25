import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./Health.css";

export const Health = ({ className, name, ...rest }: DOMProps<"input">) => (
  <div className={cn("sheet-component sheet-component--health", className)} {...rest}>
    <input type="radio" name={name} value={0} defaultChecked />
    <input type="radio" name={name} value={1} />
    <input type="radio" name={name} value={2} />
    <input type="radio" name={name} value={3} />
  </div>
);
