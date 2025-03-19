import { createSlice } from "@reduxjs/toolkit";
import p36_img from "../../Assets/product_36.png";
const cart = [
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p36_img,
    new_price: 85.0,
    quantity: 1,
    totalprice: 1 * 85.0,
  },
];
const initialState = {
  cart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cart;
