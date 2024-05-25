import { ComponentProps } from "react";
import { I18n } from "../../types.ts";
import "./Headings.css";

type HeadingProps = {
  i18n: I18n;
  children?: never;
} & ComponentProps<"h1">;

export const H1 = ({ i18n, ...rest }: HeadingProps) => <h1 data-i18n={i18n} {...rest}></h1>;
export const H2 = ({ i18n, ...rest }: HeadingProps) => <h2 data-i18n={i18n} {...rest}></h2>;
export const H3 = ({ i18n, ...rest }: HeadingProps) => <h3 data-i18n={i18n} {...rest}></h3>;
export const H4 = ({ i18n, ...rest }: HeadingProps) => <h4 data-i18n={i18n} {...rest}></h4>;
export const H5 = ({ i18n, ...rest }: HeadingProps) => <h5 data-i18n={i18n} {...rest}></h5>;
