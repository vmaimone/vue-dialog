const VueModalUtils = require('./mixin')
const vModal = require('./modal/index')
const vAlert = require('./alert.vue')
const vConfirm = require('./confirm.vue')

module.exports = module.exports.default = VueModalUtils

exports['vModal'] = vModal
exports['vAlert'] = vAlert
exports['vConfirm'] = vConfirm

