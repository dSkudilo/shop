const formatter = new Intl.NumberFormat('en-US', { style: 'percent' })

export function percent (value) {
  return formatter.format(value)
}
