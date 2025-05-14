import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAllAssets } from "../redux/Selector";
import "../index.css";
const formatNumber = (num) => num.toLocaleString();
const CryptoTable = () => {
  const data = useSelector(selectAllAssets);
  // console.log(data);
  let a;
  if (data.changeColor == "negative") {
    a = "red";
  } else {
    a = "black";
  }
  // let y = JSON.parse(localStorage.getItem("data"));

  // let v = data.find((ele) => ele.id === y.id);

  // // console.log(y.change24h);

  // let changeColor = "negative";
  // let changeColor1 = "negative";
  // let changeColor2 = "negative";
  // if (v) {
  //   if (y.change24h < v.change24h) {
  //     changeColor = "positive";
  //   }
  //   if (y.change1h < v.change1h) {
  //     changeColor1 = "positive";
  //   }
  //   if (y.change7d < v.change7d) {
  //     changeColor2 = "positive";
  //   }
  // }
  // // let b = localStorage.getItem();
  // console.log(data);
  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>
                <img src={asset.logo} alt="" width="24" />
              </td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${formatNumber(asset.price)}</td>
              <td
                style={{
                  color: asset.changeColor == "negative" ? "red" : "black",
                }}
              >
                {asset.change1h}%
              </td>
              <td
                //  className={asset.id == v.id ? changeColor1 : "positive"}
                style={{
                  color: asset.changeColor == "negative" ? "red" : "black",
                }}
              >
                {asset.change24h}%
              </td>
              <td
                style={{
                  color: asset.changeColor == "negative" ? "red" : "black",
                }}
                //  className={asset.id == v.id ? changeColor2 : "positive"}
              >
                {asset.change7d}%
              </td>
              <td>${formatNumber(asset.marketCap)}</td>
              <td>${formatNumber(asset.volume24h)}</td>
              <td>{formatNumber(asset.supply)}</td>
              <td>{formatNumber(asset.maxSupply)}</td>
              <td>
                <img
                  src={`/static-charts/${asset.id}-7d.svg`}
                  alt="7D Chart"
                  height="30"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
