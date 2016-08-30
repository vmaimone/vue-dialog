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
    confirm({template, html, title, options}) {
      if(this.show) return false

      if(options) {
        for( let key in options ) {
          if(modal.props.hasOwnProperty(key)) this[key] = options[key]
        }
      }

      this.html = (template || html) || this.template
      this.title = title || this.title
      this.show = true

      return new Promise((resolve, reject) => {
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
