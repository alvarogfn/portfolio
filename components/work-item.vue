<template>
  <section class="work-item">
    <hash-title is="h3" :id="id">
      {{ title }}
    </hash-title>
    <p class="work-item__period">
      {{ date }}
    </p>
    <p>
      {{ content }}
    </p>
    <aside class="work-item__skills">
      <skills-tags :items="skills" />
    </aside>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    content: string;
    date: string;
    id: string;
    skills: string[];
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped>
  .work-item {
    &__period {
      font-size: 0.9rem;
      opacity: 0.8;
      margin: 10px 0;
    }
    &__skills {
      margin: 10px 0;
    }
  }
</style>
