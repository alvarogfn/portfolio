<script lang="ts" setup>
  const { t } = useI18n();
</script>

<template>
  <main>
    <hash-title id="" as="h1">{{ t("title") }}</hash-title>
    <about-me></about-me>
    <work-experience></work-experience>
    <academic-education></academic-education>
  </main>
</template>

<style lang="scss">
  main {
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 30px;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 10px;
  }

  p {
    line-height: 1.5rem;
    text-align: justify;
    hyphens: auto;
  }
</style>
