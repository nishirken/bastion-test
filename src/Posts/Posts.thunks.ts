import { createAsyncThunk } from "@reduxjs/toolkit";
import { getComments, getPosts } from "../api";
import { AppThunk } from "../app/store";
import { postsActionCreators } from "./Posts.actions";

export const fetchPosts = (): AppThunk => async (dispatch) => {
    try {
      const response = await getPosts();

      dispatch(postsActionCreators.fetchPostsSuccess(response));
    } catch (e) {
      dispatch(postsActionCreators.fetchPostsError());
    }
  };