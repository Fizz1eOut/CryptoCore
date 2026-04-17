<script setup lang="ts">
  interface BurgerProps {
    isActive: boolean
  }
  const props = defineProps<BurgerProps>();

  const emit = defineEmits<{
    (e: 'change', value: boolean): void;
  }>();

  const toggleBurger = () => {
    emit('change', !props.isActive);
  };

  watch(() => props.isActive, (value) => {
    document.body.style.overflow = value ? 'hidden' : '';
  });
</script>

<template>
  <button 
    :class="{ 'burger--active': isActive }"
    class="burger"
    @click="toggleBurger"
  >
    <span class="burger__line" />
  </button>
</template>

<style scoped>
  .burger {
    width: 32px;
    height: 23px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 11;
    display: none;
  }
  @media (max-width: 768px) {
    .burger {
      display: block;
    }
    .burger::before,
    .burger::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      background: var(--color-gradient);
      transition: transform 0.3s ease-in-out, top 0.3s ease-in-out, bottom 0.3s ease-in-out;
    }
    
    .burger::after {
      top: auto;
      bottom: 0;
    }
    
    .burger span {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 2px;
      display: inline-block;
      background: var(--color-gradient);
    }
    
    .burger--active .burger__line {
      opacity: 0;
    }
    
    .burger--active::before {
      top: 50%;
      transform: rotate(45deg);
    }
    
    .burger--active::after {
      bottom: auto;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
</style>
