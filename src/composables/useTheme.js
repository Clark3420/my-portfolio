
import { ref, watch } from 'vue'

const theme = ref('light')
let initialized = false

function initializeTheme() {
  if (initialized) return

  const savedTheme = localStorage.getItem('portfolio-theme')

  theme.value = savedTheme === 'dark' ? 'dark' : 'light'

  watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
  }, { flush: 'sync' })

  document.documentElement.setAttribute('data-theme', theme.value)

  initialized = true
}

export function useTheme() {
  initializeTheme()

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme,
  }
}
