// eslint-disable-next-line import/extensions
import api from '@/api/coins';

// actions
const actions = {
  callCryptocurrencies(_, currencySelected) {
    return api.getCryptocurrencies(currencySelected);
  },
  fetchCoinById(_, coinId) {
    return api.getCoinById(coinId);
  },
  setCryptocurrencies({ commit }, cryptocurrencies) {
    commit('setCryptocurrencies', cryptocurrencies);
  },
  setCryptocurrencyDetail({ commit }, cryptocurrencyDetail) {
    commit('setCryptocurrencyDetail', cryptocurrencyDetail);
  },
};

// mutations
const mutations = {
  setCryptocurrencies(state, cryptocurrencies) {
    state.cryptocurrenciesList = cryptocurrencies;
  },
  setCryptocurrencyDetail(state, cryptocurrencyDetail) {
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
