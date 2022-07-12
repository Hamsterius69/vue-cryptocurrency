import api from '@/api/coins';

// actions
const actions = {
  callCryptocurrencies() {
    return api.getCryptocurrencies();
  },
  setCryptocurrencies({ commit }, cryptocurrencies) {
    commit('setCryptocurrencies', cryptocurrencies);
  },
};

// mutations
const mutations = {
  setCryptocurrencies(state, cryptocurrencies) {
    state.cryptocurrenciesList = cryptocurrencies;
  },
};

// initial state
const state = {
  cryptocurrenciesList: [],
};

export default {
  state,
  actions,
  mutations,
};
