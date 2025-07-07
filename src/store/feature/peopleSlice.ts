import type { IPageInfo, IPersonInfo } from "@/constants/peopleInterface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    setPeopleList: (state, action: PayloadAction<IPersonInfo[]>) => {
      state.peopleDetailList = action.payload;
    },
    setFetchedList: (state, action) => {
      const { data, page } = action.payload;
      state.fetchedData[page] = data;
    },
    setSearchedList: (state, action: PayloadAction<IPersonInfo[]>) => {
      // let data = [...state.searchList, ...action.payload];
      state.searchList.push(...action.payload);
    },
    setSearchResult: (state, action: PayloadAction<IPersonInfo[]>) => {
      state.searchResult = action.payload;
    },
    setPageInfo: (state, action: PayloadAction<IPageInfo>) => {
      let data = { ...state.pageInfo, ...action.payload };
      state.pageInfo = data;
    },
    changeGender: (state, action: PayloadAction<{ person: IPersonInfo; personGender: string }>) => {
      const { person, personGender } = action.payload;

      const modifiedList: IPersonInfo[] = state.peopleDetailList.map((record) =>
        record.uid === person.uid ? { ...record, gender: personGender } : record
      );

      state.peopleDetailList = [];
      state.peopleDetailList = modifiedList;
    },
  },
});

export const { setPeopleList, setFetchedList, setSearchedList, setSearchResult, setPageInfo, changeGender } = peopleSlice.actions;
export default peopleSlice.reducer;
