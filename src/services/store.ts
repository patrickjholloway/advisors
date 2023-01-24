import { configureStore } from "@reduxjs/toolkit";
import { advisorApi } from "./advisors";

export const store = configureStore({
  reducer: {
    [advisorApi.reducerPath]: advisorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advisorApi.middleware),
});

export default store;
