const VueModalUtils = require('./mixin')
const vModal = require('./modal/index')
const vAlert = require('./alert.vue')
const vConfirm = require('./confirm.vue')

module.exports = {
  default: VueModalUtils,
  vModal,
  vAlert,
  vConfirm,
  VueModalUtils
}