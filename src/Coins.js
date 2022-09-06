//import logo from './logo.svg';
//import './App.css';
import Button from "./Button";
import First from "./first";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [getCoin, setGetCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const writeMoney = (e) => setMoney(e.target.value);
  const selectCoin = (e) => setGetCoin(e.target.value);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input
          type="number"
          value={money}
          onChange={writeMoney}
          placeholder="WRITE UR USD"
        ></input>
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={selectCoin}>
            {coins.map((coin) => (
              <option value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <h2>
              Coins you can buy:
              {getCoin > 0 ? (money / getCoin).toFixed(2) : null}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
