import { ComponentProps, JSX, PropsWithChildren } from "react";
import translation from "./translation.json";

export type I18n = keyof typeof translation;

export type DOMProps<T extends keyof JSX.IntrinsicElements, P = unknown> = keyof JSX.IntrinsicElements extends T
  ? never
  : ComponentProps<T> & PropsWithChildren<P>;
