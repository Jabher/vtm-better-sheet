/// <reference types="vite/client" />


import {HTMLAttributes} from "react";
import translation from "./translation.json"

declare namespace React {
    interface DOMAttributes<T> {
        "data-i18n": keyof translation
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: "submit" | "reset" | "button" | "roll" | undefined;
    }
}
