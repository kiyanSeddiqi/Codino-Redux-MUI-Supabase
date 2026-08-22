import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { addToCart, getCart, removeFromCart } from "../services/cartService";
import {
  addCartItem,
  cartFailure,
  cartStart,
  cartSuccess,
  removeCartItem,
  resetCart,
} from "../redux/cartSlice";

export default function useCart() {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user?.id);

  const {
    cartItems,
    loading,
    error: cartError,
  } = useSelector((state) => state.cart);

  const { success, error } = useSnackbar();

  useEffect(() => {
    if (!userId) {
      dispatch(resetCart());
      return;
    }

    async function fetchCart() {
      try {
        dispatch(cartStart());

        const data = await getCart(userId);

        dispatch(cartSuccess(data));
      } catch (error) {
        console.error(error);
        dispatch(cartFailure(error.message));
      }
    }

    fetchCart();
  }, [userId, dispatch]);

  async function addCartItemHandler(productId) {
    try {
      dispatch(cartStart());

      const data = await addToCart(userId, productId);

      dispatch(addCartItem(data));

      success("دوره با موفقیت به سبد خرید اضافه شد");

      return data;
    } catch (error) {
      console.error(error);
      dispatch(cartFailure(error.message));
      throw error;
    }
  }

  async function removeCartItemHandler(productId) {
    try {
      dispatch(cartStart());

      await removeFromCart(userId, productId);

      dispatch(removeCartItem(productId));

      success("از سبد خرید حذف شد");
    } catch (error) {
      console.error(error);
      dispatch(cartFailure(error.message));
      throw error;
    }
  }

  return {
    cartItems,
    isLoading: loading,
    error,
    addCartItemHandler,
    removeCartItemHandler,
  };
}
