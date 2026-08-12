import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

const userFavoriteCatSlice = createSlice({
  name: "userFavoriteCategory",
  initialState,
  reducers: {
    openFavoriteCatModal: (state) => {
      state.modalOpen = true;
    },
    closeFavoriteCatModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { openFavoriteCatModal, closeFavoriteCatModal } =
  userFavoriteCatSlice.actions;

export default userFavoriteCatSlice.reducer;
