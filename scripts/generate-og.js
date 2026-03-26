// scripts/generate-og.js
// Converts public/og.svg → public/og.png (1200×630) at build time.
// Embeds public/images/avatar.png as base64 into the SVG before rendering.
// Requires: @resvg/resvg-js (devDependency)
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svgPath = join(__dirname, '../public/og.svg')
const pngPath = join(__dirname, '../public/og.png')
const avatarPath = join(__dirname, '../public/images/avatar.png')

let svg = readFileSync(svgPath, 'utf8')

// Embed avatar image as base64 data URI
const avatarBase64 = readFileSync(avatarPath).toString('base64')
svg = svg.replace('AVATAR_PLACEHOLDER', `data:image/png;base64,${avatarBase64}`)

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
const pngData = resvg.render()
writeFileSync(pngPath, pngData.asPng())

console.log('og.png generated →', pngPath)
