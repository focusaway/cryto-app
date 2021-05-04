import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import { CRYPTO_FIELDS, CRYPTO_FILTER_OPTIONS, CRYPTO_HEADERS } from "../../constants/crypto";

import { Crypto, CryptoData } from "../../interfaces/data/crypto";

import Loader from "../../components/Loader/Loader";
import Table, { Row } from "../../components/Table/Table";
import { CryptoTopResponse } from "../../interfaces/responses/crypto-top";
import { getListFormattedCryptos } from "../../utils/functions";
import { CRYPTO_LIST_ENDPOINT } from "../../constants/urls";
import Filter, { FilterOutput } from "../../components/Filter/Filter";

/**
 * Page for showing list of crypto.
 */

const CryptoList: React.FC = () => {
  const alert = useAlert();
  const [loading, setLoading] = useState<boolean>(false);
  const [cryptos, setCryptos] = useState<Array<Crypto>>([]);
  const [rowsTable, setRowsTable] = useState<Array<Row>>([]);

  useEffect(() => {
    setLoading(true);
    fetch(CRYPTO_LIST_ENDPOINT)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((json: CryptoTopResponse) => {
        const cryptosData: Array<CryptoData> = json.Data;
        const formattedData: Array<Crypto> = getListFormattedCryptos(cryptosData);
        setCryptos(formattedData)
        loadRows(formattedData)
        setLoading(false);
      })
      .catch((error) => alert.error(error));
  }, [alert])

  const handleFilterChange = (event: FilterOutput): void => {
    switch (event.field) {
      case CRYPTO_FIELDS.NAME:
        loadRows(cryptos.filter(crypto => crypto.name.startsWith(event.value)))
        break;
      case CRYPTO_FIELDS.MIN_PRICE:
        loadRows(cryptos.filter(crypto => crypto.price >= parseFloat(event.value)))
        break;
      case CRYPTO_FIELDS.MAX_PRICE:
        loadRows(cryptos.filter(crypto => crypto.price <= parseFloat(event.value)))
        break;
      case CRYPTO_FIELDS.MARKET_CAP:
        loadRows(cryptos.filter(crypto => crypto.marketCap <= parseFloat(event.value)))
        break;
      case CRYPTO_FIELDS.CIRCULATING_SUPPLY:
        loadRows(cryptos.filter(crypto => crypto.circulatingSupply <= parseFloat(event.value)))
        break;
      default:
        loadRows(cryptos)
        break;
    }
  };
  const handleError = (error: string): void => {
    alert.error(error);
  };

  const loadRows = (list: Array<Crypto>) => {
    setRowsTable(list.map((data, index: number) => (
      [index.toString(), data.name, data.price.toString(), data.marketCap.toString(), data.circulatingSupply.toString()]
    )));
  };

  if (loading) return <Loader />;

  return (
    <div className="CryptoList">
      <Filter
        classes="flex justify-end"
        options={CRYPTO_FILTER_OPTIONS}
        onSearch={handleFilterChange}
        onError={handleError}
      />
      <Table classes="mt-4" headers={CRYPTO_HEADERS} rows={rowsTable} />
    </div>
  );
}

export default CryptoList;
