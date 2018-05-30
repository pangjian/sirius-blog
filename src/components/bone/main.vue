<template>
  <v-content>
    <router-view/>
    <div class="text-xs-center">
      <v-pagination :length="4" v-model="page" circle></v-pagination>
    </div>
  </v-content>
</template>

<script>
  export default {
    name: 'BlogMain',
    data () {
      return {
        page: 1
      }
    }
  }
</script>

<style scoped>

</style>
