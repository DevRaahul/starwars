import type { IPersonInfo } from "@/constants/peopleInterface";
import { createSlice } from "@reduxjs/toolkit";

export interface heroState {
  peopleDetailList: IPersonInfo[];
  fetchedData: {
    [key: string]: IPersonInfo[];
  };
  searchList: IPersonInfo[];
  searchResult: IPersonInfo[];
}

const initialState: heroState = {
  peopleDetailList: [],
  fetchedData: {},
  searchList: [],
  searchResult: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeopleList: (state, action) => {
      state.peopleDetailList = action.payload;
    },
    setFetchedList: (state, action) => {
      const { data, page } = action.payload;
      state.fetchedData[page] = data;
    },
    setSearchedList: (state, action) => {
      let data = [...state.searchList, ...action.payload];
      state.searchList = data;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setPeopleList, setFetchedList, setSearchedList, setSearchResult } = peopleSlice.actions;
export default peopleSlice.reducer;
