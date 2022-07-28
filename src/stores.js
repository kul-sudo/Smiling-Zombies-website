import { writable } from 'svelte/store'


// All pages
const background_color = writable('#ffffff')
const font_color = writable('#000000')
const logo_color = writable('black')
const mode = writable('Dark')
const mode_color = writable('#000000')
const mode_font_color = writable('#ffffff')

export { background_color, font_color, logo_color, mode, mode_color, mode_font_color }