<template>
  <nav>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
  import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

  const { locale, locales } = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  const availableLocales = computed<LocaleObject[]>(() => {
    return locales.value.filter(
      (item) => (item as LocaleObject).code !== locale.value,
    ) as LocaleObject[];
  });
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    flex-wrap: nowrap;
    padding: 10px;
    justify-content: start;
  }

  a {
    font-weight: 700;
    padding: 5px;
    border-radius: 2.5px;
    background-color: var(--secondary-color);
    color: var(--main-color);

    transition: 200ms;

    &:hover {
      opacity: 0.9;
    }
  }
</style>
