import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      logo: "/static-charts/btc.svg",
      price: 30000,
      change1h: 0.2,
      change24h: 1.5,
      change7d: -2.3,
      marketCap: 500000000,
      volume24h: 25000000,
      supply: 19000000,
      maxSupply: 21000000,
      changeColor: "negative",
    },
    {
      id: "xrp",
      name: "Ripple",
      symbol: "XRP",
      logo: "/static-charts/btc.svg",
      price: 30000,
      change1h: 0.2,
      change24h: 1.5,
      change7d: -2.3,
      marketCap: 500000000,
      volume24h: 25000000,
      supply: 19000000,
      maxSupply: 21000000,
      changeColor: "negative",
    },
    {
      id: "sol",
      name: "Solana",
      symbol: "SOL",
      logo: "/static-charts/btc.svg",
      price: 30000,
      change1h: 0.2,
      change24h: 1.5,
      change7d: -2.3,
      marketCap: 500000000,
      volume24h: 25000000,
      supply: 19000000,
      maxSupply: 21000000,
      changeColor: "negative",
    },
    {
      id: "bnb",
      name: "Binance",
      symbol: "BNB",
      logo: "/static-charts/btc.svg",
      price: 30000,
      change1h: 0.2,
      change24h: 1.5,
      change7d: -2.3,
      marketCap: 500000000,
      volume24h: 25000000,
      supply: 19000000,
      maxSupply: 21000000,
      changeColor: "negative",
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      logo: "/static-charts/btc.svg",
      price: 30000,
      change1h: 0.2,
      change24h: 1.5,
      change7d: -2.3,
      marketCap: 500000000,
      volume24h: 25000000,
      supply: 19000000,
      maxSupply: 21000000,
      changeColor: "negative",
    },
  ],
  reducers: {
    setPrices: (state, action) => {
      const { id, update } = action.payload;
      const data = state.find((x) => x.id === id);
      if (data) {
        Object.assign(data, update);
      }
    },
  },
});

export const { setPrices } = priceSlice.actions;
export default priceSlice.reducer;
