export function debounce (fn, ms = 500) {
  let isCooldown
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      isCooldown = null
      fn.apply(context, args)
    }
    clearTimeout(isCooldown)
    isCooldown = setTimeout(later, ms)
  }
}
