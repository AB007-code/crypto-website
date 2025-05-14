import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { webSocket } from "./redux/Websocket";
import CryptoTable from "./components/CryptoTable";

function App() {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    webSocket(dispatch, store.getState);
  }, [dispatch, store]);

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
