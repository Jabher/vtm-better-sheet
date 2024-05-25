import cn from "classnames";
import {DOMProps} from "../types.ts";

export const Button = ({children, className, name, ...rest}: DOMProps<'input'>) =>
    <div className="sheet-component sheet-component--button">
        <input
            type="radio"
            name="attr_sheet_type"
            className={cn("sheet-tab", className)}
            {...rest}
        />
        <label className="sheet-tab" data-i18n={children}>
            {children}
        </label>
    </div>
