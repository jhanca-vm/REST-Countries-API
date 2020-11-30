<template>
  <div>
    <button :class="mode" @click="showHide" id="filter">
      Filter by Region <i class="fas fa-angle-down" />
    </button>
    <ul :class="mode" :style="{ display: state }">
      <li v-for="(region, index) in regions" :key="index + 1" @click="filter(region)">
        {{ region }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useDarkMode } from '../hooks/useDarkMode';

  export default {
    setup() {
      let regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

      const store = useStore();

      const hidden = computed(() => store.state.hidden);

      const state = computed(() => (hidden.value ? 'none' : 'flex'));

      const filter = region => store.dispatch('filterRegion', region);

      const showHide = () => store.dispatch('showHide');

      return { ...useDarkMode(), showHide, state, regions, filter };
    },
  };
</script>

<style scoped>
  div {
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    width: 230px;
    margin: 42px 0 45px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    font-size: inherit;
    padding: 18px 30px;
    width: 100%;
  }

  i {
    font-size: 1.6rem;
  }

  ul {
    border-radius: 8px;
    flex-direction: column;
    height: 175px;
    justify-content: space-between;
    list-style: none;
    padding: 21px 30px;
    position: absolute;
    top: 61px;
    left: 0;
    right: 0;
  }

  li {
    cursor: pointer;
    width: max-content;
  }

  li:hover {
    opacity: 0.5;
  }

  @media screen and (min-width: 568px) {
    div {
      margin: 0;
    }
  }
</style>
