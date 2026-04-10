<template>
  <h2 class="title">
    <slot/>
  </h2>
</template>

<style scoped>
  .title {
    font-family: "Orbitron", sans-serif;
    font-size: var(--fs-3xl);
    font-weight: var(--fw-semibold);
    letter-spacing: 0.05em;
    color: var(--color-text-primary);
    }  
  @media (max-width: 499.98px) {
    .title {
      font-size: var(--fs-2xl);
    }  
  }
</style>
