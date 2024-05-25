import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./ResizingTextarea.css";

export const ResizingTextarea = ({
  name,
  className,
  style,
  i18n,
  ...rest
}: DOMProps<"textarea"> & {
  i18n?: I18n;
}) => (
  <div className={cn("sheet-component sheet-component--resizing-textarea", className)} style={style}>
    <div className="sheet-component--resizing-textarea-container">
      <textarea name={name} rows={1} {...rest} />
      <span
        // @ts-expect-error name is custom prop by roll20
        name={name}
      />
    </div>
    {i18n ? <label data-i18n={i18n}></label> : null}
  </div>
);

export const Textarea = ({
  name,
  className,
  style,
  i18n,
  ...rest
}: DOMProps<"textarea"> & {
  i18n?: I18n;
}) => (
  <div className={cn("sheet-component sheet-component--textarea", className)} style={style}>
    <textarea name={name} rows={1} {...rest} />
    {i18n ? <label data-i18n={i18n}></label> : null}
  </div>
);
