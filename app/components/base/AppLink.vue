<template>
  <div class="link line">
    <slot/>
  </div>
</template>

<style scoped>
  .link {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fs-md);
    font-weight: var(--fw-medium);
    color: var(--color-text-primary);
    transition: var(--transition-hover);
    cursor: pointer;
  }

  .link:hover {
    background: var(--color-gradient-hover);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
