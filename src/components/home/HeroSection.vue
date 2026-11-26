
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero-section">
    <div class="container-custom hero-container">
      <div class="hero-content">
        <span class="hero-eyebrow">
          <span class="eyebrow-line"></span>
          WEB DEVELOPER & CREATIVE PROBLEM SOLVER
        </span>

        <h1>
          Building thoughtful
          <span>digital experiences.</span>
        </h1>

        <p class="hero-description">
          I'm a web developer focused on building practical, intuitive, and
          meaningful applications through thoughtful design and technology.
        </p>

        
        <div class="hero-actions">
          <RouterLink to="/projects" class="button-primary">
            Explore my work
            <span>↗</span>
          </RouterLink>

          <RouterLink to="/about" class="button-secondary">
            More about me
          </RouterLink>

          <a href="/resume/test.pdf" class="button-secondary" download>
            Download resume
            <span>↓</span>
          </a>
        </div>

        <div class="hero-meta">
          <span>BASED IN THE PHILIPPINES</span>
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="portrait-frame">
          <div class="portrait-placeholder">
            <div class="portrait-sun"></div>
            <div class="portrait-shadow"></div>

            <div class="portrait-caption">
              <span>01 / PROFILE</span>
              <span>CLARK ORTIZ</span>
            </div>
          </div>

          <div class="portrait-side-label">
            PERSONAL PORTFOLIO — 2026
          </div>
        </div>

        <div class="hero-decoration">CO.</div>
      </div>
    </div>

    <div class="hero-bottom">
      <div class="container-custom hero-bottom-content">
        <span>DESIGNING WITH PURPOSE</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  min-height: calc(100svh - var(--navbar-height));
  flex-direction: column;
  overflow: hidden;
}

.hero-container {
  display: grid;
  flex: 1;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 4rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.hero-content {
  max-width: 650px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-secondary);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.17em;
}

.eyebrow-line {
  width: 32px;
  height: 1px;
  background-color: var(--color-secondary);
}

.hero-content h1 {
  margin: 2rem 0;
  font-size: clamp(3.2rem, 6vw, 5.8rem);
  letter-spacing: -0.045em;
  line-height: 1.04;
}

.hero-content h1 span {
  display: block;
  color: var(--color-secondary);
  font-style: italic;
}

.hero-description {
  max-width: 480px;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.button-primary,
.button-secondary {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.85rem;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.button-primary {
  padding: 0 1.5rem;
  color: var(--color-text-inverse);
  background-color: var(--color-primary);
}

.button-primary:hover {
  color: var(--color-text-inverse);
  background-color: var(--color-secondary);
}

.button-primary span {
  font-size: 1.1rem;
}

.button-secondary {
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
}

.button-secondary:hover {
  color: var(--color-secondary);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
  color: var(--color-text-muted);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
}

.hero-visual {
  position: relative;
  width: 100%;
  max-width: 460px;
  justify-self: end;
}

.portrait-frame {
  position: relative;
  padding: 1rem;
  background-color: var(--color-surface);
}

.portrait-placeholder {
  position: relative;
  display: flex;
  min-height: 520px;
  overflow: hidden;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: #d4c5ac;
  isolation: isolate;
}

.portrait-sun {
  position: absolute;
  top: -10%;
  right: -15%;
  width: 75%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #e9dfc9;
  z-index: -1;
}

.portrait-shadow {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    125deg,
    transparent 25%,
    rgb(58 42 32 / 12%) 25%,
    rgb(58 42 32 / 12%) 42%,
    transparent 42%
  );
}

.portrait-caption {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #3a2a20;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
}

.portrait-side-label {
  position: absolute;
  top: 50%;
  right: -2.5rem;
  color: var(--color-text-muted);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  writing-mode: vertical-rl;
  transform: translateY(-50%);
}

.hero-decoration {
  position: absolute;
  bottom: -3.5rem;
  left: -3rem;
  color: var(--color-accent);
  font-family: var(--font-heading);
  font-size: 5rem;
  opacity: 0.5;
  z-index: -1;
}

.hero-bottom {
  border-top: 1px solid var(--color-border);
}

.hero-bottom-content {
  display: flex;
  min-height: 55px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-muted);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
}

@media (max-width: 991px) {
  .hero-container {
    grid-template-columns: 1fr 0.8fr;
    gap: 2rem;
  }

  .hero-content h1 {
    font-size: clamp(3rem, 6vw, 4.5rem);
  }

  .portrait-placeholder {
    min-height: 420px;
  }
}

@media (max-width: 767px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .hero-content h1 {
    font-size: clamp(3.2rem, 11vw, 4.5rem);
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-meta {
    margin-top: 2.5rem;
    gap: 0.8rem 1.5rem;
  }

  .hero-visual {
    width: 85%;
    max-width: 420px;
    justify-self: center;
  }

  .portrait-placeholder {
    min-height: 450px;
  }

  .hero-bottom-content {
    gap: 1rem;
    font-size: 0.55rem;
  }
}

@media (max-width: 480px) {
  .hero-eyebrow {
    font-size: 0.58rem;
  }

  .hero-content h1 {
    font-size: 3.1rem;
  }

  .hero-actions {
    align-items: flex-start;
    gap: 1rem;
  }

  .portrait-placeholder {
    min-height: 380px;
  }

  .portrait-side-label {
    right: -1.8rem;
  }
}
</style>
