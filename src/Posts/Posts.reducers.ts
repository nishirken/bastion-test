import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces";
import { postsActionCreators } from "./Posts.actions";

export type PostsState = {
    posts: Post[];
};

const initialState: PostsState = {
    posts: [],
};

export const postsReducer = createReducer(initialState, builder => {
    builder
        .addCase(postsActionCreators.fetchPostsSuccess.toString(), (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        });
});