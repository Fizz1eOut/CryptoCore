export const useMediaQuery = (query: string) => {
  const isMobile = ref(false);

  onMounted(() => {
    const mediaQueryList = window.matchMedia(query);

    isMobile.value = mediaQueryList.matches;

    const handleMediaChange = (event: MediaQueryListEvent) => {
      isMobile.value = event.matches;
    };

    mediaQueryList.addEventListener('change', handleMediaChange);

    onBeforeUnmount(() => {
      mediaQueryList.removeEventListener('change', handleMediaChange);
    });
  });

  return {
    isMobile
  };
};
