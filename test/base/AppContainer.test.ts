import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AppContainer from '@/components/base/AppContainer.vue';

describe('AppContainer.vue', () => {
  it('renders with default size-xs class', () => {
    const wrapper = mount(AppContainer);
    expect(wrapper.classes()).toContain('size-xs');
  });

  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)(
    'applies size-%s class when size prop is "%s"',
    (size) => {
      const wrapper = mount(AppContainer, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`size-${size}`);
    }
  );

  it('renders slot content', () => {
    const slotContent = '<p>Test content</p>';
    const wrapper = mount(AppContainer, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.html()).toContain(slotContent);
  });

  it('updates class when size prop changes', async () => {
    const wrapper = mount(AppContainer, {
      props: { size: 'sm' },
    });
    expect(wrapper.classes()).toContain('size-sm');

    await wrapper.setProps({ size: 'lg' });
    expect(wrapper.classes()).toContain('size-lg');
  });
});
