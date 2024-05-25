import cn from "classnames";
import "./Input.css";
import { DOMProps, I18n } from "../types.ts";
import { H5 } from "./globals/Headings.tsx";
import { Labelled } from "./Labelled.tsx";

export const Input = ({
  i18n,
  className,
  postfix,
  disabled,
  name,
  ...rest
}: DOMProps<
  "input",
  {
    i18n?: I18n;
    postfix?: I18n;
  }
>) => {
  const inputProps = {
    type: "text",
    className: cn("sheet-binput", className),
    minLength: 1, // for css empty-not-empty selectors
    required: false,
    spellCheck: false,
    defaultValue: rest.type == "number" ? 0 : undefined,
    name: `attr_${name}` as const,
    ...rest,
  };
  return i18n ? (
    <Labelled className="sheet-element-input" i18n={i18n}>
      <div className="sheet-element-input-container">
        {disabled ? <span className="sheet-binput" name={inputProps.name} /> : <input {...inputProps} />}
        {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix} /> : null}
      </div>
    </Labelled>
  ) : (
    <div className="sheet-element-input">
      <div className="sheet-element-input-container">
        {disabled ? <span className="sheet-binput" name={inputProps.name} /> : <input {...inputProps} />}
        {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix} /> : null}
      </div>
    </div>
  );
};
