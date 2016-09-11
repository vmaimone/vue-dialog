## Description
A vue.js flavored alternative to `window.alert` and `window.confirm`.

## Usage Example
todo
```
import Vue from 'vue'
import VueDialog from 'vue-dialog'

Vue.use(VueDialog)

new Vue({
  modal: {
    alert: {
      title: 'hello world!',
      template: 'modal-window!'
    }
  },
  ready() {
    this.$alert()
  }
})

```

```
import Vue from 'vue'
import { vAlert } from 'vue-dialog'

Vue.component('custom-alert', {
  components: { vAlert }
})

```

## Credits

Special thanks to @Coffcer for providing the base modal component (https://github.com/Coffcer/vue-bootstrap-modal)


