<template>
  <div :class="mode">
    <i class="fas fa-search" />
    <input v-model="text" @keyup="find" type="text" placeholder="Search for a country..." />
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useDarkMode } from '../hooks/useDarkMode';
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore();

      let text = ref('');

      const find = () => store.dispatch('findCountries', text.value);

      return { ...useDarkMode(), text, find };
    },
  };
</script>

<style scoped>
  div {
    border-radius: 8px;
    display: flex;
    align-items: center;
    max-width: 450px;
    padding: 17px 36px;
    width: 100%;
  }

  input {
    background: inherit;
    border: none;
    color: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 15px;
    outline: none;
    width: 100%;
  }

  input::placeholder {
    color: inherit;
  }

  @media screen and (min-width: 568px) {
    div {
      width: 50%;
    }
  }
</style>
