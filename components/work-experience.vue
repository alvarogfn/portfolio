<template>
  <article>
    <hash-title id="work-experience">
      {{ t("work_experience.title") }}
    </hash-title>
    <work-item
      :start-date="new Date()"
      :end-date="new Date()"
      content="Gestão de documentos"
      title="Auxiliar Administrativo (Jovem Aprendiz) na ADM"
    />
  </article>
</template>

<script setup lang="ts">
  const { t } = useI18n();
</script>

<style scoped></style>
