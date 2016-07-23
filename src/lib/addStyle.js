module.exports = function addStyle(csstext) {
  if(typeof csstext !== 'string') return false

  document.head.appendChild((() => {
    let script = document.createElement('style')
    script.innerHTML = csstext
    return script
  })())

  return true

}