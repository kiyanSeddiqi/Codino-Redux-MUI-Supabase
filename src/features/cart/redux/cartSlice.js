import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartStart(state) {
      state.loading = true;
      state.error = null;
    },

    cartSuccess(state, action) {
      state.loading = false;
      state.cartItems = action.payload;
      state.error = null;
    },

    cartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    addCartItem(state, action) {
      state.cartItems.push(action.payload);
    },

    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload,
      );
    },

    clearCart(state) {
      state.cartItems = [];
    },

    resetCart(state) {
      state.cartItems = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  cartStart,
  cartSuccess,
  cartFailure,
  addCartItem,
  removeCartItem,
  clearCart,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
