import cn from "classnames";
import {DOMProps} from "../types.ts";

export const ActionButton = ({children, className, name, ...rest}: DOMProps<'input'>) =>
        <button
        // @ts-ignore
            type="action"
            name={`act_${name}`}
            className={cn("sheet-tab", className)}
            {...rest}
        >
            {children}
        </button>
