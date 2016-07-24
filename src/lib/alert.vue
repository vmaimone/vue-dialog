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
    }
  },
  methods: {
    alert({template, html, type, title}) {
      if(this.show) return

      let tpl = template || html
      let isErr = (type && /err/.test(type.toLowerCase()))

      return new Promise((resolve, reject) => {
        this.html = tpl
        this.title = title || this.title
        this.type = isErr ? 'error' : (type || this.type)
        this.show = true
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
