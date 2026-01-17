<template>
  <div class="home_table">
    <h1 class="home_title" >Cryptocurrency price table</h1>
  <v-card>
    <v-card-title>
      Cryptocurrencies
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-select dense solo hide-details :items="currency.items" v-model="currency.selected"
                :disabled="isDisable" @change="loadTableData"
                :class="$vuetify.breakpoint.width > 821 ? 'home_table-select' : 'mt-5'"/>
    </v-card-title>
    <v-progress-linear v-if="isDisable" indeterminate />
    <v-data-table
      :headers="headers"
      :items="cryptocurrenciesList"
      :search="search"
    >
      <template v-slot:[`item.icon`]="{ item }">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="30"
          max-width="30"
          :src="item.icon"
        ></v-img>
      </template>
      <template v-slot:[`item.name`]="{ item }">
        <div class="d-flex align-center">
          <span class="font-weight-medium">{{ item.name }}</span>
          <span class="ml-2 grey--text text-caption">{{ item.symbol }}</span>
        </div>
      </template>
      <template v-slot:[`item.price`]="{ item }">
        {{ formatCurrency(item.price) }}
      </template>
      <template v-slot:[`item.priceChange1d`]="{ item }">
        <v-chip
          small
          :color="item.priceChange1d >= 0 ? 'green' : 'red'"
          text-color="white"
        >
          <v-icon small left>{{ item.priceChange1d >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}</v-icon>
          {{ formatPercent(item.priceChange1d) }}
        </v-chip>
      </template>
      <template v-slot:[`item.marketCap`]="{ item }">
        {{ formatCompact(item.marketCap) }}
      </template>
      <template v-slot:[`item.volume`]="{ item }">
        {{ formatCompact(item.volume) }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon class="mx-0" fab small @click="goToDetailPage(item)" :disabled="isDisable">
          <v-icon color="primary"> mdi-eye </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { formatPercent, formatCompact, formatPrice } from '@/utils/formatters';

export default {
  name: 'Home',
  data() {
    return {
      isDisable: false,
      currency: {
        selected: 'EUR',
        items: ['EUR', 'USD'],
      },
      search: '',
      headers: [{
        text: 'Rank',
        align: 'start',
        sortable: true,
        value: 'rank',
      }, {
        text: 'Icon',
        align: 'center',
        sortable: false,
        value: 'icon',
      }, {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      }, {
        text: 'Price',
        align: 'end',
        sortable: true,
        value: 'price',
      }, {
        text: '24h %',
        align: 'end',
        sortable: true,
        value: 'priceChange1d',
      }, {
        text: 'Market Cap',
        align: 'end',
        sortable: true,
        value: 'marketCap',
      }, {
        text: 'Volume 24h',
        align: 'end',
        sortable: true,
        value: 'volume',
      }, {
        text: 'Action',
        value: 'actions',
        sortable: false,
        align: 'center',
      }],
    };
  },
  computed: {
    ...mapState({
      cryptocurrenciesList: (state) => state.cryptocurrencies.cryptocurrenciesList,
    }),
    currencySymbol() {
      return this.currency.selected === 'EUR' ? '€' : '$';
    },
  },
  beforeMount() {
    this.loadTableData();
  },
  methods: {
    loadTableData() {
      this.isDisable = true;
      this.$store.dispatch('callCryptocurrencies', this.currency.selected).then((response) => {
        if (response.data) {
          this.$store.dispatch('setCryptocurrencies', response.data.result);
        }
        this.isDisable = false;
      }).catch((error) => {
        console.error('Error getting cryptocurrencies:', error);
        this.isDisable = false;
      });
    },
    goToDetailPage(detail) {
      this.$store.dispatch('setCryptocurrencyDetail', detail);
      this.$router.push(`/detail/${detail.id}`);
    },
    formatCurrency(value) {
      return formatPrice(value, this.currencySymbol);
    },
    formatPercent,
    formatCompact(value) {
      return formatCompact(value, this.currencySymbol);
    },
  },
};
</script>
<style scoped lang="scss">
.home_table {
  width: 90%;
  margin: 50px auto;
}

.home_title {
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);

  &::before {
    content: '₿';
    margin-right: 15px;
    font-size: 1.2em;
    background: linear-gradient(135deg, #f59e0b, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.home_table-select {
  margin-top: 12px;
  width: 5%;
  margin-left: 15px;
}
</style>
