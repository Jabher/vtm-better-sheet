import {ComponentProps} from "react";
import cn from "classnames";
import translation from '../translation.json'
import './Input.css'
import {blurry} from "./utility/Blurry.tsx";
import {DOMProps, I18n} from "../types.ts";
import {H5} from "../globals/Headings.tsx";

export const Input = ({i18n, labelName, className, postfix, ...rest}: ComponentProps<'input'> & {
    i18n?: I18n,
    labelName?: string, // todo temp, remove with intl
    postfix?: I18n
}) => {
    const inputProps: DOMProps<'input'> = {
        type: 'text',
        className: cn("sheet-binput", className),
        minLength: 1, // for css empty-not-empty selectors
        required: false,
        spellCheck: false,
        defaultValue: rest.type == 'number' ? 0 : undefined,
        ...rest
    }
    if (i18n || labelName) {
        const label = `input_${i18n || labelName}`
        return <div className="sheet-element-input">
            <div className="sheet-element-input-container">
                <input id={label} {...inputProps}/>
                {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix}/> : null}
            </div>
            {
                i18n
                    ? <label htmlFor={label} data-i18n={i18n} style={{...blurry(5, 20)}}>{translation[i18n]}</label>
                    : <label htmlFor={label} style={{...blurry(5, 20)}}>{labelName}</label>
            }
        </div>
    } else {
        return <div className="sheet-element-input">
        <div className="sheet-element-input-container">
                <input {...inputProps}/>
                {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix}/> : null}
            </div>
        </div>
    }
}


export const ReadonlyInput = ({name, value, className, ...rest}: ComponentProps<'input'>) =>
    <input name={name} value={value} disabled className={cn(className, "sheet-element-input-readonly")} {...rest}/>
