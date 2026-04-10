<template>
  <h2 class="subtitle">
    <slot/>
  </h2>
</template>

<style scoped>
  .subtitle {
    font-weight: var(--fw-semibold);
    font-size: var(--fs-2xl);
    color: var(---color-text-primary);
    letter-spacing: 0.05em;
    font-family: "Orbitron", sans-serif;
  }  
  @media (max-width: 768px) {
    .subtitle {
      font-size: var(--fs-xl);
    }
  }
  @media (max-width: 499.98px) {
    .subtitle {
      font-size: var(--fs-lg);
    }  
  }
</style>
