import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, shortcuts: ShortcutOptions[]) => {
  return shortcuts.filter(shortcut => shortcut.name !== 'goto')
})