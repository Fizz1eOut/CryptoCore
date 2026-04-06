<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    gradient?: boolean;
    primary?: boolean;
    secondary?: boolean;
    disabled?: boolean;
  }>();

  const classes = computed(() => ({
    'button-gradient': props.gradient,
    'button-primary': props.primary,
    'button-secondary': props.secondary,
    'button-disabled': props.disabled,
  }));
</script>

<template>
  <button
    type="button"
    class="button"
    :class="classes"
  >
    <slot/>
  </button>
</template>

<style scoped>
  .button {
    width: 100%;
    height: 100%;
    font-size: var(--fs-sm);
    font-weight: var(--fw-normal);
    color: var(--color-text-primary);
    background-color: transparent;
    cursor: pointer;
    border-radius: 0;
    border: none;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
  .button:hover {
    background-color: transparent
  }

  .button-primary {
    position: relative;
    overflow: hidden;
    height: var(--space-xl);
    color: var(--color-white);
    background-color: transparent;
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-gray);
    z-index: 0;
    transition: 
      border-color var(--transition-base),
      box-shadow var(--transition-base),
  }
  .button-primary::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--color-gradient);
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: -1;
  }
  .button-primary:hover {
    border-color: transparent;
    box-shadow: var(--shadow-glow);
    border: 0;
  }
  .button-primary:hover::before {
    opacity: 1;
  }

  .button-secondary {
    height: var(--space-xl);
    border: 1px solid var(--color-blue);
    color: var(--color-blue);
    background-color: transparent;
    border-radius: var(--radius-sm);
    transition: 
      border-color var(--transition-base),
      box-shadow var(--transition-base),
  }
  .button-secondary:hover {
    box-shadow: var(--shadow-glow);
  }

  .button-disabled {
    height: var(--space-xl);
    background-color: var(--color-gray);
    border-radius: 10px;
    opacity: 0.3;
    transition: background-color 0.4s ease-in-out, opacity 0.4s ease-in-out;
    cursor: not-allowed;
  }
  .button-disabled:hover {
    opacity: 0.4;
    background-color: var(--color-gray);
  }
</style>
