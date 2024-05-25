import {range} from "ramda";
import './Counter.css'
import {DOMProps} from "../types.ts";
import cn from "classnames";

export const Counter = ({from = 1, to, name, className, fade, dotStyle, ...rest}: DOMProps<'div', { from?: 0 | 1, to: number, name: string, fade?: boolean, dotStyle?: 'circle' | 'square' }>) =>
    <div
        className={cn("sheet-component sheet-component--counter", className, {
            "sheet-component--counter-startsFrom-0": from == 0,
            "sheet-component--counter-startsFrom-1": from == 1,
            "sheet-component--counter-fade": fade,
            "sheet-component--counter-style-box": dotStyle == 'square'
        })}
        {...rest}
    >
        {
            /*for counting selectors*/
            from >= 1 ? <label style={{display: "none"}}/> : <>
                <input type="radio" name={name} id={`${name}_0`} value={0}/>
                <label htmlFor={`${name}_0`} className="sheet-component--counter--label-zero"/>
            </>
        }
        {
            range(1, to + 1).map(i => <>
                <input type="radio" name={name} id={`${name}_${i}`} value={i} defaultChecked={i == 1}/>
                <label htmlFor={`${name}_${i}`}/>
            </>)
        }
    </div>

export const CounterValue = ({className, children, ...rest}: DOMProps<'div'>) =>
    <div className={cn(className, "sheet-component--counter-value")} {...rest}>{children}</div>
