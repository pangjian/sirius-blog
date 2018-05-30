<template>
  <v-app>
    <blog-sider></blog-sider>
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
  name: 'App',
  components: {
    'BlogHeader': BlogHeader,
    'BlogMain': BlogMain,
    'BlogSider': BlogSider,
    'BlogFooter': BlogFooter
  }
}
</script>
