import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import inliner from 'postcss-image-inliner'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                inliner({
                    maxFileSize: 100 * 1024
                }),
                autoprefixer({})
            ],
        }
    }
})

