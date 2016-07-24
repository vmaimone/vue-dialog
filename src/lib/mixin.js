const Vue = require('vue')
const alert = Vue.extend(require('./alert.vue'))
const alertId = 'modal-alert'
const confirmId = 'modal-confirm'
const data = {
  alert: {
    id: `${alertId}`,
    selector: `#${alertId}`,
    template: `<div id="${alertId}"></div>`,
    component: null
  }
}
export default Vue.mixin({
  components: { alert },
  methods: {
    $alert(options) {
      if (this.$options.modal) {
        this.$options.modal.alert = Object.assign(
          {},
          this.$options.modal.alert || {},
          options || {}
        )
        return data.alert.component.alert(this.$options.modal.alert)
      }
    }
  },
  ready() {
    if (!this.$options.modal) return

    if (!document.getElementById(data.alert.id)) {
      let el = this.$root.$el
      el.insertAdjacentHTML('beforeEnd', data.alert.template)
      data.alert.component = new alert({ el: data.alert.selector })
    }
  }
})

