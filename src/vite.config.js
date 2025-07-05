import { defineConfig } from "vite";
import path from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main:path.resolve(__dirname, 'index.html'),
                pokemon: path.resolve(__dirname, 'pokemon.html')
            }
        }}
})