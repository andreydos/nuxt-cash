<template>
  <v-layout
    justify-center
    align-center
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="pt-0"
      >
        <Wallets />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pt-0"
      >
        <RecentTransactions />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import Wallets from '../components/Wallets';
import RecentTransactions from '../components/RecentTransactions';

export default {
  components: { RecentTransactions, Wallets }
};
</script>
