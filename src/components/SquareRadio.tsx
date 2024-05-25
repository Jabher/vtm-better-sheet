import cn from "classnames";
import { DOMProps } from "../types.ts";
import "./SquareRadio.css";

export const SquareRadio = ({ className, name, ...rest }: DOMProps<"input">) => (
  <input
    type="radio"
    name={`attr_${name}`}
    className={cn("sheet-component sheet-component--square-radio", className)}
    {...rest}
  />
);
