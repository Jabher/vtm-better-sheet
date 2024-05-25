import translation from '../translation.json'
import "./Section.css"
import {blurry} from "./utility/Blurry.tsx";
import cn from "classnames";
import {DOMProps, I18n} from "../types.ts";

export const Section = ({children, ...rest}: DOMProps<'div'>) => <div {...rest}>
    {children}
</div>

export const SectionHead = ({i18n}: {
    i18n?: I18n
}) => <div className="sheet-element-section-heading">
    {
        i18n
            ? <h3
                data-i18n={i18n}
                style={{
                    ...blurry(10, 50),
                }}
            >
                {translation[i18n]}
            </h3>
            : null
    }
</div>

export const SectionBody = ({className, children, ...rest}: DOMProps<'div'>) =>
    <div className={cn("sheet-element-section-body", className)} {...rest}>
        {children}
    </div>
