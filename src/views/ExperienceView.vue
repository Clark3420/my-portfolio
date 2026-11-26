
<template>
  <div class="experience-page">
    <section class="experience-intro container-custom py-5">
      <p class="section-eyebrow">MY PROFESSIONAL JOURNEY</p>
      <h1>Experience & contributions.</h1>
      <p class="experience-lead">
        My professional experience, the projects I've contributed to,
        and the skills I've developed along the way.
      </p>
    </section>

    <section class="experience-work container-custom py-5">
      <div class="row g-5">
        <div class="col-lg-4">
          <p class="section-eyebrow">01 / WORK EXPERIENCE</p>
          <h2>Professional background</h2>
        </div>

        <div class="col-lg-8">
          <div class="experience-entry">
            <span class="detail-date">
              FEBRUARY 2025 — JULY 2025
            </span>

            <h3>Full Stack Developer Intern</h3>
            <p class="experience-company">
              Kaizo IT-Solutions · Quezon City
            </p>

            <p>
              Worked on web application development and contributed
              to internal business software projects during my internship.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="experience-contributions container-custom py-5">
      <div class="row g-5">
        <div class="col-lg-4">
          <p class="section-eyebrow">02 / CONTRIBUTIONS</p>
          <h2>What I worked on</h2>
        </div>

        <div class="col-lg-8">
          <div class="contribution-entry">
            <span class="contribution-number">01</span>
            <h3>Loan Management Website</h3>
            <p>
              Contributed to the development of a loan management
              website using Django for the backend and Bootstrap
              for the frontend.
            </p>
            <div class="technology-list">
              <span>Django</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div class="contribution-entry">
            <span class="contribution-number">02</span>
            <h3>ERP System</h3>
            <p>
              Contributed to the development of an enterprise
              resource planning system as part of the development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* Section dividers */
.experience-work,
.experience-contributions {
  border-top: 1px solid var(--color-border);
}

/* Work experience entry */
.experience-entry {
  padding-left: 1.5rem;
  border-left: 2px solid var(--color-accent);
}

.experience-company {
  margin-bottom: 1.25rem;
}

/* Contribution entries */
.contribution-entry {
  padding: 0 0 2rem 1.5rem;
  margin-bottom: 2rem;
  border-left: 2px solid var(--color-accent);
}

.contribution-entry:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Contribution numbers */
.contribution-number {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

/* Technology labels */
.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.technology-list span {
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  color: var(--color-secondary);
  font-size: 0.8rem;
}

/* Mobile refinements */
@media (max-width: 767.98px) {
  .experience-entry,
  .contribution-entry {
    padding-left: 1rem;
  }
}
</style>
