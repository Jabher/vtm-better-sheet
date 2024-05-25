import { range } from "ramda";
import "./Counter.css";
import cn from "classnames";
import { DOMProps } from "../types.ts";

export const Counter = ({
  from = 1,
  to,
  name,
  className,
  fade,
  dotStyle,
  preserveZeroGap = true,
  ...rest
}: DOMProps<
  "div",
  {
    from?: 0 | 1;
    to: number;
    name: string;
    fade?: boolean;
    preserveZeroGap?: boolean;
    dotStyle?: "circle" | "square";
  }
>) => (
  <div
    className={cn("sheet-component sheet-component--counter", className, {
      "sheet-component--counter-preserve-zero-gap": preserveZeroGap,
      "sheet-component--counter-fade": fade,
      "sheet-component--counter-style-box": dotStyle == "square",
    })}
    {...rest}
  >
    {
      /*for counting selectors*/
      from >= 1 ? null : <input type="radio" name={name} value={0} defaultChecked={from == 0} />
    }
    {range(1, to + 1).map((i) => (
      <input type="radio" name={name} key={i} value={i} defaultChecked={i == from} title={to < 10 ? "" : `${i}`} />
    ))}
  </div>
);
