/* eslint-disable import/no-unresolved */
import axios from 'axios';

const baseCryptocurrencies = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=EUR';

export default {
  getCryptocurrencies(params) {
    return axios.get(baseCryptocurrencies, params);
  },
};
