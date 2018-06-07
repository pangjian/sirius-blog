<template>
  <div>
    {{ $route.params.number }}
    <div class="text-xs-center">
      <v-pagination :length="total" v-model="page"></v-pagination>
    </div>
  </div>
</template>

<script>
import postList from '@/blogs/post-list.json'
const PAGE_LIMIT = 10
export default {
  name: 'page',
  data () {
    return {
      total: 1
    }
  },
  computed: {
    page: {
      get () {
        return parseInt(this.$store.state.pagenum)
      },
      set (value) {
        this.$store.dispatch('changePage', parseInt(value))
        this.$router.push({ path: '/page/' + value })
      }
    }
  },
  methods: {
    updatePagination () {
      this.total = parseInt(postList.length / PAGE_LIMIT)
      let page = 1
      if (this.$route.params.number) {
        if (this.$route.params.number > this.total) {
          page = this.total
        } else {
          page = this.$route.params.number
        }
      }
      this.$store.dispatch('changePage', page)
    }
  },
  beforeMount () {
    this.updatePagination()
  }
}
</script>

<style scoped>
</style>
