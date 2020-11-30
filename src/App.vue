<template>
  <Header />
  <main :style="{ background: color }" @click="hide">
    <router-view />
  </main>
</template>

<script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  import Header from './components/Header';

  export default {
    components: {
      Header,
    },
    setup() {
      const route = useRoute();
      const store = useStore();

      const darkMode = computed(() => store.state.darkMode);

      const color = computed(() => (darkMode.value ? '#202c37' : '#fafafa'));

      const hide = e => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'UL' && route.path === '/') {
          store.dispatch('hide');
        }
      };

      onMounted(() => store.dispatch('onOffDarkMode'));

      return { color, hide };
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  main {
    min-height: calc(100vh - 75px);
    padding: 32px 18px;
  }

  h1,
  h2 {
    font-weight: 800;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-weight: inherit;
    outline: none;
  }

  b {
    font-weight: 600;
  }

  #app {
    background-color: #202c37;
    font-size: 1.6rem;
    font-weight: 300;
    min-height: 100vh;
    min-width: 320px;
  }

  .ligth {
    background-color: #fff;
    box-shadow: 0 1px 15px 0 rgba(51, 51, 51, 0.15);
    color: #111517;
  }

  .dark {
    background-color: #2b3945;
    box-shadow: 0 1px 7px 0 rgba(51, 51, 51, 0.1);
    color: #fff;
  }

  @media screen and (min-width: 568px) {
    main {
      min-height: calc(100vh - 68px);
      padding: 35px 24px;
    }
  }

  @media screen and (min-width: 768px) {
    main {
      padding: 35px 32px;
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      padding: 35px 64px;
    }
  }
</style>
