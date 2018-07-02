import Vue from 'vue'

import Router from 'vue-router'
import RouterNav from 'vue-router-nav'

Vue.use(Router)
Vue.use(RouterNav)

import VJstree from '../src/index.js'

Vue.use(VJstree)

import pages from './pages'

const pages_patterns = Object.entries(pages).map(([name, component]) => {
  return {
    path: `/${name}`,
    name,
    component,
  }
})
console.log(pages_patterns)

const router = new Router({
  routes: pages_patterns
})

import App from './App.vue'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
