import translation from './translation.json'
import {ComponentProps, JSX, PropsWithChildren} from "react";

export type I18n = keyof typeof translation;

export type DOMProps<T extends keyof JSX.IntrinsicElements, P extends unknown = {}> =
    keyof JSX.IntrinsicElements extends T ? never : ComponentProps<T> & PropsWithChildren<P>
