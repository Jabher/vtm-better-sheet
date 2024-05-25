import { ComponentProps } from "react";
import cn from "classnames";
import "./Input.css";
import { DOMProps, I18n } from "../types.ts";
import { H5 } from "./globals/Headings.tsx";

export const Input = ({
  i18n,
  labelName,
  className,
  postfix,
  disabled,
  ...rest
}: ComponentProps<"input"> & {
  i18n?: I18n;
  labelName?: string; // todo temp, remove with intl
  postfix?: I18n;
}) => {
  const inputProps: DOMProps<"input"> = {
    type: "text",
    className: cn("sheet-binput", className),
    minLength: 1, // for css empty-not-empty selectors
    required: false,
    spellCheck: false,
    defaultValue: rest.type == "number" ? 0 : undefined,
    ...rest,
  };
  if (i18n || labelName) {
      return (
      <div className="sheet-element-input">
        <div className="sheet-element-input-container">
            {disabled
                // @ts-ignore
                ? <span className="sheet-binput" name={inputProps.name}/>
                : <input {...inputProps} />
            }
          {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix} /> : null}
        </div>
        {i18n ? <label data-i18n={i18n}></label> : <label>{labelName}</label>}
      </div>
    );
  } else {
    return (
      <div className="sheet-element-input">
        <div className="sheet-element-input-container">
            {disabled
                // @ts-ignore
                ? <span className="sheet-binput" name={inputProps.name}/>
                : <input {...inputProps} />
            }
          {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix} /> : null}
        </div>
      </div>
    );
  }
};
