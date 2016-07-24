## Description
A vue.js flavored alternative to `window.alert` and `window.confirm`.

## Usage Example
todo
```
import Vue from 'vue'
import vModal from '@vmaimone/vue-modal-lib

Vue.use(vModal)

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
import { vAlert } from '@vmaimone/vue-modal-lib

Vue.component('custom-alert', {
  components: { vAlert }
})

```