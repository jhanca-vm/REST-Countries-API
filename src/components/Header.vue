<template>
  <header :class="mode.styles" @click="hide">
    <router-link class="title" to="/">Where in the world?</router-link>
    <button @click="toggleMode"><i :class="mode.icon" /> Dark Mode</button>
  </header>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore();

      const darkMode = computed(() => store.state.darkMode);

      const mode = computed(() =>
        darkMode.value
          ? { styles: 'dark', icon: 'fas fa-moon' }
          : { styles: 'ligth', icon: 'far fa-moon' }
      );

      const toggleMode = () => {
        localStorage.getItem('darkMode') == 'true'
          ? localStorage.setItem('darkMode', false)
          : localStorage.setItem('darkMode', true);

        store.dispatch('onOffDarkMode');
      };

      const hide = () => store.dispatch('hide');

      return { toggleMode, mode, hide };
    },
  };
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    padding: 28px 18px;
    position: relative;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 800;
  }

  button {
    font-size: 1.4rem;
    font-weight: 600;
  }

  i {
    margin-right: 3px;
  }

  @media screen and (min-width: 568px) {
    header {
      padding: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    header {
      padding: 24px 32px;
    }

    .title {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    header {
      padding: 24px 64px;
    }
  }
</style>
