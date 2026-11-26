
<template>
  <footer class="site-footer">
    <div class="container-custom footer-content">
      <p>© {{ new Date().getFullYear() }} Clark Ortiz. All rights reserved.</p>
      <p>Designed and developed with care.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-content p {
  margin: 0;
  font-size: 0.85rem;
}

@media (max-width: 576px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
