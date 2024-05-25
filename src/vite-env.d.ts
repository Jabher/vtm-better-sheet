/// <reference types="vite/client" />

declare module "react/index.d.ts" {
    import translation from "./translation.json"
    interface DOMAttributes<T> {
        "data-i18n": keyof translation
    }
}
