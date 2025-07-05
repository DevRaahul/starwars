import { createSlice } from "@reduxjs/toolkit";

export interface planetState {
  value: [];
}

const initialState: planetState = {
  value: [],
};

export const peopleSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {
    setPlanetList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPlanetList } = peopleSlice.actions;

export default peopleSlice.reducer;
