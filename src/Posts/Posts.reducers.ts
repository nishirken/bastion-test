import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces";
import { postsActionCreators } from "./Posts.actions";

export type PostsState = {
    shownPosts: Post[];
    allPosts: Post[];
};

const initialState: PostsState = {
    allPosts: [],
    shownPosts: [],
};

export const postsReducer = createReducer(initialState, builder => {
    builder
        .addCase(postsActionCreators.fetchPostsSuccess.toString(), (state, action: PayloadAction<Post[]>) => {
            state.allPosts = action.payload;
            state.shownPosts = action.payload;
        })
        .addCase(postsActionCreators.filterPosts.toString(), (state, action: PayloadAction<string>) => {
            state.shownPosts = state.allPosts.filter(({title, username}) => {
                return title.includes(action.payload) || username.includes(action.payload);
            });
        });
});