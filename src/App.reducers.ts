import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { appActionCreators } from "./App.actions";
import { User } from "./interfaces";

export type AppState = {
    selectedPostId: number | null;
    user: User | null;
};

const initialState: AppState = {
    selectedPostId: null,
    user: null,
};

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(appActionCreators.selectPost.toString(), (state, action: PayloadAction<number>) => {
            state.selectedPostId = action.payload;
        })
        .addCase(appActionCreators.fetchUserSuccess.toString(), (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        });
});