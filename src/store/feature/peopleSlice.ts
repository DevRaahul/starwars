import { baseUrl } from "@/constants/constant";
import type { ICharacterDetails, IPersonInfo } from "@/constants/interface";
import { getApiUrl } from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";

export interface heroState {
  peopleDetailList: ICharacterDetails[] | IPersonInfo[];
  // nextUrl: string;
  // previousUrl: string;
  currentUrl: string;
  pageNum: number;
  fetchedData: {
    [key: string]: IPersonInfo[];
  };
}

const initialState: heroState = {
  peopleDetailList: [],
  // previousUrl: "",
  // nextUrl: "",
  currentUrl: getApiUrl(1),
  pageNum: 1,
  fetchedData: {},
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeopleList: (state, action) => {
      state.peopleDetailList = action.payload;
    },
    setNextUrl: (state, action) => {
      state.pageNum = state.pageNum + 1;
    },
    setPrevUrl: (state, action) => {
      state.pageNum = state.pageNum - 1;
    },
    setCurrentUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
    setFetchedList: (state, action) => {
      const { data, url } = action.payload;
      state.fetchedData[url] = data;
    },
  },
});

export const { setPeopleList, setNextUrl, setPrevUrl, setCurrentUrl, setFetchedList } = peopleSlice.actions;

export default peopleSlice.reducer;
