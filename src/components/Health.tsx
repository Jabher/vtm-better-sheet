import cn from "classnames";
import {DOMProps} from "../types.ts";
import './Health.css';

export const Health = ({className, name, ...rest}: DOMProps<'input'>) =>
    <div className={cn("sheet-component sheet-component--health", className)} {...rest}>
        <select name={name}>
            <option/>
            <option value="Bashing">/</option>
            <option value="Lethal">X</option>
            <option value="Aggravated">#</option>
        </select>
    </div>
