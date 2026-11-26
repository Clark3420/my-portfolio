
<script setup>
import { RouterLink } from 'vue-router'

const skillGroups = [
  {
    number: '01',
    category: 'LANGUAGES',
    description: 'The languages I use to build applications.',
    technologies: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'PHP'],
  },
  {
    number: '02',
    category: 'FRONTEND',
    description: 'Tools and frameworks for building user interfaces.',
    technologies: ['Vue.js', 'Bootstrap'],
  },
  {
    number: '03',
    category: 'BACKEND & DATABASE',
    description: 'Technologies for application logic and data management.',
    technologies: ['Django', 'MySQL'],
  },
  {
    number: '04',
    category: 'DEVELOPMENT TOOLS',
    description: 'Tools I use throughout the development workflow.',
    technologies: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
]
</script>

<template>
  <section class="skills-preview">
    <div class="container-custom">
      <div class="skills-heading">
        <div>
          <span class="section-eyebrow">MY TECHNICAL TOOLKIT</span>
          <h2>Tools & <span>technologies.</span></h2>
        </div>

        <p>
          A collection of technologies and tools I've worked with while
          exploring and developing software applications.
        </p>
      </div>

      <div class="skills-list">
        <article
          v-for="group in skillGroups"
          :key="group.number"
          class="skill-group"
        >
          <div class="skill-category">
            <span class="skill-number">{{ group.number }}</span>
            <h3>{{ group.category }}</h3>
            <p>{{ group.description }}</p>
          </div>

          <div class="skill-technologies">
            <span
              v-for="technology in group.technologies"
              :key="technology"
              class="technology-item"
            >
              {{ technology }}
            </span>
          </div>
        </article>
      </div>

      <div class="skills-bottom">
        <span>LEARNING IS PART OF THE PROCESS.</span>
        <RouterLink to="/about">
          More about my background <span>↗</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-preview {
  padding: 8rem 0;
  background-color: var(--color-surface);
}

.skills-heading {
  display: grid;
  grid-template-columns: 1fr 0.65fr;
  align-items: end;
  gap: 4rem;
  margin-bottom: 4rem;
}

.section-eyebrow {
  color: var(--color-secondary);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.skills-heading h2 {
  margin: 1rem 0 0;
  font-size: clamp(3rem, 5vw, 4.5rem);
  letter-spacing: -0.045em;
}

.skills-heading h2 span {
  color: var(--color-secondary);
  font-style: italic;
}

.skills-heading > p {
  max-width: 420px;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.9;
}

.skills-list {
  border-top: 1px solid var(--color-border);
}

.skill-group {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.skill-category {
  display: grid;
  grid-template-columns: 35px 1fr;
  align-content: start;
  column-gap: 1rem;
}

.skill-number {
  grid-row: span 2;
  padding-top: 0.2rem;
  color: var(--color-secondary);
  font-size: 0.7rem;
}

.skill-category h3 {
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.skill-category p {
  grid-column: 2;
  margin: 0.7rem 0 0;
  font-size: 0.82rem;
  line-height: 1.7;
}

.skill-technologies {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: 0.75rem;
}

.technology-item {
  padding: 0.7rem 1rem;
  color: var(--color-primary);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  font-size: 0.8rem;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.technology-item:hover {
  color: var(--color-text-inverse);
  background-color: var(--color-primary);
}

.skills-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;
}

.skills-bottom > span {
  color: var(--color-text-muted);
  font-size: 0.62rem;
  letter-spacing: 0.13em;
}

.skills-bottom a {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.5rem;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.85rem;
}

.skills-bottom a:hover {
  color: var(--color-secondary);
}

@media (max-width: 767px) {
  .skills-preview {
    padding: 5rem 0;
  }

  .skills-heading {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .skills-heading h2 {
    font-size: clamp(3rem, 10vw, 4rem);
  }

  .skill-group {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
  }

  .skills-bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
