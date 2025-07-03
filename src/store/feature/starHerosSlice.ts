import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface heroState {
  value: [];
}

const initialState: heroState = {
  value: [],
};

export const starHeroSlice = createSlice({
  name: "starHero",
  initialState,
  reducers: {
    setHeroList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHeroList } = starHeroSlice.actions;

export default starHeroSlice.reducer;
