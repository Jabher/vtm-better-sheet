import { ComponentProps } from "react";
import cn from "classnames";
import "./Input.css";
import { DOMProps, I18n } from "../types.ts";
import { H5 } from "./globals/Headings.tsx";
import {Labelled} from "./Labelled.tsx";

export const Input = ({
  i18n,
  labelName,
  className,
  postfix,
  disabled,
  ...rest
}: ComponentProps<"input"> & {
  i18n?: I18n;
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
  if (i18n) {
      return (
      <Labelled className="sheet-element-input" i18n={i18n}>
        <div className="sheet-element-input-container">
            {disabled
                // @ts-ignore
                ? <span className="sheet-binput" name={inputProps.name}/>
                : <input {...inputProps} />
            }
          {postfix ? <H5 className="sheet-element-input-postfix" i18n={postfix} /> : null}
        </div>
      </Labelled>
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
