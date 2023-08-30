<template>
  <section>
    <hash-title id="academic_education">
      {{ t("academic_education.title") }}
    </hash-title>
    <p>Formação em Sistemas de Informação na UniAtenas (2020-2023)</p>
    <skills-tag :items="['a']"></skills-tag>
  </section>
</template>

<script setup lang="ts">
  const { t } = useI18n();
</script>

<style scoped></style>
