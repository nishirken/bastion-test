import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { appActionCreators } from "./App.actions";
import { User } from "./interfaces";

export type AppState = {
    selectedPostId: number | null;
    user: User | null;
    errorMsgs: Record<number, string>;
};

const initialState: AppState = {
    selectedPostId: null,
    user: null,
    errorMsgs: {},
};

export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(appActionCreators.selectPost.toString(), (state, action: PayloadAction<number>) => {
            state.selectedPostId = action.payload;
        })
        .addCase(appActionCreators.fetchUserSuccess.toString(), (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        })
        .addCase(appActionCreators.showError, (state, action) => {
            const keys = Object.keys(state.errorMsgs).map(Number);
            const newId = keys.length !== 0 ? Math.max(...keys) + 1 : 1;
            state.errorMsgs[newId] = action.payload;
        })
        .addCase(appActionCreators.closeError, (state, action: PayloadAction<number>) => {
            delete state.errorMsgs[action.payload];
        });
});