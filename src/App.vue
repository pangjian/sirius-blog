<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <blog-main></blog-main>
    <blog-footer></blog-footer>
  </v-app>
</template>

<script>
import BlogHeader from './components/bone/header.vue'
import BlogMain from './components/bone/main.vue'
import BlogSider from './components/bone/sider.vue'
import BlogFooter from './components/bone/footer.vue'
export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      title: 'Pangjian\'s Blog'
    }
  },
  name: 'App',
  components: {
    'BlogHeader': BlogHeader,
    'BlogMain': BlogMain,
    'BlogSider': BlogSider,
    'BlogFooter': BlogFooter
  }
}
</script>
