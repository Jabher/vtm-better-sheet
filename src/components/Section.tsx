import "./Section.css";
import cn from "classnames";
import { PropsWithChildren } from "react";
import { DOMProps, I18n } from "../types.ts";
import { H3 } from "./globals/Headings.tsx";

export const Section = ({
  children,
  className,
  collapseKey,
  i18n,
  ...rest
}: DOMProps<"div", { i18n?: I18n; collapseKey?: string }>) =>
  i18n ? (
    <div className={cn("sheet-element-section", className)} {...rest}>
      <SectionHead i18n={i18n} collapseKey={collapseKey} />
      <SectionBody>{children}</SectionBody>
    </div>
  ) : (
    <div className={cn("sheet-element-section", className)} {...rest}>
      {children}
    </div>
  );

export const SectionHead = ({
  i18n,
  children,
  collapseKey,
}: PropsWithChildren<{
  i18n?: I18n;
  collapseKey?: string;
}>) => (
  <div className="sheet-element-section-heading">
    {i18n ? (
      <span>
        {collapseKey ? (
          <input
            type="checkbox"
            name={`attr_${collapseKey}Expanded`}
            className="sheet-component--row-description-toggler material-symbols-outlined"
            defaultChecked={true}
          />
        ) : null}
        <H3 i18n={i18n} />
        {children}
      </span>
    ) : (
      <h3>{children}</h3>
    )}
  </div>
);

export const SectionBody = ({ className, children, ...rest }: DOMProps<"div">) => (
  <div className={cn("sheet-element-section-body", className)} {...rest}>
    {children}
  </div>
);
