import { configureStore } from "@reduxjs/toolkit";
import starHeroSlice from "./feature/starHerosSlice";

export const store = configureStore({
  reducer: {
    starHero: starHeroSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
