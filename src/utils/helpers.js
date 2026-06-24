export function addComma(price) {
  return new Intl.NumberFormat("fa-IR").format(price);
}
