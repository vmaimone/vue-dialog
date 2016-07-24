<script>
import modal from './modal/modal.vue'

export default {
  name: 'modal-confirm',
  extends: modal,
  template: modal.template,
  props: {
    type: String
  },
  methods: {
    confirm({template, html, title}) {
      if(this.show) return
      return new Promise((resolve, reject) => {
        this.html = (template || html) || this.template
        this.title = title || this.title
        this.show = true
        this.$once('ok', (...args) => {
          if(this.show) this.show = false
          return resolve(true)
        })
        this.$once('cancel', (...args) => {
          if(this.show) this.show = false
          return resolve(false)
        })
      })
    }
  }
}
</script>
