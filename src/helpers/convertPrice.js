import numeral from 'numeral';

export function convertPrice(price) {
  return `€${numeral(price).format('0.00')}`;
}
