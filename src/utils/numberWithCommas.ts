export function numberWithCommas(x: number): string {
  return x.toFixed(2).replace(/\.00$/, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
