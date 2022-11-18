import { getPosts } from "../api";
import { AppThunk } from "../app/store";
import { postsActionCreators } from "./Posts.actions";

export const fetchPosts = (): AppThunk => async (dispatch) => {
    try {
      dispatch(postsActionCreators.fetchPostsStart());
      const response = await getPosts();

      dispatch(postsActionCreators.fetchPostsSuccess(response));
    } catch (e) {
      dispatch(postsActionCreators.fetchPostsError());
    }
  };