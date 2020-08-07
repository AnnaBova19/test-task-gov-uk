import Vue from "vue";
import Vuex, { Store } from "vuex";
import persistedState from './plugins/storage';

import registration from "./modules/registration";

const plugins = [];

if (process.browser) {
    plugins.push(persistedState);
}

Vue.use(Vuex);

export default new Store({
    modules: {
      registration
    },
    plugins
});
