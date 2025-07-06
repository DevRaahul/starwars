import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./feature/peopleSlice";
import filmSlice from "./feature/filmSlice";
import favouriteSlice from "./feature/favouriteSlice";

export const store = configureStore({
  reducer: {
    people: peopleSlice,
    film: filmSlice,
    favourites: favouriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
