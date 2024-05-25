import cn from "classnames";
import { DOMProps, I18n } from "../types.ts";
import "./ResizingTextarea.css";
import { Labelled } from "./Labelled.tsx";

export const ResizingTextarea = ({
  name,
  className,
  style,
  i18n,
  ...rest
}: DOMProps<"textarea"> & {
  i18n?: I18n;
}) => (
  <Labelled className={cn("sheet-component sheet-component--resizing-textarea", className)} style={style} i18n={i18n}>
    <div className="sheet-component--resizing-textarea-container">
      <textarea name={`attr_${name}`} rows={1} {...rest} />
      <span name={`attr_${name}`} />
    </div>
  </Labelled>
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
    <textarea name={`attr_${name}`} rows={1} {...rest} />
    {i18n ? <label data-i18n={i18n}></label> : null}
  </div>
);
