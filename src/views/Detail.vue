<template>
  <v-container class="my-6">
    <!-- Loading State -->
    <v-row v-if="loading" justify="center" class="my-10">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </v-row>

    <!-- Error State -->
    <v-row v-else-if="error" justify="center">
      <v-card width="90%" class="text-center pa-6">
        <v-icon size="64" color="error">mdi-alert-circle</v-icon>
        <h2 class="mt-4">{{ error }}</h2>
        <v-btn color="primary" class="mt-4" @click="goToHomePage()">
          <v-icon left>mdi-arrow-left</v-icon>
          Back to Home
        </v-btn>
      </v-card>
    </v-row>

    <!-- Content -->
    <v-row v-else justify="space-around">
      <v-card width="90%">
        <v-img
          height="200px"
          src="https://st.depositphotos.com/1907633/2182/i/950/depositphotos_21823959-stock-photo-businessman-hand-working-with-new.jpg"
          >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-row>
              <v-btn text large color="white" @click="goToHomePage()">
                <v-icon left>
                  mdi-arrow-left
                </v-icon>
                Return
              </v-btn>
            </v-row>
          </v-app-bar>
          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="coin"
                :src="cryptocurrencyDetail.icon"
              >
            </v-avatar>
            <p class="ml-3">
              {{ cryptocurrencyDetail.name }} Detail
            </p>
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Name:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.name }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Rank:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.rank }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Symbol:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.symbol }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Available Supply:
            </div>
            <div class="ml-4 mb-2">
              {{ formatNumber(cryptocurrencyDetail.availableSupply) }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Decimals:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.decimals }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Market Cap:
            </div>
            <div class="ml-4 mb-2">
              {{ formatCompact(cryptocurrencyDetail.marketCap) }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Price:
            </div>
            <div class="ml-4 mb-2 text-h6">
              {{ formatPrice(cryptocurrencyDetail.price) }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Price in BTC:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.priceBtc ? cryptocurrencyDetail.priceBtc.toFixed(8) : '-' }} BTC
            </div>
          </v-row>
          <v-row class="mt-4 align-center">
            <div class="font-weight-bold ml-8 mb-2">
              Price Changes:
            </div>
            <div class="ml-4 mb-2 d-flex">
              <v-chip small :color="cryptocurrencyDetail.priceChange1h >= 0 ? 'green' : 'red'" text-color="white" class="mr-2">
                1h: {{ formatPercent(cryptocurrencyDetail.priceChange1h) }}
              </v-chip>
              <v-chip small :color="cryptocurrencyDetail.priceChange1d >= 0 ? 'green' : 'red'" text-color="white" class="mr-2">
                24h: {{ formatPercent(cryptocurrencyDetail.priceChange1d) }}
              </v-chip>
              <v-chip small :color="cryptocurrencyDetail.priceChange1w >= 0 ? 'green' : 'red'" text-color="white">
                7d: {{ formatPercent(cryptocurrencyDetail.priceChange1w) }}
              </v-chip>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Total Supply:
            </div>
            <div class="ml-4 mb-2">
              {{ formatNumber(cryptocurrencyDetail.totalSupply) }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Volume 24h:
            </div>
            <div class="ml-4 mb-2">
              {{ formatCompact(cryptocurrencyDetail.volume) }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Fully Diluted Valuation:
            </div>
            <div class="ml-4 mb-2">
              {{ formatCompact(cryptocurrencyDetail.fullyDilutedValuation) }}
            </div>
          </v-row>

          <!-- Scores Section -->
          <v-divider class="my-4"></v-divider>
          <v-row class="mt-2">
            <div class="font-weight-bold ml-8 mb-2 text-h6">
              Scores & Metrics
            </div>
          </v-row>
          <v-row class="mt-2 mx-4">
            <v-col cols="6" md="3">
              <v-card outlined class="pa-3 text-center">
                <div class="text-caption grey--text">Risk Score</div>
                <div class="text-h5" :class="getRiskColor(cryptocurrencyDetail.riskScore)">
                  {{ cryptocurrencyDetail.riskScore != null ? cryptocurrencyDetail.riskScore.toFixed(1) : 'N/A' }}
                </div>
              </v-card>
            </v-col>
            <v-col cols="6" md="3">
              <v-card outlined class="pa-3 text-center">
                <div class="text-caption grey--text">Liquidity</div>
                <div class="text-h5 blue--text">
                  {{ cryptocurrencyDetail.liquidityScore != null ? cryptocurrencyDetail.liquidityScore.toFixed(1) : 'N/A' }}
                </div>
              </v-card>
            </v-col>
            <v-col cols="6" md="3">
              <v-card outlined class="pa-3 text-center">
                <div class="text-caption grey--text">Volatility</div>
                <div class="text-h5 orange--text">
                  {{ cryptocurrencyDetail.volatilityScore != null ? cryptocurrencyDetail.volatilityScore.toFixed(1) : 'N/A' }}
                </div>
              </v-card>
            </v-col>
            <v-col cols="6" md="3">
              <v-card outlined class="pa-3 text-center">
                <div class="text-caption grey--text">Market Cap Score</div>
                <div class="text-h5 purple--text">
                  {{ cryptocurrencyDetail.marketCapScore != null ? cryptocurrencyDetail.marketCapScore.toFixed(1) : 'N/A' }}
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Contract Info -->
          <v-row class="mt-4" v-if="cryptocurrencyDetail.contractAddress">
            <div class="font-weight-bold ml-8 mb-2">
              Contract Address:
            </div>
            <div class="ml-4 mb-2">
              <code class="text-caption">{{ cryptocurrencyDetail.contractAddress }}</code>
            </div>
          </v-row>

          <!-- Social Links -->
          <v-row class="mt-2">
            <div class="font-weight-bold ml-8 mb-2 text-h6">
              Links
            </div>
          </v-row>
          <v-row class="mt-2 mx-4">
            <v-col cols="12" sm="6" md="4" v-if="cryptocurrencyDetail.websiteUrl">
              <v-btn
                outlined
                block
                :href="cryptocurrencyDetail.websiteUrl"
                target="_blank"
                class="text-none"
              >
                <v-icon left color="blue">mdi-web</v-icon>
                Website
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4" v-if="cryptocurrencyDetail.twitterUrl">
              <v-btn
                outlined
                block
                :href="cryptocurrencyDetail.twitterUrl"
                target="_blank"
                class="text-none"
              >
                <v-icon left color="light-blue">mdi-twitter</v-icon>
                Twitter
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4" v-if="cryptocurrencyDetail.redditUrl">
              <v-btn
                outlined
                block
                :href="cryptocurrencyDetail.redditUrl"
                target="_blank"
                class="text-none"
              >
                <v-icon left color="orange">mdi-reddit</v-icon>
                Reddit
              </v-btn>
            </v-col>
          </v-row>

          <!-- Explorers -->
          <v-row class="mt-4" v-if="cryptocurrencyDetail.explorers && cryptocurrencyDetail.explorers.length">
            <div class="font-weight-bold ml-8 mb-2 text-h6">
              Block Explorers
            </div>
          </v-row>
          <v-row class="mx-4" v-if="cryptocurrencyDetail.explorers && cryptocurrencyDetail.explorers.length">
            <v-col cols="12" sm="6" md="4" v-for="(url, index) in cryptocurrencyDetail.explorers" :key="index">
              <v-btn
                outlined
                block
                :href="url"
                target="_blank"
                class="text-none text-truncate"
              >
                <v-icon left color="green">mdi-cube-outline</v-icon>
                {{ getExplorerName(url) }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import {
  formatCompact, formatNumber, formatPrice, formatPercent, getRiskColor, getExplorerName,
} from '@/utils/formatters';

export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  computed: {
    ...mapState({
      cryptocurrencyDetail: (state) => state.cryptocurrencies.cryptocurrencyDetail,
    }),
  },
  created() {
    this.loadCoinData();
  },
  methods: {
    async loadCoinData() {
      if (this.cryptocurrencyDetail && this.cryptocurrencyDetail.id === this.id) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        const response = await this.$store.dispatch('fetchCoinById', this.id);
        if (response.data) {
          this.$store.dispatch('setCryptocurrencyDetail', response.data);
        }
      } catch (err) {
        this.error = 'Error loading cryptocurrency data';
        console.error('Error fetching coin:', err);
      } finally {
        this.loading = false;
      }
    },
    goToHomePage() {
      this.$router.push('/');
    },
    formatCompact,
    formatNumber,
    formatPrice,
    formatPercent,
    getRiskColor,
    getExplorerName,
  },
};
</script>
<style scoped lang="scss">
</style>
