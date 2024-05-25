import translation from "./translation.json";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    "data-i18n"?: keyof translation;
    "name"?: `attr_${string}`;
  }

  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: "submit" | "reset" | "button" | "roll" | undefined;
  }
}

