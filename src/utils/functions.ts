import { Crypto, CryptoData } from "../interfaces/data/crypto";

export const getCryptoFromData = (crypto: CryptoData): Crypto => {
  return {
    key: crypto.RAW.USD.FROMSYMBOL,
    price: crypto.RAW.USD.PRICE,
    marketCap: crypto.RAW.USD.MKTCAP,
    circulatingSupply: crypto.RAW.USD.SUPPLY,
    name: crypto.RAW.USD.FROMSYMBOL,
  }
}

export const getListFormattedCryptos = (cryptos: Array<CryptoData>): Array<Crypto> => {
  let formattedData: Array<Crypto> = [];

  cryptos.forEach((crypto) => {
    if (crypto?.RAW?.USD) formattedData.push(getCryptoFromData(crypto));
  });
  return formattedData
}