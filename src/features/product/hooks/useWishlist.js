import { useEffect, useState } from "react";
import { useSnackbar } from "../../../hooks/useSnackbar";
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
} from "../../auth/services/wishlistService";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { useSelector } from "react-redux";

export default function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const { error } = useSnackbar();

  useEffect(() => {
    if (!user?.id) return;

    async function fetchWishlist() {
      setLoading(true);

      try {
        const data = await getUserWishlist(user.id);

        setWishlist(data);
      } catch (err) {
        error(getErrorMessage(err.message));
      } finally {
        setLoading(false);
      }
    }

    fetchWishlist();
  }, [user?.id]);

  function isWishlisted(productId) {
    return wishlist.some((item) => item.product_id === productId);
  }

  async function toggleWishlist(productId) {
    if (!user?.id || !productId) return;

    setLoading(true);

    try {
      if (isWishlisted(productId)) {
        await removeFromWishlist(user.id, productId);

        setWishlist((prev) =>
          prev.filter((item) => item.product_id !== productId),
        );
      } else {
        const newItem = await addToWishlist(user.id, productId);

        setWishlist((prev) => [newItem, ...prev]);
      }
    } catch (err) {
      error(getErrorMessage(err.message));
    } finally {
      setLoading(false);
    }
  }

  return {
    wishlist,
    isWishlisted,
    loading,
    toggleWishlist,
  };
}
