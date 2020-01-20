<template>
  <v-card>
    <v-card-title class="headline">
      Wallets
    </v-card-title>
    <v-card-text>
      <hr class="my-3">
      <p>{{ wallets }}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        nuxt
        to="/support"
      >
        New wallet
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Wallets',
  computed: {
    ...mapState('wallet', ['wallets']),
    ...mapState('user', ['user'])
  },
  mounted () {
    this.$store.dispatch('wallet/loadWallets');
  }
};
</script>
