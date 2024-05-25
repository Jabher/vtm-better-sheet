import {PropsWithChildren} from "react";

export const If = ({is, children}: PropsWithChildren<{ is: any }>) =>
    is ? children : null
