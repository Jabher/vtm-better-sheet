import {DOMProps, I18n} from "../types.ts";
import cn from "classnames";
import "./ResizingTextarea.css";
import {blurry} from "./utility/Blurry.tsx";
import translation from "../translation.json";

export const ResizingTextarea = ({name, className, style, i18n, labelName, ...rest}: DOMProps<'textarea'> & {
    i18n?: I18n,
    labelName?: string
}) =>
    <div className={cn("sheet-component sheet-component--resizing-textarea", className)} style={style}>
        <div className="sheet-component--resizing-textarea-container">
            <textarea name={name} rows={1} {...rest}/>
            <span
                // @ts-ignore
                name={name}/>
        </div>
        {
            i18n
                ? <label data-i18n={i18n} style={{...blurry(5, 20)}}>{translation[i18n]}</label>
                : labelName
                    ? <label style={{...blurry(5, 20)}}>{labelName}</label>
                : null
        }
    </div>
