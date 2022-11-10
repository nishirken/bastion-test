import { RootState } from "../app/store";

export const commentsSelectors = {
    comments: (state: RootState) => state.comments.comments,
    replies: (state: RootState) => state.comments.replies,
    tags: (state: RootState) => state.comments.tags,
};