
<template>
  <div class="projects-page">
    <section class="projects-intro container-custom py-5">
      <p class="section-eyebrow">SELECTED WORK</p>
      <h1>Projects & explorations.</h1>
      <p class="projects-lead">
        A collection of work, ideas, and things I've built.
      </p>
    </section>

    <section class="projects-empty container-custom py-5">
      <div class="empty-content">
        <div class="empty-icon">
          <span>CO.</span>
        </div>

        <p class="section-eyebrow">CURRENTLY IN PROGRESS</p>
        <h2>Currently curating my work.</h2>
        <p>
          I'm preparing a collection of projects that reflect my skills,
          experience, and approach to development.
          Check back soon.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-empty {
  display: flex;
  min-height: 420px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--color-border);
}

.empty-content {
  display: flex;
  max-width: 480px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.empty-icon {
  display: flex;
  width: 76px;
  height: 76px;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: 1.5rem;
}

.empty-content h2 {
  margin-bottom: 1rem;
}

.empty-content > p:last-child {
  max-width: 420px;
  color: var(--color-text-muted);
  line-height: 1.8;
}

@media (max-width: 767.98px) {
  .projects-empty {
    min-height: 360px;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .empty-content {
    padding: 0 0.5rem;
  }
}
</style>
