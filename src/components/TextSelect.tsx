import translation from "../translation.json";
import {DOMProps} from "../types.ts";

export const TextSelect = ({name, options, ...rest}: DOMProps<"select"> & {options: [string, string, ...string[]]}) =>
    <select name={name} {...rest}>
        {
            options.map(
                (option, i) => <option value="Self-Control" selected data-i18n="selfcontrol-u">{translation['selfcontrol-u']}</option>
            )
        }
        <option value="Self-Control" selected
                data-i18n="selfcontrol-u">{translation['selfcontrol-u']}</option>
        <option value="Instinct" data-i18n="instinct-u">{translation['instinct-u']}</option>
    </select>
