<template>
  <section class="main-seccion" :style="{ color: textColor }">
    <router-link class="back" :class="mode" to="/"
      ><i class="fas fa-long-arrow-alt-left" /> Back</router-link
    >
    <figure>
      <img :src="country.flag" :alt="country.name" />
    </figure>
    <h1>{{ country.name }}</h1>
    <section>
      <div>
        <p><b>Native Name:</b> {{ country.nativeName }}</p>
        <p><b>Population:</b> {{ formatNumber(country.population) }}</p>
        <p><b>Region:</b> {{ country.region }}</p>
        <p><b>Sub Region:</b> {{ country.subregion }}</p>
        <p><b>Capital:</b> {{ country.capital }}</p>
      </div>
      <div>
        <p><b>Top Level Domain:</b> {{ topLevelDomain }}</p>
        <p><b>Currencies:</b> {{ currencies }}</p>
        <p><b>Languages:</b> {{ languages }}</p>
      </div>
    </section>
    <span>
      <b>Border Countries:</b>
      <router-link
        class="buttons"
        :class="mode"
        v-for="(border, index) in country.borders"
        :to="`/${border.toLowerCase()}`"
        :key="index + 1"
        @click="getData"
      >
        {{ border }}
      </router-link>
    </span>
  </section>
</template>

<script>
  import { computed, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useDarkMode } from '../hooks/useDarkMode';

  export default {
    setup() {
      let country = ref({});
      let topLevelDomain = ref('');
      let currencies = ref('');
      let languages = ref('');
      let code = useRoute().params.country;

      const { mode } = useDarkMode();

      const textColor = computed(() => (mode.value === 'dark' ? '#fff' : '#111517'));

      const formatNumber = number => new Intl.NumberFormat('en-US').format(number);

      const getData = async () => {
        const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
        const data = await res.json();
        country.value = data;
        topLevelDomain.value = data.topLevelDomain.join(', ');
        currencies.value = data.currencies.map(currency => currency.name).join(', ');
        languages.value = data.languages.map(language => language.name).join(', ');
      };

      onMounted(getData);

      return {
        mode,
        country,
        textColor,
        formatNumber,
        topLevelDomain,
        currencies,
        languages,
        getData,
      };
    },
  };
</script>

<style scoped>
  .main-seccion {
    padding: 0 18px;
  }

  .back {
    align-items: center;
    display: flex;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    margin-bottom: 50px;
    width: 128px;
  }

  a {
    border-radius: 5px;
  }

  i {
    font-size: 2rem;
    margin-right: 10px;
  }

  img {
    margin: 0 auto;
    max-width: 450px;
    width: 100%;
  }

  h1 {
    font-size: 2.2rem;
    margin: 32px 0 20px;
  }

  .main-seccion section {
    font-size: 1.5rem;
  }

  .main-seccion section div {
    line-height: 2;
    margin-bottom: 25px;
  }

  span b {
    margin-right: 5px;
  }

  .buttons {
    display: inline-block;
    font-size: 1.4rem;
    margin: 5px;
    padding: 5px 12px;
  }

  @media screen and (min-width: 1024px) {
    .back {
      margin: 15px 0 50px;
    }

    .main-seccion {
      column-gap: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0;
    }

    figure {
      grid-column: 1;
      grid-row: 2 / span 3;
    }

    img {
      max-width: none;
    }

    h1 {
      grid-row: 2;
      margin-top: 10px;
    }

    .main-seccion section {
      display: flex;
      grid-row: 3;
      justify-content: space-between;
    }

    .main-seccion section div:last-of-type {
      margin-left: 15px;
    }

    span {
      grid-row: 4;
    }
  }

  @media screen and (min-width: 1280px) {
    h1 {
      margin: 30px 0 0;
    }

    .main-seccion {
      column-gap: 100px;
    }

    .main-seccion section div {
      margin-bottom: 0;
    }
  }
</style>
