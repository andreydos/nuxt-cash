import mocks from '@/helpers/mocks';

export const state = () => ({
  wallets: []
});

export const mutations = {
  setWallets (state, wallets) {
    state.wallets = wallets;
  }
};

export const actions = {
  loadWallets ({ commit }) {
    if (Math.random() > 0.5) {
      commit('setWallets', mocks.generateFakeWallets(2));
    } else {
      commit('setWallets', mocks.generateFakeWallets(5));
    }
  }
};

export const getters = {
  wallets (state) {
    return state.wallets;
  }
};
