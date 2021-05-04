import { Option } from '../components/Selector/Selector'

export enum CRYPTO_FIELDS {
  NAME='name',
  MAX_PRICE='maxPrice',
  MIN_PRICE='minPrice',
  MARKET_CAP='marketCap',
  CIRCULATING_SUPPLY='circulatingSupply'
};

export const CRYPTO_FILTER_OPTIONS: Array<Option> = [
  { label: 'Filters', value: '' },
  { label: 'Name', value: CRYPTO_FIELDS.NAME },
  { label: 'Max Price', value: CRYPTO_FIELDS.MAX_PRICE },
  { label: 'Min Price', value: CRYPTO_FIELDS.MIN_PRICE },
  { label: 'Market Cap', value: CRYPTO_FIELDS.MARKET_CAP },
  { label: 'Circulating Supply', value: CRYPTO_FIELDS.CIRCULATING_SUPPLY },
];

export const CRYPTO_HEADERS: Array<string> = [
  '#', 'Name', 'Price', 'Market Cap', 'Circulating Supply'
];