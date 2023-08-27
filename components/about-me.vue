<template>
  <section class="about-me">
    <hash-title id="about-me">{{ t("about_me.title") }}</hash-title>
    <p>
      {{ t("about_me.content") }}
    </p>
  </section>
</template>

<script setup lang="ts">
  const { t } = useI18n();
</script>

<style lang="scss" scoped>
  .about-me {
  }
</style>
