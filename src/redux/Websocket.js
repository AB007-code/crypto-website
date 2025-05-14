import { setPrices } from "./slice";
function randomChange(value) {
  const change = value * (Math.random() * 0.01 - 0.005);
  return parseFloat((value + change).toFixed(2));
}
function changeColorData(currData, updateData) {
  if (currData > updateData) {
    return "negative";
  } else {
    return "positive";
  }
}
export function webSocket(dispatch, getState) {
  setInterval(() => {
    const state = getState(); //getState() will return the current state
    const data1 = state.price;
    const index = Math.floor(Math.random() * data1.length);
    const cryData = data1[index];
    console.log(cryData);
    let a = localStorage.setItem("data", JSON.stringify(cryData));
    console.log(a);
    const update = {
      price: randomChange(cryData.price),
      change1h: randomChange(cryData.change1h),
      change24h: randomChange(cryData.change24h),
      volume24h: randomChange(cryData.volume24h),
      changeColor: changeColorData(cryData.price),
    };
    let changePriceColor = "";
    if (cryData.price < update.price) {
      changePriceColor = "positive";
    } else if (cryData.price > update.price) {
      changePriceColor = "negative";
    }
    dispatch(setPrices({ id: cryData.id, update }));
  }, 1500);
}
