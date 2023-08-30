<template>
  <article class="work">
    <hash-title id="work-experience" class="work__title">
      {{ t("work_experience.title") }}
    </hash-title>
    <work-item
      v-for="work in works"
      :id="work.id"
      :key="work.id"
      class="work__item"
      :title="work.title"
      :date="work.date"
      :content="work.description"
      :skills="work.skills"
    />
  </article>
</template>

<script setup lang="ts">
  import type { Work } from "~/models/Work";

  const { t } = useI18n();
  const { data: works } = await useFetch<Work[]>("/api/work");
</script>

<style lang="scss" scoped>
  .work {
    display: flex;
    flex-flow: column nowrap;

    &__title {
      margin-bottom: 15px;
    }

    &__item {
      margin: 5px 0;

      border-bottom: 1px solid var(--secondary-color);
    }
  }
</style>
