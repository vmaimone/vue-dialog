const Vue = require('vue')
const vueDialog = require('./lib')
Vue.use(vueDialog)
const App = require('./demo.vue')

window.$vm = new Vue({
  el: '#main',
  render(h) { return h(App) }
})