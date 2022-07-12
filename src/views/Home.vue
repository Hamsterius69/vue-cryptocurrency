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
        text: 'Cryptocrurrency\'s rank',
        align: 'start',
        sortable: true,
        value: 'rank',
      }, {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      }, {
        text: 'Symbol',
        align: 'start',
        sortable: true,
        value: 'symbol',
      }, {
        text: 'Icon',
        align: 'start',
        sortable: false,
        value: 'icon',
      }, {
        text: 'Price',
        align: 'start',
        sortable: true,
        value: 'price',
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
  },
  beforeMount() {
    this.initialData();
  },
  methods: {
    initialData() {
      this.loadTableData();
    },
    loadTableData() {
      this.isDisable = true;
      this.$store.dispatch('callCryptocurrencies', this.currency.selected).then((response) => {
        if (response.data) {
          this.$store.dispatch('setCryptocurrencies', response.data.coins);
        }
        this.isDisable = false;
      }).catch((error) => {
        const errorMessage = `Error getting cryptocurrencies: ${error.response}`;
        this.isDisable = false;
        console.log(errorMessage, 'error');
      });
    },
    goToDetailPage(detail) {
      this.$store.dispatch('setcryptocurrencyDetail', detail);
      this.$router.push('/detail');
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
  color: bisque;
  margin-bottom: 10px;
}

.home_table-select {
  margin-top: 12px;
  width: 5%;
  margin-left: 15px;
}
</style>
