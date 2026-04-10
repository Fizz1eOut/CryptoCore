import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AppUnderlay from '@/components/base/AppUnderlay.vue';

describe('AppUnderlay.vue', () => {
  it('renders with default size-xs class', () => {
    const wrapper = mount(AppUnderlay);
    expect(wrapper.classes()).toContain('size-xs');
  });

  it.each(['xs', 'md', 'lg', 'full'] as const )(
    'applies size-%s class when size prop is "%s"',
    (size) => {
      const wrapper = mount(AppUnderlay, {
        props: {size},
      });
      expect(wrapper.classes()).toContain(`size-${size}`);
    }
  );

  it('renders slot content', () => {
    const slotContent = '<p>Test content</p>';
    const wrapper = mount(AppUnderlay, {
      slots: {
        default: slotContent,
      }
    });
    expect(wrapper.html()).toContain(slotContent);
  });

  it('updates class when size prop changes', async () => {
    const wrapper = mount(AppUnderlay, {
      props: {size: 'sm'}
    });
    expect(wrapper.classes()).toContain('size-sm');

    await wrapper.setProps({ size: 'md' });
    expect(wrapper.classes()).toContain('size-md');
  });
});
