import { createAction } from "@reduxjs/toolkit";
import { User } from "./interfaces";

export const appActionCreators = {
    selectPost: createAction<number>('SELECT_POST'),
    fetchUserSuccess: createAction<User>('FETCH_USER_SUCCESS'),
    fetchUserError: createAction('FETCH_USER_ERROR'),
    showError: createAction<string>('SHOW_ERROR'),
    closeError: createAction<number>('CLOSE_ERROR'),
};