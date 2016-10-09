<template>
  <div>
    <h2 style="margin:.5rem 0;float:left;">Modal Windows</h2>

      <hr style="clear:both">

      <button
        class="big btn btn-primary btn-lg text-uppercase"
        @click="sayHi()"
        v-text="'Alert!'">
      </button>

      <hr>

      <button
        class="big btn btn-primary btn-lg text-uppercase"
        @click="askConfirmation"
        v-text="'Confirm!'">
      </button>

      <hr>

      <thing @click="$confirm"></thing>
  </div>
</template>
<script>
export default  {
  name: 'app',
  modal: {
    alert: {
      template: `this is the default alert`,
      title: 'Default',
      type: 'errorman'
    }
  },
  components: {
    thing: {
      modal: { alert: {title: 'Custom Title!'}},
      render(h, ctx) {
        return h('div', { class: 'child-thing' }, [h('p', 'what up!')] )
      }
      //template: '<div><h4 @click="$alert({template: \'I came from the child component!\'})">I am a child component!<h4></div>'
    }
  },
  methods: {
    sayHi() {
      return this.$alert({
        title: 'TITLE!',
        template: 'hiiiii?',
        options: {
          'okClass': 'btn btn-danger'
        }
      })
    },
    askConfirmation() {
      let youSaidYes = () => this.$alert({
        title: 'Success!',
        template: 'you said ok!'
      })
      this.$confirm({
        title: 'TITLE!',
        template: 'hiiiii?',
        options: {
          'okClass': 'btn btn-danger'
        }
      })
      .then(ok => {
        console.log('ok', ok)
        if(ok) youSaidYes()
      })
      .catch(res => {
        console.error(res)
        return res
      })
    }
  },
  mounted() {
    console.log('main.js ready')
    document.addEventListener('keyup', (e) => {
      if(e.which !== 27) this.$alert({
        template: '<h4>You pressed keycode ' + e.which + '!</h4>',
        title: 'keyup event!'
      })
    })
  }
}
</script>