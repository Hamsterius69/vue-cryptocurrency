<template>
  <div class="home">
    {{ cryptocurrenciesList }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
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
      this.$store.dispatch('callCryptocurrencies').then((response) => {
        if (response.data) {
          this.$store.dispatch('setCryptocurrencies', response.data.coins);
        }
      }).catch((error) => {
        const errorMessage = `Error getting cryptocurrencies: ${error.response}`;
        console.log(errorMessage, 'error');
      });
    },
  },
};
</script>
<style scoped>
</style>
