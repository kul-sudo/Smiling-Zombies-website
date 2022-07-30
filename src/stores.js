import { persist, localStorage } from "@macfja/svelte-persistent-store"
import { writable } from 'svelte/store'

// All pages
const background_color = persist(writable('#ffffff'), localStorage(), 'background_color')
const font_color = persist(writable('#000000'), localStorage(), 'font_color')
const logo_color = persist(writable('black'), localStorage(), 'logo_color')
const mode = persist(writable('Dark'), localStorage(), 'mode')
const mode_color = persist(writable('#000000'), localStorage(), 'mode_color')
const mode_font_color = persist(writable('#ffffff'), localStorage(), 'mode_font_color')

export { background_color, font_color, logo_color, mode, mode_color, mode_font_color }