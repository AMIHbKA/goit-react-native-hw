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
Сортировка списка постов. Самые свежие наверху
timestamp
Убрать Юзера при прокрутке
**/

export const { selectAll: selectPosts, selectById: selectPostById } =
  postsAdapter.getSelectors((state) => state.posts);

export const selectPostsIds = createSelector(selectPosts, (posts) =>
  posts.map((post) => post.id)
);

export const { addPost } = postsSlice.actions;
