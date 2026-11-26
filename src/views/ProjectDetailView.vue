<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="container-custom py-5">
    <h1>Project Details</h1>
    <p>Project: {{ route.params.slug }}</p>
  </section>
</template>