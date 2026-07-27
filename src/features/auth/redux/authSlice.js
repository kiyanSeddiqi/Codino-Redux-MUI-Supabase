import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  authModalOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.authModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.authModalOpen = false;
    },
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      state.error = null;
      state.authModalOpen = false;
    },
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    restoreSession: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      state.error = null;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {
  openAuthModal,
  closeAuthModal,
  authStart,
  authSuccess,
  authFailure,
  logout,
  clearAuthError,
  restoreSession,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;
