import type { IPersonInfo } from "@/constants/peopleInterface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface favouriteState {
  value: IPersonInfo[];
}

const initialState: favouriteState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<IPersonInfo>) => {
      // let data = [...state.value, action.payload];
      state.value.push(action.payload);
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((fav) => fav.uid !== action.payload);
      // state.value = data;
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
