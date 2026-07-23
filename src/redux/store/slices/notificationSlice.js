import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_DURATION = 4000;

const initialState = {
  open: false,
  message: "",
  severity: "success",
  duration: DEFAULT_DURATION,
};

const notifSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || "success";
      state.duration = action.payload.duration ?? DEFAULT_DURATION;
    },

    hideSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = notifSlice.actions;

export default notifSlice.reducer;
