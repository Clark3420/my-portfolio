
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="about-preview">
    <div class="container-custom">
      <div class="about-grid">
        <div class="about-heading">
          <span class="section-eyebrow">A LITTLE ABOUT ME</span>

          <h2>
            Driven by curiosity.
            <span>Built through creativity.</span>
          </h2>

          <RouterLink to="/about" class="about-link">
            More about me
            <span>↗</span>
          </RouterLink>
        </div>

        <div class="about-content">
          <p class="about-introduction">
            I'm a web developer with a background in Computer Engineering
            Technology and an interest in creating meaningful digital
            experiences.
          </p>

          <p>
            My approach combines problem-solving, continuous learning, and
            attention to detail. I enjoy exploring how technology can turn
            ideas into practical and intuitive applications.
          </p>

          <p>
            I'm continuously developing my skills and looking forward to
            opportunities where I can contribute, collaborate, and grow as a
            developer.
          </p>

          <div class="about-details">
            <div class="detail-item">
              <span class="detail-label">EDUCATION</span>
              <span class="detail-value">
                Bachelor of Engineering Technology
              </span>
              <span class="detail-note">
                Major in Computer Engineering Technology
              </span>
              <span class="detail-note">
                Technological University of the Philippines – Manila
              </span>
            </div>

            <div class="detail-item">
              <span class="detail-label">FOCUS</span>
              <span class="detail-value">Web Development</span>
              <span class="detail-note">
                Frontend and full-stack development
              </span>
            </div>
          </div>

          <RouterLink to="/about" class="about-mobile-link">
            Discover more about me <span>↗</span>
          </RouterLink>
        </div>
      </div>

      <div class="about-bottom">
        <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
        <span>PHILIPPINES · 2026</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-preview {
  padding: 8rem 0;
  background-color: var(--color-background);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 6rem;
  padding-bottom: 5rem;
}

.section-eyebrow {
  color: var(--color-secondary);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.about-heading h2 {
  max-width: 580px;
  margin: 1.5rem 0 2.5rem;
  font-size: clamp(3rem, 5vw, 4.8rem);
  letter-spacing: -0.045em;
  line-height: 1.08;
}

.about-heading h2 span {
  display: block;
  color: var(--color-secondary);
  font-style: italic;
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 0.5rem;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.85rem;
}

.about-link:hover,
.about-mobile-link:hover {
  color: var(--color-secondary);
}

.about-content {
  padding-top: 2rem;
}

.about-content p {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.9;
}

.about-content .about-introduction {
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 1.65rem;
  line-height: 1.5;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.detail-label {
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.detail-value {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
}

.detail-note {
  color: var(--color-text-muted);
  font-size: 0.78rem;
  line-height: 1.6;
}

.about-mobile-link {
  display: none;
}

.about-bottom {
  display: flex;
  min-height: 55px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.62rem;
  letter-spacing: 0.13em;
}

@media (max-width: 991px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-content {
    padding-top: 0;
  }
}

@media (max-width: 767px) {
  .about-preview {
    padding: 5rem 0;
  }

  .about-grid {
    padding-bottom: 3rem;
  }

  .about-heading h2 {
    font-size: clamp(3rem, 10vw, 4rem);
  }

  .about-link {
    display: none;
  }

  .about-content .about-introduction {
    font-size: 1.4rem;
  }

  .about-details {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .about-mobile-link {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    color: var(--color-primary);
    font-size: 0.85rem;
  }

  .about-bottom {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
  }
}
</style>
