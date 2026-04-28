import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof window === 'undefined') return

  const forceLightMode = () => {
    try {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('vueuse-color-scheme', 'light')
    } catch {
      // ignore
    }
  }

  requestAnimationFrame(forceLightMode)
  window.addEventListener('load', forceLightMode)
})