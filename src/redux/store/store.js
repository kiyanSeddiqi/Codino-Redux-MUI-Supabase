import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import notifReducer from "./slices/notificationSlice";
import authReducer from "../../features/auth/redux/authSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    notification: notifReducer,
  },
});
