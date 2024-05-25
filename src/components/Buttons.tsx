import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./Button.css";
export const ActionButton = ({ children, name, ...rest }: DOMProps<"input">) => (
  // @ts-expect-error button type
  <button type="action" name={`act_${name}`} {...rest}>
    {children}
  </button>
);

export const RollButton = ({ children, className, name, ...rest }: DOMProps<"input">) => (
  <button
    // @ts-expect-error button type
    type="roll"
    className={cn("sheet-component sheet-component--roll-button", className)}
    name={`roll_${name}`}
    {...rest}
  >
    {children}
  </button>
);
