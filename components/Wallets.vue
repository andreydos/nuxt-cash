<template>
  <v-card>
    <v-card-title class="headline">
      Wallets
    </v-card-title>
    <v-card-text>
      <hr class="my-3">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
      >
        Nuxt Documentation
      </a>
      <br>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
      >
        Nuxt GitHub
      </a>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        nuxt
        to="/support"
      >
        Support
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'Wallets'
}
</script>
