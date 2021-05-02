import React, { useEffect, useState } from "react";
import { Cripto } from "./interfaces/data/cripto";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [cryptos, setCryptos] = useState({} as any)

  useEffect(() => {
    setLoading(true)
    const url =
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD";

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        let data;

        data = json.RAW;

        setCryptos(data)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [])
  if (loading) {
    return <div>loading...</div>;
  }

  let formattedData: Array<Cripto> = [];

  Object.keys(cryptos).forEach((crypto) => {
    formattedData.push({
      key: crypto,
      price: cryptos[crypto]["USD"]["PRICE"],
      market_cap: cryptos[crypto]["USD"].MKTCAP,
      circulatingSupply: cryptos[crypto]["USD"].SUPPLY,
      name: cryptos[crypto]["USD"]["FROMSYMBOL"],
    });
  });

  return (
    <div className="App">
      <div>
        <label>Filter By</label>
        <select>
          <option>Name</option>
          <option>Price</option>
          <option>Market Cap</option>
          <option>Circulating supply</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Circulating supply</th>
          </tr>
        </thead>

        <tbody>
          {formattedData.map((data) => {
            return (
              <tr key={data.key}>
                <td>Name: {data.name}</td>
                <td>Price: {data.price}</td>
                <td>Market Cap: {data.market_cap}</td>
                <td>Circulating supply: {data.circulatingSupply}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
