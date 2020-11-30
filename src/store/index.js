import { createStore } from 'vuex';

export default createStore({
  state: {
    darkMode: true,
    countries: [],
    filteredCountries: [],
    hidden: true,
  },
  mutations: {
    toggleMode(state, payload) {
      state.darkMode = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
    setFilteredCountries(state, payload) {
      state.filteredCountries = payload;
    },
    toggleHidden(state) {
      state.hidden = !state.hidden;
    },
    hide(state) {
      state.hidden = true;
    },
  },
  actions: {
    onOffDarkMode({ commit }) {
      if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', true);
        console.log('creado');
      } else if (localStorage.getItem('darkMode') === 'true') {
        commit('toggleMode', true);
        console.log('true');
      } else {
        commit('toggleMode', false);
        console.log('false');
      }
    },
    async getCountries({ commit }) {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await res.json();

      commit('setCountries', data);
      commit('setFilteredCountries', data);
    },
    filterRegion({ commit, state }, region) {
      const filteredCountries = state.countries.filter(country => country.region.includes(region));

      commit('setFilteredCountries', filteredCountries);
    },
    findCountries({ commit, state }, text) {
      const filter = state.countries.filter(country =>
        country.name.toLowerCase().includes(text.toLowerCase())
      );

      commit('setFilteredCountries', filter);
    },
    showHide({ commit }) {
      commit('toggleHidden');
    },
    hide({ commit }) {
      commit('hide');
    },
  },
  getters: {
    topCountries(state) {
      return state.filteredCountries
        .sort((a, b) => (a.population < b.population ? 1 : -1))
        .filter(country => country.population > 0);
    },
  },
  modules: {},
});
