import { createSlice } from "@reduxjs/toolkit";
import type { IFilmDetails } from "@/constants/filmInterface";

export interface filmState {
  value: IFilmDetails[] | [];
}

const initialState: filmState = {
  value: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    addFilms: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addFilms } = filmSlice.actions;

export default filmSlice.reducer;
