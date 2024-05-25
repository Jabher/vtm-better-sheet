import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./Button.css";
export const ActionButton = ({ children, name, ...rest }: DOMProps<"input">) => (
  // @ts-expect-error button type
  <button type="action" name={`act_${name}`} {...rest}>
    {children}
  </button>
);

export const RollButton = ({
  children,
  className,
  childrenName,
  name,
  ...rest
}: DOMProps<"input", { childrenName?: string }>) => (
  <button
    // @ts-expect-error button type
    type="action"
    className={cn("sheet-component sheet-component--roll-button", className)}
    name={`act_roll_${name}`}
    {...rest}
  >
    {childrenName ? <span name={`attr_${childrenName}`} /> : null}
    {children}
  </button>
);
