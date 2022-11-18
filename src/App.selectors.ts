import { RootState } from "./app/store";

export const appSelectors = {
    selectedPostId: (state: RootState) => state.app.selectedPostId,
    user: (state: RootState) => state.app.user,
    errorMsgs: (state: RootState) => state.app.errorMsgs,
};