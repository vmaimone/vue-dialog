const _alert = require('./alert.vue')
const _confirm = require('./confirm.vue')

const alertId = 'modal-alert'
const confirmId = 'modal-confirm'

const data = {
  alert: {
    id: `${alertId}`,
    selector: `#${alertId}`,
    template: `<div id="${alertId}"></div>`,
    component: null
  },

  confirm: {
    id: `${confirmId}`,
    selector: `#${confirmId}`,
    template: `<div id="${confirmId}"></div>`,
    component: null
  }
}

let Vue; // late bind

export default ({
  methods: {
    $alert(options = {}) {
      let { modal } = this.$options
      if (!modal) {
        return Promise.reject(this.generateErr('alert'))
      } else {
        let defaults = modal.alert || {}
        let opts = Object.assign({}, defaults, options)
        return data.alert.component.alert(opts)
      }
    },

    $confirm(options = {}) {
      let { modal } = this.$options
      if (!modal) {
        return Promise.reject(this.generateErr('confirm'))
      } else {
        let defaults = modal.confirm || {}
        let opts = Object.assign({}, defaults, options)
        return data.confirm.component.confirm(opts)
      }
    },

    generateErr(flavor) {
      let prefix = flavor ? `[${flavor} error]`.toUpperCase() : ''
      let vm = this.$options.name || 'vm'
      let msg = `'${vm}.modal' is missing`
      return new Error(`${prefix}: ${msg}`)
    }
  },

  mounted() {
    if (!this.$options.modal) return

    const el = this.$root.$el
    const alert = Vue.extend(_alert)
    const confirm = Vue.extend(_confirm)

    if (!document.getElementById(data.confirm.id)) {
      el.insertAdjacentHTML('beforeEnd', data.confirm.template)
      data.confirm.component = new confirm({ el: data.confirm.selector })
    }

    if (!document.getElementById(data.alert.id)) {
      el.insertAdjacentHTML('beforeEnd', data.alert.template)
      data.alert.component = new alert({ el: data.alert.selector })
    }

  },

  install(_Vue) {
    Vue = _Vue
    Vue.mixin(this)
  }
})
