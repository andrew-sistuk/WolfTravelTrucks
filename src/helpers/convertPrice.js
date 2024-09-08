import numeral from 'numeral';

export default function convertPrice(price) {
  return `€${numeral(price).format('0.00')}`;
}
