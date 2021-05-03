export interface Crypto {
  key: string;
  price: number;
  marketCap: number;
  circulatingSupply: number;
  name: string;
};

export interface CryptoData {
  RAW: { USD: CryptoObject }
};

export interface CryptoObject {
  PRICE: number;
  MKTCAP: number;
  SUPPLY: number;
  FROMSYMBOL: string;
};
