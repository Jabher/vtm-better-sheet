import {ComponentProps} from "react";
import cn from "classnames";
import translation from '../translation.json'
import './Input.css'
import {blurry} from "./utility/Blurry.tsx";
import {DOMProps, I18n} from "../types.ts";

export const Input = ({i18n, className, ...rest}: ComponentProps<'input'> & { i18n?: I18n }) => {
    const inputProps: DOMProps<'input'> = {
        type: 'text',
        className: cn("sheet-binput", className),
        minLength: 1, // for css empty-not-empty selectors
        required: true,
        ...rest
    }
    if (i18n) {
        const label = `input_${i18n}`
        return <div className="sheet-element-input">
            <input id={label} {...inputProps}/>
            <label htmlFor={label} data-i18n={i18n} style={{...blurry(5, 20)}}>{translation[i18n]}</label>
        </div>
    } else {
        return <div className="sheet-element-input">
            <input {...inputProps}/>
        </div>
    }
}
