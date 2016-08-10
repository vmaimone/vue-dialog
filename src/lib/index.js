const VueModalUtils = require('./mixin')
const vModal = require('./modal/index')
const vAlert = require('./alert.vue')
const vConfirm = require('./confirm.vue')

VueModalUtils['vModal'] = vModal
VueModalUtils['vAlert'] = vAlert
VueModalUtils['vConfirm'] = vConfirm

module.exports = module.exports.default = VueModalUtils


