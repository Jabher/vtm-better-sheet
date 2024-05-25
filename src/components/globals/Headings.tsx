import { ComponentProps } from "react";
import translation from "../../translation.json";
import { I18n } from "../../types.ts";
import "./Headings.css";

type HeadingProps = {
  i18n: I18n;
} & ComponentProps<"h1">;

// todo fix data-i18n + children
export const H1 = ({ i18n, children, ...rest }: HeadingProps) => (
  <h1 data-i18n={i18n} {...rest}>
    {translation[i18n]}
    {children}
  </h1>
);
export const H2 = ({ i18n, children, ...rest }: HeadingProps) => (
  <h2 data-i18n={i18n} {...rest}>
    {translation[i18n]}
    {children}
  </h2>
);
export const H3 = ({ i18n, children, ...rest }: HeadingProps) => (
  <h3 data-i18n={i18n} {...rest}>
    {translation[i18n]}
    {children}
  </h3>
);
export const H4 = ({ i18n, children, ...rest }: HeadingProps) => (
  <h4 data-i18n={i18n} {...rest}>
    {translation[i18n]}
    {children}
  </h4>
);
export const H5 = ({ i18n, children, ...rest }: HeadingProps) => (
  <h5 data-i18n={i18n} {...rest}>
    {translation[i18n]}
    {children}
  </h5>
);
