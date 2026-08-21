import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { addToCart, getCart, removeFromCart } from "../services/cartService";

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector((state) => state.auth.user?.id);
  const { success, error } = useSnackbar();

  useEffect(() => {
    if (!userId) {
      setCartItems([]);
      return;
    }

    async function fetchCart() {
      try {
        setIsLoading(true);

        const data = await getCart(userId);
        setCartItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCart();
  }, [userId]);

  async function addCartItemHandler(productId) {
    try {
      setIsLoading(true);

      const data = await addToCart(userId, productId);

      setCartItems((prev) => [...prev, data]);

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function removeCartItemHandler(productId) {
    try {
      setIsLoading(true);

      await removeFromCart(userId, productId);

      setCartItems((perv) =>
        prev.filter((item) => item.product_id !== productId),
      );
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return { addCartItemHandler, removeCartItemHandler, cartItems, isLoading };
}
