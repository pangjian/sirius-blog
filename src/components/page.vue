<template>
  <div>
    <v-container >
        <v-layout row wrap align-center>
          <v-flex xs12 sm12 md10 offset-md1>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="350px"
                  :src="transformStaticUrl(post.thumbnail)"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  <div v-html="post.previewHtml"></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fa-facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
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
    },
    posts: {
      get () {
        let pl = postList.slice((this.page - 1) * PAGE_LIMIT, this.page * PAGE_LIMIT)
        return pl
      },
      set () {

      }
    }
  },
  methods: {
    updatePagination () {
      this.total = parseInt(postList.length / PAGE_LIMIT) + 1
      let page = 1
      if (this.$route.params.number) {
        if (this.$route.params.number > this.total) {
          page = this.total
        } else {
          page = this.$route.params.number
        }
      }
      this.$store.dispatch('changePage', page)
    },
    transformStaticUrl (url) {
      if (!url) {
        url = '/resources/random/material-' + Math.floor(Math.random() * 19 + 1) + '.png'
      }
      url = '/static' + url
      return url
    },
    shinkUrl (url) {

    }
  },
  beforeMount () {
    this.updatePagination()
  }
}
</script>

<style scoped>
</style>
