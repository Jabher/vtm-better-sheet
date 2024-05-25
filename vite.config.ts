import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import compileTime from "vite-plugin-compile-time"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        assetsInlineLimit: 1000 * 1024,
    },
    plugins: [
        compileTime(),
        react(),
    ],
    css: {
        postcss: {
            plugins: [
                nested(),
                autoprefixer({})
            ],
        }
    }
})

