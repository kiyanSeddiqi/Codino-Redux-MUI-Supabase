import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { useSnackbar } from "../../../hooks/useSnackbar";
import { getErrorMessage } from "../../../utils/getErrorMessage";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { error } = useSnackbar();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => {
        error(getErrorMessage(err.message));
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}
