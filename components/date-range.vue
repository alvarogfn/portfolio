<template>
  <p class="date-range">
    <time :datetime="startDateFormated">{{ startDateFormated }}</time> -
    <time v-if="endDateFormated !== undefined" :datetime="endDateFormated">
      {{ d(endDateFormated) }}
    </time>
    <span v-else class="date-range__currently">
      {{ t("currently") }}
    </span>
  </p>
</template>

<script setup lang="ts">
  interface Props {
    startDate: Date;
    endDate?: Date;
  }

  const props = defineProps<Props>();

  const { d, t } = useI18n();

  const startDateFormated = computed(() => d(props.startDate, "default"));
  const endDateFormated = computed(() =>
    props.endDate ? d(props.endDate) : undefined,
  );
</script>

<style lang="scss" scoped>
  .date-range {
    opacity: 0.7;
    font-style: italic;
    font-size: 0.9rem;
    &::first-letter {
      text-transform: uppercase;
    }

    &__currently {
      text-transform: capitalize;
    }
  }
</style>
