# Vue Cryptocurrency Tracker

A cryptocurrency price tracking application built with Vue.js and Vuetify. View real-time prices, market data, and detailed information for the top 100 cryptocurrencies.

## Features

- **Real-time cryptocurrency data** - Powered by CoinStats API
- **Currency switching** - View prices in EUR or USD
- **Searchable table** - Filter cryptocurrencies by name or symbol
- **Detailed coin view** - View comprehensive data including:
  - Price and price changes (1h, 24h, 7d)
  - Market cap and volume
  - Risk, liquidity, volatility, and market cap scores
  - Social links (Website, Twitter, Reddit)
  - Block explorers
- **Dark theme** - Crypto-themed dark UI
- **Responsive design** - Works on desktop and mobile

## Tech Stack

- **Vue.js 2.7** - Progressive JavaScript framework
- **Vuetify 2.7** - Material Design component framework
- **Vuex** - State management
- **Vue Router** - Client-side routing
- **Axios** - HTTP client
- **Sass** - CSS preprocessor

## Project Setup

```bash
# Install dependencies
yarn install

# Configure environment variables
cp .env.example .env
# Edit .env and add your CoinStats API key

# Start development server
yarn serve

# Build for production
yarn build

# Run unit tests
yarn test:unit

# Lint and fix files
yarn lint
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VUE_APP_COINSTATS_API_KEY` | Your CoinStats API key ([Get one here](https://coinstats.app/api-docs/)) |

## Project Structure

```
src/
├── api/
│   └── coins.js          # CoinStats API service
├── plugins/
│   └── vuetify.js        # Vuetify configuration
├── router/
│   └── index.js          # Vue Router configuration
├── store/
│   └── modules/
│       └── cryptocurrencies.js  # Vuex module
├── utils/
│   └── formatters.js     # Shared formatting utilities
├── views/
│   ├── Home.vue          # Main table view
│   └── Detail.vue        # Coin detail view
├── App.vue               # Root component
└── main.js               # Application entry point
```

## API

This application uses the [CoinStats OpenAPI](https://coinstats.app/api-docs/) for cryptocurrency data.

## Version History

- **v1.2.0** - API migration, dark theme, enhanced detail view, data persistence
- **v0.1.0** - Initial release

## License

MIT
