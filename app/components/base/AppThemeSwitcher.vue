<script setup lang="ts">
  const themeStore = useThemeStore();
  const toggleTheme = themeStore.toggleTheme;

  const iconName = computed(() =>
    themeStore.theme === 'light' ? 'moon' : 'sun'
  );
</script>

<template>
  <BaseAppUnderlay>
    <div class="theme-switcher">
      <BaseAppButton
        class="theme-switcher__button"
        @click="toggleTheme"
      >
        <BaseAppIcon
          :name="iconName"
          size="30px"
          color="var(--color-text-primary)"
        />
      </BaseAppButton>
    </div>
  </BaseAppUnderlay>
</template>

<style scoped>
  .theme-switcher {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 42px;
    height: 46px;
  }
  .theme-switcher:hover :deep(.icon path) {
    color: var(--color-yellow);
  }
    @media (max-width: 400px) {
    .theme-switcher {
      width: 36px;
      height: 40px;
    }
  }
</style>
