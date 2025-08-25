import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  item: {},
};
const API = "https://jsonplaceholder.typicode.com/todos/1";

//fetch

export const fetchItems = createAsyncThunk("cart/fetch", async () => {
  const { data } = await axios.get(API);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state, action) => {
      state.cartList.forEach((item) => {
        item?.id === action.payload && item.quantity++;
      });
    },
    decrement: (state, action) => {
      state.cartList.forEach((item) => {
        item?.id === action.payload && item.quantity--;
      });
    },
    addToCart: (state, action) => {
      if (!state.cartList.find((item) => item?.id === action.payload?.id)) {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.item = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log(action.type, "payload");
      });
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
