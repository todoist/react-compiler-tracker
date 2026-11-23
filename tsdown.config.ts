import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: 'esm',
    fixedExtension: false,
    unbundle: true,
    platform: 'node',
    dts: false,
})
