export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.authUser) {
      commit('user/setUser', req.authUser);
    }
  }
};
