exports['vModal'] = require('./modal/modal.vue')
exports['vAlert'] = require('./alert.vue')
exports['vConfirm'] = require('./confirm.vue')
exports['install'] = function (Vue) {
  let mixin = require('./mixin').default
  mixin.install(Vue)
}


