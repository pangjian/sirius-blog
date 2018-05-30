<template>
<v-footer app height="auto" absolute>
  <v-layout row wrap align-center>
    <v-flex xs12>
  <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center ml-12"
  >
  <v-card-text class="white--text">
        &copy;2018 — <strong>Pangjian's Blog</strong>
        <div>
  Made with
  <v-icon class="red--text">favorite</v-icon>
  by Pangjian
  </div>
  <div>Documentation licensed under <a class="white--text" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><b>CC BY-SA 4.0</b></a>.</div>
  </v-card-text>
</v-card>
    </v-flex>
  </v-layout>
</v-footer>
</template>

<script>
export default {
  name: 'BlogFooter',
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram']
  })
}
</script>


<style scoped>
</style>
