import { create } from 'zustand';

// themes/colors
const themes = [
  'light',
  'dark',
];

const useThemeStore = create((set) => ({
  theme: themes[0],
  toggleTheme: () => set((state) => {
    const currentIndex = themes.indexOf(state.theme);
    const nextIndex = (currentIndex + 1 >= themes.length) ? 0 : currentIndex + 1;
    return { theme: themes[nextIndex] };
  }),
  setTheme: (theme) => {
    if (themes.includes(theme)) {
      set({ theme });
    }
  },
  themes,
}));

export default useThemeStore;