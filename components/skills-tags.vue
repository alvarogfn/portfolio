<template>
  <ul>
    <li v-for="tag in items" :key="tag" :title="tag">{{ tag }}</li>
  </ul>
</template>

<script lang="ts" setup>
  interface Props {
    items: string[];
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
  }

  li {
    color: var(--main-color);
    background-color: var(--secondary-color);
    padding: 2px;
    border-radius: 2px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
