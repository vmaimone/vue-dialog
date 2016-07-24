const Vue = require('vue')
const mixin = require('./lib/mixin')

Vue.mixin(mixin)

window.$vm = new Vue({
  el: '#main',
  modal: {
    alert: {
      template: `this is the default alert`,
      title: 'Default'
    }
  },
  components: {
    thing: {
      modal: { alert: {title: 'Custom Title!'}},
      template: '<div><h4 @click="$alert({template: \'hhhhi\'})">jhgsdf!<h4></div>'
    }
  },
  data: {
    alertsTriggered: 0
  },
  methods: {
    showAltAlert() {
      this.$alert({
        title: 'TITLE!',
        template: 'hiiiii'
      })
      .then(res => {
        console.log(res)
        return res
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
