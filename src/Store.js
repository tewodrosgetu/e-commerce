import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Menu/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
