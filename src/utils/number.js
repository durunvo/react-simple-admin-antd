
export function formatCurrency(value, fix = 0) {
  return `${(value.toFixed(fix) + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}฿`
}
