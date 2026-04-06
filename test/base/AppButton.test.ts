import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AppButton from '@/components/base/AppButton.vue';

describe('AppButton.vue', () => {
  it('renders with default button class', () => {
    const wrapper = mount(AppButton);
    expect(wrapper.classes()).toContain('button');
  });

  it('applies button-gradient class when gradient prop is passed', () => {
    const wrapper = mount(AppButton, {
      props: { gradient: true },
    });
    expect(wrapper.classes()).toContain('button-gradient');
  });

  it('applies button-primary class when primary prop is passed', () => {
    const wrapper = mount(AppButton, {
      props: { primary: true },
    });
    expect(wrapper.classes()).toContain('button-primary');
  });

  it('applies button-secondary class when secondary prop is passed', () => {
    const wrapper = mount(AppButton, {
      props: { secondary: true },
    });
    expect(wrapper.classes()).toContain('button-secondary');
  });

  it('applies button-disabled class when disabled prop is passed', () => {
    const wrapper = mount(AppButton, {
      props: { disabled: true },
    });
    expect(wrapper.classes()).toContain('button-disabled');
  });

  it('combines multiple classes when multiple props are passed', () => {
    const wrapper = mount(AppButton, {
      props: {
        gradient: true,
        primary: true,
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain('button-gradient');
    expect(wrapper.classes()).toContain('button-primary');
    expect(wrapper.classes()).toContain('button-disabled');
  });

  it('renders slot content', () => {
    const slotContent = '<span>Click me</span>';
    const wrapper = mount(AppButton, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.html()).toContain(slotContent);
  });

  it('does not apply extra classes when no props are passed', () => {
    const wrapper = mount(AppButton);
    expect(wrapper.classes()).not.toContain('button-gradient');
    expect(wrapper.classes()).not.toContain('button-primary');
    expect(wrapper.classes()).not.toContain('button-secondary');
    expect(wrapper.classes()).not.toContain('button-disabled');
  });
});
