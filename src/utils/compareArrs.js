export function compareArrs (firstArr, lastArr) {
  return firstArr.reduce((acc, p) => {
    if (lastArr.includes(p)) { acc = true }
    return acc
  }, false)
}
