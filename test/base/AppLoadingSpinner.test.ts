import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AppLoadingSpinner from '@/components/base/AppLoadingSpinner.vue';

describe('AppLoadingSpinner.vue', () => {
  it('renders with default md size styles', () => {
    const wrapper = mount(AppLoadingSpinner);
    const spinner = wrapper.find('.loading__spinner');

  expect(spinner.attributes('style')).toContain('width: 40px');
  expect(spinner.attributes('style')).toContain('height: 40px');
  expect(spinner.attributes('style')).toContain('border-width: 4px');
  });

  it('renders text when text prop is passed', () => {
    const wrapper = mount(AppLoadingSpinner, {
      props: { text: 'Loading...' }
    });
    const text = wrapper.find('.loading__text');
    expect(text.exists()).toBe(true);
    expect(text.text()).toBe('Loading...');
  });

  it('does not render text element when text prop is empty', () => {
    const wrapper = mount(AppLoadingSpinner);
    expect(wrapper.find('.loading__text').exists()).toBe(false);
  });

    it('renders spinner and check elements', () => {
      const wrapper = mount(AppLoadingSpinner);
      expect(wrapper.find('.loading__spinner').exists()).toBe(true);
      expect(wrapper.find('.loading__check').exists()).toBe(true);
    });
});
