<template>
  <v-content>
    <keep-alive include="page">
      <router-view/>
    </keep-alive>
  </v-content>
</template>

<script>
  export default {
    name: 'BlogMain',
    data () {
      return {
      }
    },
    beforeMount () {
    }
  }
</script>

<style scoped>

</style>
