import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces";
import { postsActionCreators } from "./Posts.actions";

export type PostsState = {
    shownPosts: Post[];
    allPosts: Post[];
    postsLoading: boolean;
};

const initialState: PostsState = {
    allPosts: [],
    shownPosts: [],
    postsLoading: false,
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
        })
        .addCase(postsActionCreators.fetchPostsStart.toString(), (state, action: PayloadAction) => {
            state.postsLoading = true;
        })
        .addMatcher(action => [
            postsActionCreators.fetchPostsSuccess.toString(),
            postsActionCreators.fetchPostsError.toString(),
        ].includes(action.type), (state, action: PayloadAction) => {
            state.postsLoading = false;
        });
});