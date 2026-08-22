import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import notifReducer from "./slices/notificationSlice";
import authReducer from "../../features/auth/redux/authSlice";
import favoriteCategoryReducer from "../../features/dashboard/redux/favoriteCatSlice";
import cartReducer from "../../features/cart/redux/cartSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    notification: notifReducer,
    favoriteCategory: favoriteCategoryReducer,
    cart: cartReducer,
  },
});
