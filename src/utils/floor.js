export function floor (num, step = 1) {
  const number = num.toFixed(step)
  if (number == '0.0') {
    return 0
  }
  return number
}
