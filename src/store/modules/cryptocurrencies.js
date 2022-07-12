import api from '@/api/coins';

// actions
const actions = {
  callCryptocurrencies(_, currencySelected) {
    return api.getCryptocurrencies(currencySelected);
  },
  setCryptocurrencies({ commit }, cryptocurrencies) {
    commit('setCryptocurrencies', cryptocurrencies);
  },
  setcryptocurrencyDetail({ commit }, cryptocurrencyDetail) {
    commit('setcryptocurrencyDetail', cryptocurrencyDetail);
  },
};

// mutations
const mutations = {
  setCryptocurrencies(state, cryptocurrencies) {
    state.cryptocurrenciesList = cryptocurrencies;
  },
  setcryptocurrencyDetail(state, cryptocurrencyDetail) {
    state.cryptocurrencyDetail = cryptocurrencyDetail;
  },
};

// initial state
const state = {
  cryptocurrenciesList: [],
  cryptocurrencyDetail: {},
};

export default {
  state,
  actions,
  mutations,
};
