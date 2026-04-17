<script setup lang="ts">
  interface NavMobileProps {
    isActive: boolean;
  }
  defineProps<NavMobileProps>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const close = () => {
    emit('close');
  };
</script>

<template>
  <Transition>
    <nav
      v-if="isActive" 
      v-click-outside="close"
      class="nav-modile"
    >
      <BaseAppContainer size="md">
        <div class="nav-mobile__body">
          <div class="nav-mobile__item">
            <router-link to="/" @click="close">
              <div class="nav-mobile__row">
                <BaseAppIcon 
                  name="home" 
                  size="24px" 
                  style="color: var(--color-white)"
                  class="icon" 
                />
                <AppBaseLink class="nav-mobile__link">
                  Home
                </AppBaseLink>
              </div>
            </router-link>
          </div>

          <div class="nav-mobile__item">
            <router-link to="/coins" @click="close">
              <div class="nav-mobile__row">
                <BaseAppIcon 
                  name="coins" 
                  size="24px" 
                  style="color: var(--color-white)"
                  class="icon" 
                />
                <AppBaseLink class="nav-mobile__link">
                  Coins
                </AppBaseLink>
              </div>
            </router-link>
          </div>

          <div class="nav-mobile__item">
            <router-link to="/exchangers" @click="close">
              <div class="nav-mobile__row">
                <BaseAppIcon 
                  name="exchanger" 
                  size="24px" 
                  style="color: var(--color-white)"
                  class="icon" 
                />
                <AppBaseLink class="nav-mobile__link">
                  Exchangers
                </AppBaseLink>
              </div>
            </router-link>
          </div>

          <div class="nav-mobile__item">
            <router-link to="/news" @click="close">
              <div class="nav-mobile__row">
                <BaseAppIcon 
                  name="news" 
                  size="24px" 
                  style="color: var(--color-white)"
                  class="icon" 
                />
                <AppBaseLink class="nav-mobile__link">
                  News
                </AppBaseLink>
              </div>
            </router-link>
          </div>
        </div>
      </BaseAppContainer>
    </nav>
  </Transition>
</template>

<style>
  .nav-mobile__auth .button {
    font-size: var(--fs-xl);
  }
</style>
<style scoped>
  .nav-mobile__row {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 164px;
  }
  .nav-mobile__row .nav-mobile__link {
    font-size: var(--fs-xl);
  }
  .nav-mobile__link {
    pointer-events: none;
  }
  .router-link-active .nav-mobile__link {
    transition: background var(--transition-smooth);
    cursor: pointer;
    background: var(--color-gradient-hover);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  .router-link-active .nav-mobile__link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background: var(--color-gradient-hover);
    transform: scaleX(1);
    transform-origin: left;
    transition: transform var(--transition-smooth);
  }
  .router-link-active .icon {
    color: var(--color-blue) !important;
  }
  @media (max-width: 768px) {
    .nav-modile {
      position: fixed;
      left: 0;
      top: 0px;
      max-width: 350px;
      width: 100%;
      height: 100vh;
      z-index: 9;
      box-shadow: 4px 0 9px -7px rgba(0,0,0, 0.8);
      background-color: var(--color-surface);
    }
    .nav-mobile__body {
      margin-top: 100px;
      height: 100vh;
    }
    .nav-mobile__body >*:not(:last-child) {
      margin-bottom: var(--space-2xl);
    }

    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.9s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
  }
  @media (max-width: 480px) {
    .nav-modile {
      max-width: 250px;
    }
  }
</style>
