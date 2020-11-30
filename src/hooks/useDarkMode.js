import { computed } from 'vue';
import { useStore } from 'vuex';

export function useDarkMode() {
  const store = useStore();

  const darkMode = computed(() => store.state.darkMode);

  const mode = computed(() => (darkMode.value ? 'dark' : 'ligth'));

  return { mode };
}
