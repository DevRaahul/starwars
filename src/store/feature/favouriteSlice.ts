import { createSlice } from "@reduxjs/toolkit";

export interface planetState {
  value: [];
}

const initialState: planetState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.value = action.payload;
    },
    removeFavourite: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
