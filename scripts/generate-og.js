// scripts/generate-og.js
// Converts public/og.svg → public/og.png (1200×630) at build time.
// Requires: @resvg/resvg-js (devDependency)
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svgPath = join(__dirname, '../public/og.svg')
const pngPath = join(__dirname, '../public/og.png')

const svg = readFileSync(svgPath, 'utf8')
const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
const pngData = resvg.render()
writeFileSync(pngPath, pngData.asPng())

console.log('og.png generated →', pngPath)
