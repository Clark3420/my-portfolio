
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="contact-cta">
    <div class="container-custom">
      <div class="contact-content">
        <span class="section-eyebrow">
          HAVE SOMETHING IN MIND?
        </span>

        <h2>
          Let's create
          <span>something meaningful.</span>
        </h2>

        <p>
          I'm always open to discussing new opportunities, collaborations,
          and ideas. If you'd like to connect, I'd be happy to hear from you.
        </p>

        <RouterLink to="/contact" class="contact-button">
          Get in touch
          <span>↗</span>
        </RouterLink>
      </div>

      <div class="contact-decoration">
        <span>CO.</span>
      </div>

      <div class="contact-bottom">
        <span>OPEN TO PROFESSIONAL OPPORTUNITIES</span>
        <span>LET'S START A CONVERSATION.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-cta {
  position: relative;
  overflow: hidden;
  padding: 8rem 0 2rem;
  background-color: var(--color-primary);
}

.contact-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding-bottom: 7rem;
}

.section-eyebrow {
  color: var(--color-accent);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
}

.contact-content h2 {
  margin: 1.5rem 0;
  color: var(--color-text-inverse);
  font-size: clamp(3.5rem, 7vw, 6rem);
  letter-spacing: -0.045em;
  line-height: 1.05;
}

.contact-content h2 span {
  display: block;
  color: var(--color-accent);
  font-style: italic;
}

.contact-content p {
  max-width: 480px;
  margin-bottom: 2rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.9;
}

.contact-button {
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 1.5rem;
  color: var(--color-primary);
  background-color: var(--color-background);
  font-size: 0.85rem;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.contact-button:hover {
  color: var(--color-text-inverse);
  background-color: var(--color-secondary);
}

.contact-button span {
  font-size: 1.1rem;
}

.contact-decoration {
  position: absolute;
  right: 0;
  bottom: 5rem;
  color: rgb(233 224 209 / 5%);
  font-family: var(--font-heading);
  font-size: clamp(10rem, 25vw, 22rem);
  line-height: 1;
  pointer-events: none;
}

.contact-bottom {
  display: flex;
  min-height: 65px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgb(233 224 209 / 20%);
}

.contact-bottom span {
  color: var(--color-text-muted);
  font-size: 0.62rem;
  letter-spacing: 0.13em;
}

@media (max-width: 767px) {
  .contact-cta {
    padding-top: 5rem;
  }

  .contact-content {
    padding-bottom: 5rem;
  }

  .contact-content h2 {
    font-size: clamp(3.2rem, 11vw, 4.5rem);
  }

  .contact-content p {
    font-size: 0.9rem;
  }

  .contact-decoration {
    right: -2rem;
    bottom: 7rem;
  }

  .contact-bottom {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }
}
</style>
