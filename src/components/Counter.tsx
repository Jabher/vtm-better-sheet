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
  renderCounterOnZero = false,
  ...rest
}: DOMProps<
  "div",
  {
    name: string;
    from?: 0 | 1;
    to: number;
    fade?: boolean;
    preserveZeroGap?: boolean;
    renderCounterOnZero?: boolean;
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
    <>
      {from == 0 ? <input type="radio" name={`attr_${name}`} value={0} defaultChecked={from == 0} /> : null}
      {renderCounterOnZero && (from == 0 || preserveZeroGap) ? (
        <span className="sheet-component--counter-value" name={`attr_${name}`} />
      ) : null}
    </>
    {range(1, to + 1).map((i) => (
      <input
        type="radio"
        name={`attr_${name}`}
        key={i}
        value={i}
        defaultChecked={i == from}
        title={to < 10 ? "" : `${i}`}
      />
    ))}
  </div>
);
