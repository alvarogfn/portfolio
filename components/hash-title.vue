<template>
  <component :is="props.is" :id="props.id" class="title">
    <nuxt-link class="title__link" :to="{ hash: `#${props.id}` }">
      <slot></slot>
    </nuxt-link>
  </component>
</template>

<script lang="ts" setup>
  interface Props {
    is?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    is: "h2",
  });
</script>

<style lang="scss" scoped>
  .title {
    position: relative;

    &__link {
      &::before {
        transition: 200ms;
        position: absolute;

        top: 2px;
        left: -0.8em;

        content: "#";
        font-size: 0.8em;

        opacity: 0;
      }

      &:hover {
        &::before {
          opacity: 0.4;
        }
      }
    }
  }
</style>
