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
  ...rest
}: DOMProps<
  "div",
  {
    from?: 0 | 1;
    to: number;
    name: string;
    fade?: boolean;
    dotStyle?: "circle" | "square";
  }
>) => (
  <div
    className={cn("sheet-component sheet-component--counter", className, {
      "sheet-component--counter-startsFrom-0": from == 0,
      "sheet-component--counter-startsFrom-1": from == 1,
      "sheet-component--counter-fade": fade,
      "sheet-component--counter-style-box": dotStyle == "square",
    })}
    {...rest}
  >
    {
      /*for counting selectors*/
      from >= 1 ? (
        <label style={{ display: "none" }} />
      ) : (
        <>
          <label className="sheet-component--counter--label-zero">
            <input type="radio" name={name} value={0} defaultChecked={from == 0} />
          </label>
        </>
      )
    }
    {range(1, to + 1).map((i) => (
      <>
        <label title={to < 10 ? undefined : `${i}`}>
          <input type="radio" name={name} value={i} defaultChecked={i == from} />
        </label>
      </>
    ))}
  </div>
);

export const CounterValue = ({ className, children, ...rest }: DOMProps<"div">) => (
  <div className={cn(className, "sheet-component--counter-value")} {...rest}>
    {children}
  </div>
);
