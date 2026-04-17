<script setup lang="ts">
  const { isMobile } = useMediaQuery('(max-width: 768px)');
  const isActive = ref(false);

  const closeMenu = () => {
    isActive.value = false;
  };
</script>

<template>
  <div class="header">
    <BaseAppContainer>
      <div class="header__body">
        <div class="header__logo">
          <BaseAppBurger
            v-if="isMobile"
            :is-active="isActive"
            @change="isActive = $event"
          />
          <BaseAppLogo />
        </div>

        <div class="header__nav">
          <BaseAppNav v-if="!isMobile" />
          <BaseAppNavMobile
            v-if="isMobile"
            :is-active="isActive"
            @close="closeMenu"
          />
        </div>

        <div class="header__group">
          <BaseAppFavorites />
        </div>
      </div>
    </BaseAppContainer>
  </div>
</template>

<style scoped>
  .header__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  .header__logo {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
  .header__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 700px;
    width: 100%;
  }
</style>  
