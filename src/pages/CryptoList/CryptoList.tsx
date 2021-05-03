import React, { ChangeEvent, useEffect, useState } from "react";

import { FilterOptions } from "../../constants/crypto";

import { Crypto, CryptoData } from "../../interfaces/data/crypto";

import Loader from "../../components/Loader/Loader";
import Selector from "../../components/Selector/Selector";
import Table, { Row } from "../../components/Table/Table";
import { CryptoTopResponse } from "../../interfaces/responses/crypto-top";
import { getListFormattedCryptos } from "../../utils/functions";
import { CRYPTO_LIST_ENDPOINT } from "../../constants/urls";

const CryptoList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [rowsTable, setRowsTable] = useState<Array<Row>>([])

  const headersTable = ['#'].concat(FilterOptions.map(option => (
    option.label
  )));

  useEffect(() => {
    setLoading(true)
    fetch(CRYPTO_LIST_ENDPOINT)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((json: CryptoTopResponse) => {
        const cryptos: Array<CryptoData> = json.Data;
        const formattedData: Array<Crypto> = getListFormattedCryptos(cryptos);
        setRowsTable(formattedData.map((data, index: number) => (
          [index.toString(), data.name, data.price.toString(), data.marketCap.toString(), data.circulatingSupply.toString()]
        )));
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [])

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    event.persist();
    console.log('event', event.target);
  };

  if (loading) return <Loader />;

  return (
    <div className="CryptoList">
      <div>
        <Selector
          label={'Filter By'}
          options={FilterOptions}
          onChange={handleFilterChange}
        />
      </div>
      <Table headers={headersTable} rows={rowsTable} />
    </div>
  );
}

export default CryptoList;
