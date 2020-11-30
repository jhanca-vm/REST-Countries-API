<template>
  <section @click="hide">
    <router-link
      v-for="country in countries"
      :key="country.name"
      :to="`/${country.alpha3Code.toLowerCase()}`"
    >
      <article :class="mode">
        <img :src="country.flag" :alt="country.name" />
        <div>
          <h2>{{ country.name }}</h2>
          <p><b>Population:</b> {{ formatNumber(country.population) }}</p>
          <p><b>Region:</b> {{ country.region }}</p>
          <p v-if="country.capital !== ''"><b>Capital:</b> {{ country.capital }}</p>
        </div>
      </article>
    </router-link>
  </section>
</template>

<script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useDarkMode } from '../hooks/useDarkMode';

  export default {
    setup() {
      const store = useStore();

      const countries = computed(() => store.getters.topCountries);

      const formatNumber = number => new Intl.NumberFormat('en-US').format(number);

      const hide = () => store.dispatch('hide');

      onMounted(() => store.dispatch('getCountries'));

      return { ...useDarkMode(), countries, formatNumber, hide };
    },
  };
</script>

<style scoped>
  section {
    display: grid;
    row-gap: 40px;
  }

  article {
    border-radius: 7px;
  }

  article div {
    font-size: 1.4rem;
    height: 180px;
    padding: 22px;
  }

  h2 {
    font-size: 1.6rem;
    line-height: 1.4;
    margin-bottom: 18px;
  }

  a {
    margin: 0 auto;
    width: 260px;
  }

  img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    box-shadow: 0 2px 1px 0 rgba(51, 51, 51, 0.08);
    height: 165px;
    object-fit: cover;
    width: 100%;
  }

  p {
    margin-top: 5px;
  }

  @media screen and (min-width: 640px) {
    section {
      grid-template-columns: 1fr 1fr;
      row-gap: 48px;
    }
  }

  @media screen and (min-width: 900px) {
    section {
      grid-template-columns: repeat(3, 260px);
      justify-content: space-between;
      row-gap: 58px;
    }

    a {
      margin: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    section {
      grid-template-columns: repeat(4, 260px);
      row-gap: 60px;
    }
  }
</style>
