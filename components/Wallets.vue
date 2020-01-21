<template>
  <v-card>
    <v-card-title class="headline">
      Wallets
    </v-card-title>
    <div
      :class="{'justify-space-around': visibleWalletsCount <= 2}"
      class="wallets d-flex flex-row flex-sm-column flex-wrap pa-4"
    >
      <template v-for="walletItem in enabledWallets">
        <WalletItem :wallet-item="walletItem" :key="walletItem.id" />
      </template>
      <template v-for="walletItem in disabledWallets">
        <WalletItem :wallet-item="walletItem" :key="walletItem.id" />
      </template>
    </div>
    <v-card-actions>
      <v-btn
        v-if="enabledWallets.length < wallets.length"
        @click="disabledWalletsVisible = !disabledWalletsVisible"
        color="primary"
      >
        {{ disabledWalletsVisible ? 'Hide' : 'Show' }} disabled
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
      >
        New wallet
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import WalletItem from './WalletItem';

export default {
  name: 'Wallets',
  components: { WalletItem },
  data () {
    return {
      disabledWalletsVisible: false
    };
  },
  computed: {
    ...mapState('wallet', ['wallets']),
    enabledWallets () {
      return this.wallets.filter((w) => {
        return w.isEnabled;
      });
    },
    disabledWallets () {
      return this.disabledWalletsVisible && this.wallets.filter((w) => {
        return !w.isEnabled;
      });
    },
    visibleWalletsCount () {
      return this.enabledWallets.length + this.disabledWallets.length;
    }
  },
  mounted () {
    this.$store.dispatch('wallet/loadWallets');
  }
};
</script>
