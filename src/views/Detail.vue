<template>
  <v-container class="my-6">
    <v-row justify="space-around">
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
                alt="user"
                :src="cryptocurrencyDetail.icon"
              >
            </v-avatar>
            <p class="ml-3">
              {{`${cryptocurrencyDetail.name} Detail`}}
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
              Rack:
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
              AvailableSupply:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.availableSupply }}
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
              MarketCap:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.marketCap }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              Price:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.price }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              PriceBtc:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.priceBtc }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              PriceChange1d:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.priceChange1d }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              PriceChange1h:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.priceChange1h }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              PriceChange1w:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.priceChange1w }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              TotalSupply:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.totalSupply }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              volume:
            </div>
            <div class="ml-4 mb-2">
              {{ cryptocurrencyDetail.volume }}
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              TwitterUrl:
            </div>
            <div class="ml-4 mb-2">
              <a class="url-overflow" :href="cryptocurrencyDetail.twitterUrl" target="_blank">
                {{ cryptocurrencyDetail.twitterUrl }}
              </a>
            </div>
          </v-row>
          <v-row class="mt-4">
            <div class="font-weight-bold ml-8 mb-2">
              websiteUrl:
            </div>
            <div class="ml-4 mb-2">
              <a class="url-overflow" :href="cryptocurrencyDetail.websiteUrl" target="_blank">
                {{ cryptocurrencyDetail.websiteUrl }}
              </a>
            </div>
          </v-row>
          <v-row class="ml-2 mb-2">
            <v-col :cols="$vuetify.breakpoint.width > 740 ? '1' : '3'">
              <div class="font-weight-bold mb-2" style="text-align: left;">
                Exp:
              </div>
            </v-col>
            <v-col>
              <div v-for="(url, index) in cryptocurrencyDetail.exp" :key="index" class="ml-4 mb-2">
                <v-row>
                  <a class="url-overflow" :href="url" target="_blank">{{ url }}</a>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Detail',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      cryptocurrencyDetail: (state) => state.cryptocurrencies.cryptocurrencyDetail,
    }),
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped lang="scss">
.home_table {
  width: 90%;
  margin: 50px auto;
}

.detail_title {
  display: flex;
  color: bisque;
  margin-bottom: 10px;
}

.detail-buttont {
  color: white;
  border: none;
}

.url-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
