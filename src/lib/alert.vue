<script>
import modal from './modal/modal.vue'

export default {
  name: 'modal-alert',
  extends: modal,
  template: modal.template,
  props: {
    type: String,
    closeWhenOK: {
      type: Boolean,
      default: true
    },
    cancelClass: {
      type: String,
      default: 'hidden'
    }
  },
  methods: {
    alert ({template, html, type, title, options}) {
      if (this.show) return Promise.reject(false)

      if (options) {
        for (let key in options) {
          if (modal.props.hasOwnProperty(key)) this[key] = options[key]
        }
      }

      this.html = (template || html) || this.template
      this.title = title || this.title

      if (type && /err/.test(type.toLowerCase())) {
        this.type = 'error'
      } else {
        this.type = type || this.type
      }

      this.show = true

      return new Promise((resolve, reject) => {
        this.$once('ok', (...args) => {
          return resolve({ ok: true })
        })
        this.$once('cancel', (...args) => {
          return resolve({ ok: !!this.closeWhenOK, cancel: true })
        })
      })
    }
  }
}
</script>
