<template>
  <div>

      <h2 style="margin:.5rem 0;float:left;">Modal Windows</h2>

      <hr style="clear:both">

      <button
        class="big btn btn-primary btn-lg text-uppercase"
        @click="$alert()"
        v-text="'Alert!'">
      </button>

      <hr>

      <button
        class="big btn btn-primary btn-lg text-uppercase"
        @click="askConfirmation"
        v-text="'Confirm!'">
      </button>

      <hr>


  </div>
</template>
<script>
export default {
  name: 'demo',

  modal: {
    alert: {
      template: `this is the default alert`,
      title: 'Default',
      type: 'errorman'
    }
  },
  methods: {
    askConfirmation () {
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
        if(ok) youSaidYes()
      })
      .catch(res => {
        console.error(res)
        return res
      })
    }
  },
  mounted () {
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
