import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'
import Post from '@/components/post'

import md from '@/blogs/_posts/a-strange-bug.md'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page1',
      component: Page
    }, {
      path: '/page/:number',
      name: 'Page',
      component: Page
    }, {
      path: '/post/:year/:month/:day/:title',
      name: 'post',
      component: Post
    }, {
      path: '/test',
      name: 'test',
      component: md
    }
  ]
})
