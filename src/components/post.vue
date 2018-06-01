<template>
  <div>
    <component v-bind:is="which_post"></component>
  </div>
</template>

<script>
  export default {
    name: 'post',
    data () {
      return {
        which_post: ''
      }
    },
    components: {
      'aaa': () => import('../blogs/_posts/a-strange-bug.md')
    },
    beforeMount () {
      // let year = this.$route.params.year
      // let month = this.$route.params.month
      let title = this.$route.params.title
      this.which_post = title
    }
  }
</script>

<style scoped>

</style>
