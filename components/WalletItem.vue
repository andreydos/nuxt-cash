<template>
  <div
    :style="`background-color: ${walletItem.color}`"
    :class="{'half-opacity': !walletItem.isEnabled}"
    class="wallets-item pa-2 mb-5 elevation-5"
  >
    <span
      class="setting-icon"
    ><v-icon>mdi-settings-outline</v-icon></span>
    <div class="font-weight-medium">
      {{ walletItem.name }}
    </div>
    <div>{{ walletItem.amount }} {{ walletItem.currency }}</div>
  </div>
</template>
<script>
export default {
  name: 'WalletItem',
  props: {
    walletItem: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
  .wallets-item {
    border: 2px solid darkgrey;
    position: relative;
  }

  .disabled,
  .setting-icon {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  @media screen and (max-width: 599px) {
    .wallets-item {
      flex-basis: 30%;
      margin-right: 3.3%;
    }
  }

  .half-opacity {
    opacity: 0.5;
  }
</style>
