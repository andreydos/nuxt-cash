import Vue from 'vue';
import Vuex from 'vuex';
import { configure, addDecorator } from "@storybook/vue";
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuex);

// Ensures every story is wrapped in a v-app tag
addDecorator(() => ({
  vuetify: new Vuetify({
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }}),
  template: "<v-app><story/></v-app>"
}));

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
