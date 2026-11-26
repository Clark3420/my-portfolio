
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()

const isMenuOpen = ref(false)
const route = useRoute()

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
]

function closeMenu() {
  isMenuOpen.value = false
}

function handleResize() {
  if (window.innerWidth >= 992) {
    closeMenu()
  }
}

watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => closeMenu(),
)

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header">
    <nav class="navbar">
      <div class="container-custom navbar-container">
        <RouterLink to="/" class="navbar-brand" @click="closeMenu">
          CO<span>.</span>
        </RouterLink>

        <ul class="navbar-nav desktop-nav">
          <li v-for="item in navigation" :key="item.path" class="nav-item">
            <RouterLink
              :to="item.path"
              class="nav-link"
              :class="{ active: route.path === item.path }"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
        <button
          class="theme-toggle desktop-theme-toggle"
          type="button"
          @click="toggleTheme"
        >
          {{ theme === 'light' ? 'Dark mode' : 'Light mode' }}
        </button>

        <button
          class="menu-toggle"
          :class="{ 'is-open': isMenuOpen }"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <Transition name="backdrop">
      <button
        v-if="isMenuOpen"
        class="menu-backdrop"
        type="button"
        @click="closeMenu"
      ></button>
    </Transition>

    <Transition name="drawer">
      <aside v-if="isMenuOpen" class="mobile-drawer">
        <div class="drawer-header">
          <span class="drawer-label">NAVIGATION</span>

          <button class="drawer-close" type="button" @click="closeMenu">
            ×
          </button>
        </div>

        <ul class="drawer-nav">
          <li v-for="(item, index) in navigation" :key="item.path">
            <RouterLink
              :to="item.path"
              class="drawer-link"
              :class="{ active: route.path === item.path }"
              @click="closeMenu"
            >
              <span class="drawer-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              {{ item.label }}
            </RouterLink>
          </li>
        </ul>

        <div class="drawer-footer">
          <button
            class="theme-switch"
            :class="{ 'is-dark': theme === 'dark' }"
            type="button"
            @click="toggleTheme"
          >
            <span class="theme-switch-label">
              {{ theme === 'light' ? 'Light mode' : 'Dark mode' }}
            </span>

            <span class="theme-switch-track">
              <span class="theme-switch-thumb"></span>
            </span>
          </button>
          <span>Clark Ortiz</span>
          <span>Portfolio © {{ new Date().getFullYear() }}</span>
        </div>
      </aside>  
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 1000;
  min-height: var(--navbar-height);
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
} 

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--navbar-height);
}

.navbar-brand {
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 1.8rem;
}

.navbar-brand span {
  color: var(--color-secondary);
}

.desktop-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.75rem 1rem !important;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.desktop-nav .nav-link:hover,
.desktop-nav .nav-link.active {
  color: var(--color-primary);
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 44px;
  padding: 11px;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  cursor: pointer;
  z-index: 1002;
}

.menu-toggle span {
  width: 100%;
  height: 1.5px;
  background-color: var(--color-primary);
  transition:
    transform var(--transition-normal),
    opacity var(--transition-fast);
}

.menu-toggle.is-open span:first-child {
  transform: translateY(7.5px) rotate(45deg);
}

.menu-toggle.is-open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-open span:last-child {
  transform: translateY(-7.5px) rotate(-45deg);
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgb(25 20 15 / 45%);
  border: none;
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1002;
  display: flex;
  width: min(85%, 380px);
  height: 100dvh;
  padding: 2rem;
  flex-direction: column;
  background-color: var(--color-background);
  border-left: 1px solid var(--color-border);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.drawer-label {
  color: var(--color-text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
}

.drawer-close {
  color: var(--color-primary);
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
}

.drawer-nav {
  display: flex;
  margin: 2rem 0;
  padding: 0;
  flex-direction: column;
  list-style: none;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 1.7rem;
  border-bottom: 1px solid var(--color-border);
  transition:
    color var(--transition-fast),
    padding-left var(--transition-fast);
}

.drawer-link:hover,
.drawer-link.active {
  padding-left: 0.5rem;
  color: var(--color-secondary);
}

.drawer-number {
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: 0.7rem;
}

.drawer-footer {
  display: flex;
  margin-top: auto;
  padding-top: 1.5rem;
  flex-direction: column;
  gap: 0.3rem;
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 300ms ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@media (max-width: 991px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

.theme-toggle {
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: transparent;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.8rem;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);
}

.theme-toggle:hover {
  background-color: var(--color-surface);
  border-color: var(--color-secondary);
}

.desktop-theme-toggle {
  margin-left: 1rem;
}

.mobile-theme-toggle {
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: left;
}

@media (max-width: 991px) {
  .desktop-theme-toggle {
    display: none;
  }
}

.theme-switch {
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.85rem 1rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background-color: var(--color-surface);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

.theme-switch-track {
  display: flex;
  width: 42px;
  height: 23px;
  padding: 3px;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background-color: var(--color-background);
  transition: background-color var(--transition-normal);
}

.theme-switch-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  transform: translateX(0);
  transition: transform var(--transition-normal);
}

.theme-switch.is-dark .theme-switch-thumb {
  transform: translateX(18px);
}

.theme-switch:hover {
  border-color: var(--color-secondary);
}
</style>
