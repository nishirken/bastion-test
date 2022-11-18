import { getPosts } from "../api";
import { appActionCreators } from "../App.actions";
import { AppThunk } from "../app/store";
import { postsActionCreators } from "./Posts.actions";

export const fetchPosts = (): AppThunk => async (dispatch) => {
    try {
      dispatch(postsActionCreators.fetchPostsStart());
      const response = await getPosts();

      dispatch(postsActionCreators.fetchPostsSuccess(response));
    } catch (e) {
      dispatch(postsActionCreators.fetchPostsError());
      dispatch(appActionCreators.showError('/posts request'));
    }
  };