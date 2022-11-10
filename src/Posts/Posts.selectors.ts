import { RootState } from "../app/store";

export const postsSelectors = {
    posts: (state: RootState) => state.posts.posts,
};