import type { IPageInfo, IPersonInfo } from "@/constants/peopleInterface";
import { createSlice } from "@reduxjs/toolkit";

export interface heroState {
  peopleDetailList: IPersonInfo[];
  fetchedData: {
    [key: string]: IPersonInfo[];
  };
  searchList: IPersonInfo[];
  searchResult: IPersonInfo[];
  pageInfo: IPageInfo;
}

const initialState: heroState = {
  peopleDetailList: [],
  fetchedData: {},
  searchList: [],
  searchResult: [],
  pageInfo: {
    currentPageNum: 0,
    totalPage: 0,
    totalRecords: 0,
  },
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
    setPageInfo: (state, action) => {
      let data = { ...state.pageInfo, ...action.payload };
      state.pageInfo = data;
    },
    changeGender: (state, action) => {
      const { person, personGender } = action.payload;

      const modifiedList: IPersonInfo[] = state.peopleDetailList.map((record) =>
        record.uid === person.uid ? { ...record, gender: personGender } : record
      );
      console.log("58", modifiedList);

      state.peopleDetailList = modifiedList;
    },
  },
});

export const { setPeopleList, setFetchedList, setSearchedList, setSearchResult, setPageInfo, changeGender } = peopleSlice.actions;
export default peopleSlice.reducer;
