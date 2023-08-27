<template>
  <nav>
    <ul>
      <li
        v-for="locale in availableLocales"
        :key="(locale as LocaleObject).code"
        :to="switchLocalePath((locale as LocaleObject).code)"
      >
        <nuxt-link />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

  const { locale, locales } = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  const availableLocales = computed(() => {
    return locales.value.filter(
      (item) => (item as LocaleObject).code !== locale.value,
    );
  });
</script>

<style lang="scss" scoped>
  nav {
    height: 10px;
  }
</style>
