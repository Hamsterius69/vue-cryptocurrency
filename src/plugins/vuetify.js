import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#6366f1',
        secondary: '#10b981',
        accent: '#f59e0b',
        error: '#ef4444',
        success: '#22c55e',
        warning: '#f59e0b',
        info: '#3b82f6',
        background: '#0f0f1a',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
