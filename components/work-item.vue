<template>
  <section>
    <hash-title is="h3" id="ADM">
      {{ title }}
    </hash-title>
    <p>
      {{ content }}
    </p>
    <aside>
      <tag-list :items="['Gestão de Planilhas']" />
    </aside>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    content: string;
    startDate: Date;
    endDate?: Date;
  }

  defineProps<Props>();
</script>

<style scoped></style>
