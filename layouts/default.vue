<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <logo />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Logo from '../components/Logo';
export default {
  components: {
    Logo
  },
  data () {
    return {
      clipped: true,
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Main',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Support',
          to: '/support'
        }
      ],
      title: 'Coin'
    };
  },
  beforeMount () {
    this.drawer = window.innerWidth > 1265;
  }
};
</script>
