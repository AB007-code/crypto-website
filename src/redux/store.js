import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./slice";

export const store = configureStore({
  reducer: {
    price: priceReducer,
  },
});
