import type { IPersonInfo } from "@/constants/peopleInterface";
import { createSlice } from "@reduxjs/toolkit";

export interface favouriteState {
  value: IPersonInfo[] | [];
}

const initialState: favouriteState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      let data = [...state.value, action.payload];
      state.value = data;
    },
    removeFavourite: (state, action) => {
      let data = state.value.filter((fav) => fav.uid !== action.payload);
      state.value = data;
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
