const Vue = require('vue')
const VueDialog = require('./lib')
Vue.use(VueDialog)

window.$vm = new Vue({
  el: '#main',
  render (h) {
    return h(require('./demo.vue'))
  }
})
