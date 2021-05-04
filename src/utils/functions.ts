import { Crypto, CryptoData } from "../interfaces/data/crypto";

/**
 * return Crypto object of the crypto data
 * @param   {CryptoData} crypto crypto data object
 * @return  {Crypto}            crypto object normalized
 */
export const getCryptoFromData = (crypto: CryptoData): Crypto => {
  return {
    key: crypto.RAW.USD.FROMSYMBOL,
    price: crypto.RAW.USD.PRICE,
    marketCap: crypto.RAW.USD.MKTCAP,
    circulatingSupply: crypto.RAW.USD.SUPPLY,
    name: crypto.RAW.USD.FROMSYMBOL,
  }
}
/**
 * return Crypto list formatted of the crypto data list
 * @param   {Array<CryptoData>} cryptos list of crypto data
 * @return  {Array<Crypto>}             list of crypto object normalized
 */
export const getListFormattedCryptos = (cryptos: Array<CryptoData>): Array<Crypto> => {
  let formattedData: Array<Crypto> = [];

  cryptos.forEach((crypto) => {
    if (crypto?.RAW?.USD) formattedData.push(getCryptoFromData(crypto));
  });
  return formattedData
}