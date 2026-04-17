import type { Directive, DirectiveBinding } from 'vue';

interface ClickOutsideElement extends HTMLElement {
  __clickOutside__?: (event: MouseEvent) => void;
}

export const vClickOutside: Directive = {
  mounted(el: ClickOutsideElement, binding: DirectiveBinding) {
    const handler = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };

    el.__clickOutside__ = handler;

    setTimeout(() => {
      document.addEventListener('click', handler);
    }, 0);
  },

  unmounted(el: ClickOutsideElement) {
    if (el.__clickOutside__) {
      document.removeEventListener('click', el.__clickOutside__);
    }
  },
};
