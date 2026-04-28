import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  const forceLightMode = () => {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')

    document.body.classList.remove('dark')
    document.body.classList.add('light')

    localStorage.setItem('vueuse-color-scheme', 'light')
    localStorage.setItem('slidev-color-schema', 'light')
    localStorage.setItem('slidev-color-scheme', 'light')
  }

  forceLightMode()

  window.addEventListener('load', forceLightMode)
  window.addEventListener('storage', forceLightMode)

  setInterval(forceLightMode, 300)
})