<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-container class="white--text" fluid>
        <router-link :to="{path: '/' }"><v-btn text class="white--text">Home</v-btn></router-link>
        <router-link :to="{path: '/portfolio' }"><v-btn text class="white--text">Portfolio</v-btn></router-link>
        <router-link :to="{path: '/contact' }"><v-btn text class="white--text">Portfolio</v-btn></router-link>
        <router-link :to="{path: '/about' }"><v-btn text class="white--text">About</v-btn></router-link>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
