import axios from 'axios';

const API_BASE_URL = 'https://openapiv1.coinstats.app';
const API_KEY = process.env.VUE_APP_COINSTATS_API_KEY;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
});

export default {
  getCryptocurrencies(currencySelected) {
    return apiClient.get('/coins', {
      params: {
        currency: currencySelected,
        page: 1,
        limit: 100,
        includeRiskScore: 'true',
      },
    });
  },
  getCoinById(coinId) {
    return apiClient.get(`/coins/${coinId}`);
  },
};
