<template>
<div>
  <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
    <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/myavatar.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Pang Jian</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="miniVariant = !miniVariant">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-2">
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" @click="clickSider(item.link)" >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'BlogSider',
    data () {
      return {
        clipped: true,
        drawer: false,
        items: [{
          icon: 'home',
          title: '主页',
          link: '/'
        },
        {
          icon: 'info',
          title: '关于我',
          link: '/about'
        },
        {
          icon: 'dashboard',
          title: '友链',
          link: '/link'
        }],
        miniVariant: false,
        title: 'Pangjian\'s Blog'
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        if (!this.$vuetify.breakpoint.mdAndDown) {
          this.drawer = true
        }
      },
      clickSider (path) {
        this.$router.push(path)
        if (path === '/') {
          this.$store.dispatch('changePage', 1)
        }
      }
    }
  }
</script>

<style scoped>
</style>
