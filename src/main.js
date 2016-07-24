const Vue = require('vue')
const mixin = require('./lib/mixin')
Vue.use(mixin)

window.$vm = new Vue({
  name: 'app',
  el: '#main',
  modal: {
    alert: {
      template: `this is the default alert`,
      title: 'Default'
    }
  },
  components: {
    thing: {
      // modal: { alert: {title: 'Custom Title!'}},
      template: '<div><h4 @click="$alert({template: \'hhhhi\'})">I am a child component!<h4></div>'
    }
  },
  methods: {
    askConfirmation() {
      let youSaidYes = () => this.$alert({
        title: 'Success!',
        template: 'you said ok!'
      })
      this.$confirm({
        title: 'TITLE!',
        template: 'hiiiii'
      })
      .then(ok => {
        if(ok) youSaidYes()
      })
      .catch(res => {
        console.error(res)
        return res
      })
    }
  },
  ready() {
    console.log('main.js ready')
    document.addEventListener('keyup', (e) => {
      if(e.which !== 27) this.$alert({
        template: '<h4>You pressed keycode ' + e.which + '!</h4>',
        title: 'keyup event!'
      })
    })
  }
})
