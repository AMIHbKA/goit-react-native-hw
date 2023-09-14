import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "../redux/features/posts/slice";

export const store = configureStore({
  reducer: { posts: postsSlice.reducer },
});
