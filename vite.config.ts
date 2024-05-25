import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import compileTime from "vite-plugin-compile-time"

// todo production build needs to produce
// @import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');,
// not
// @import 'https://fonts.googleapis.com/css?family=Poiret+One&display=swap';
// due to roll20 security regexps

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

