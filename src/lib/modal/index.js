/**
 * Bootstrap Style Modal Component for Vue
 * Special thanks to @Coffcer (https://github.com/Coffcer/vue-bootstrap-modal)
 * Depends on Bootstrap.css
 */
export default {
  name: 'popup',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Modal'
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    // no close on backdrop click
    force: {
      type: Boolean,
      default: false
    },
    // custom transition
    transition: {
      type: String,
      default: 'modal'
    },
    // confirm text
    okText: {
      type: String,
      default: 'OK'
    },
    // dismiss text
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    // confirm class
    okClass: {
      type: String,
      default: 'btn btn-secondary'
    },
    // dismiss class
    cancelClass: {
      type: String,
      default: 'btn btn-secondary'
    },
    // auo-close on ok
    closeWhenOK: {
      type: Boolean,
      default: false
    },
    html: {
      type: String
    }
  },
  data () {
    return {
      duration: null
    }
  },
  computed: {
    modalClass () {
      return {
        'modal-lg': this.large,
        'modal-sm': this.small,
        'modal-full': this.full
      }
    }
  },
  created () {
    // support for esc key press
    document.addEventListener('keydown', (e) => {
      const key = e.which || e.keyCode
      if (key === 27) { // 27 is esc
        this.cancel()
      }
    })

    if (this.show) {
      document.body.className += ' modal-open'
    }
    this.$on('open', this.open)
  },
  beforeDestroy () {
    document.body.className = document.body.className.replace(/\s?modal-open/, '')
  },
  watch: {
    show (value) {
      // prevent double scrollbar
      if (value) {
        document.body.className += ' modal-open'
      } else {
        if (!this.duration) {
          this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000
        }

        window.setTimeout(() => {
          document.body.className = document.body.className.replace(/\s?modal-open/, '')
        }, this.duration || 0)
      }
    }
  },
  methods: {
    open () {
      this.$emit('open')
      if (!this.show) {
        this.show = true
      }
    },
    ok () {
      this.$emit('ok')
      if (this.closeWhenOK) {
        this.show = false
      }
    },
    cancel () {
      this.$emit('cancel')
      this.show = false
    },
    outsideClick () {
      if (!this.force) {
        this.cancel()
      }
    }
  }
}
