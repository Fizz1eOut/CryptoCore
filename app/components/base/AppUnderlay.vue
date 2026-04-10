<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      size?: 'xs' | 'md' | 'lg' | 'full';
      underlay?: 'secondary' | 'primary';
    }>(),
    {
      size: 'xs',
      underlay: 'secondary',
    }
  );

  const size = computed(() => `size-${props.size}`);
  const underlay = computed(() => `underlay-${props.underlay}`);
</script>

<template>
  <div :class="[size, underlay]">
    <slot />
  </div>
</template>

<style scoped>
  .underlay-primary {
    background-color: var(--color-surface);
  }
  .underlay-secondary {
    background-color: var(--color-surface-secondary);
  }
  .size-full {
    border-radius: var(--radius-full);
  }
  .size-lg {
    border-radius: var(--radius-lg);
  }
  .size-md {
    border-radius: var(--radius-md);
  }
  .size-xs {
    border-radius: var(--radius-sm);
  }
</style>
