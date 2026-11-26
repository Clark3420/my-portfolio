
<template>
  <div class="about-page">
    <!-- Introduction -->
    <section class="about-intro container-custom py-5">
      <p class="section-eyebrow">GET TO KNOW ME</p>
      <h1>A little about who I am.</h1>
      <p class="about-lead">
        I'm a web developer with a background in Computer Engineering
        Technology, interested in building thoughtful and practical digital
        experiences.
      </p>
    </section>

    <!-- Background -->
    <section class="about-background container-custom py-5">
      <div class="row g-5">
        <div class="col-lg-4">
          <p class="section-eyebrow">01 / BACKGROUND</p>
          <h2>My journey</h2>
        </div>

        <div class="col-lg-8">
          <p>
            My interest in technology led me to pursue Computer Engineering
            Technology, where I developed a foundation in programming,
            problem-solving, and software development.
          </p>

          <p>
            Over time, I became particularly interested in web development
            and creating applications that are useful, intuitive, and
            thoughtfully designed.
          </p>

          <p>
            I continue to explore new technologies, strengthen my development
            skills, and learn through building practical applications.
          </p>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="about-education container-custom py-5">
      <div class="row g-5">
        <div class="col-lg-4">
          <p class="section-eyebrow">02 / EDUCATION</p>
          <h2>Academic background</h2>
        </div>

        <div class="col-lg-8">
          <div class="about-detail">
            <span class="detail-date">2025</span>
            <h3>Bachelor of Engineering Technology</h3>
            <p>Major in Computer Engineering Technology</p>
            <p>Technological University of the Philippines – Manila</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="about-experience container-custom py-5">
      <div class="row g-5">
        <div class="col-lg-4">
          <p class="section-eyebrow">03 / EXPERIENCE</p>
          <h2>Where I've worked</h2>
        </div>

        <div class="col-lg-8">
          <div class="about-detail">
            <span class="detail-date">FEBRUARY 2025 — JULY 2025</span>
            <h3>Full Stack Developer Intern</h3>
            <p>Kaizo IT-Solutions · Quezon City</p>

            <p>
              Worked on web application development, including a loan
              management website using Django and Bootstrap, and contributed
              to an ERP system during my internship.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* Section dividers */
.about-background,
.about-education,
.about-experience {
  border-top: 1px solid var(--color-border);
}

/* Improve paragraph readability */
.about-background .col-lg-8 > p,
.about-experience .col-lg-8 > p {
  max-width: 680px;
}

/* Education and experience details */
.about-detail {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid var(--color-accent);
}

/* Date and period labels */
.detail-date {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}

/* Entry headings */
.about-detail h3 {
  margin-bottom: 0.5rem;
}

/* Mobile refinements */
@media (max-width: 767.98px) {
  .about-background,
  .about-education,
  .about-experience {
    padding-top: 2.5rem !important;
  }

  .about-detail {
    padding-left: 1rem;
  }
}
</style>
