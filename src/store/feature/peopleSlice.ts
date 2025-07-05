import type { ICharacterDetails, IPersonInfo } from "@/constants/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface heroState {
  peopleDetailList: ICharacterDetails[] | IPersonInfo[];
  fetchedData: {
    [key: string]: IPersonInfo[];
  };
}

const initialState: heroState = {
  peopleDetailList: [],
  fetchedData: {},
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
  },
});

export const { setPeopleList, setFetchedList } = peopleSlice.actions;
export default peopleSlice.reducer;
