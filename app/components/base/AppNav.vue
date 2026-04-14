<template>
  <div class="nav">
    <div class="nav__body">
      <div class="nav__item">
        <NuxtLink to="/">
          <BaseAppLink>Home</BaseAppLink>
        </NuxtLink>
      </div>

      <div class="nav__item">
        <NuxtLink to="/coins">
          <BaseAppLink>Coins</BaseAppLink>
        </NuxtLink>
      </div>

      <div class="nav__item">
        <NuxtLink to="/exchangers">
          <BaseAppLink>Exchangers</BaseAppLink>
        </NuxtLink>
      </div>

      <div class="nav__item">
        <NuxtLink to="/news">
          <BaseAppLink>News</BaseAppLink>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .nav {
    max-width: 550px;
    width: 100%;
  }
  .nav__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .router-link-active .link {
    transition: var(--transition-active);
    cursor: pointer;
    background: var(--color-gradient-hover);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }
  .router-link-active .link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background: var(--color-gradient-hover);
    transform: scaleX(1);
    transform-origin: left;
    transition: var(--transition-smooth);
  }
</style>
