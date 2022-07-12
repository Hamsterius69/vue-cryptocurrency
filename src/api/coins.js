/* eslint-disable import/no-unresolved */
import axios from 'axios';

const baseCryptocurrencies = 'https://api.coinstats.app/public/v1/coins';

export default {
  getCryptocurrencies(currencySelected) {
    const arg = {
      currency: currencySelected,
      skip: 0,
      limit: 100,
    };
    return axios.get(baseCryptocurrencies, {
      params: { arg },
    });
  },
};
