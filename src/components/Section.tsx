import "./Section.css";
import cn from "classnames";
import { PropsWithChildren } from "react";
import { DOMProps, I18n } from "../types.ts";
import { H3 } from "./globals/Headings.tsx";

export const Section = ({ children, ...rest }: DOMProps<"div">) => <div {...rest}>{children}</div>;

export const SectionHead = ({
  i18n,
  children,
}: PropsWithChildren<{
  i18n?: I18n;
}>) => (
  <div className="sheet-element-section-heading">{i18n ? <H3 i18n={i18n}>{children}</H3> : <h3>{children}</h3>}</div>
);

export const SectionBody = ({ className, children, ...rest }: DOMProps<"div">) => (
  <div className={cn("sheet-element-section-body", className)} {...rest}>
    {children}
  </div>
);
