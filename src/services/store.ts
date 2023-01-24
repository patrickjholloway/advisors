import { configureStore } from "@reduxjs/toolkit";
import { advisorApi } from "./advisors";

export const store = configureStore({
  reducer: {
    [advisorApi.reducerPath]: advisorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advisorApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
