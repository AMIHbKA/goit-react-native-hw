import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState();

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const postToAdd = action.payload;
      postsAdapter.addOne(state, postToAdd);
    },
  },
});

/* 
TODO
Убрать Юзера при прокрутке
**/

export const { selectAll: selectPosts, selectById: selectPostById } =
  postsAdapter.getSelectors((state) => state.posts);

export const selectPostsIds = createSelector(selectPosts, (posts) =>
  posts.map((post) => post.id)
);

export const selectSortedPosts = createSelector(selectPosts, (posts) =>
  posts.slice().sort((a, b) => b.timestamp - a.timestamp)
);

export const { addPost } = postsSlice.actions;
