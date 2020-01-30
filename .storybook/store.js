import Vuex from 'vuex';
import axios from 'axios';
// You can do the same for getters, mutations and states
import {state, mutations, actions } from '@/store/wallet';
let store = new Vuex.Store({
    state,
    mutations,
    actions
});
/**
 Bind Axios to Store as we don't have access to Nuxt's $axios instance here. See caveat below.
 **/
store.$axios = axios;
export default store;
