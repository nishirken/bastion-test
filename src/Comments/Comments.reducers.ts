import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Comment, CommentReply, CommentTag } from "../interfaces";
import { commentsActionCreators } from "./Comments.actions";

export type CommentsState = {
    comments: Comment[];
    replies: CommentReply[];
    tags: CommentTag[];
};

export const initialState: CommentsState = {
    comments: [],
    replies: [],
    tags: [],
};

export const commentsReducer = createReducer(initialState, (builder) => {
    builder.addCase(commentsActionCreators.fetchCommentsSuccess.toString(), (state, action: PayloadAction<Comment[]>) => {
        state.comments = action.payload;
    });
    builder.addCase(commentsActionCreators.fetchRepliesSuccess.toString(), (state, action: PayloadAction<CommentReply[]>) => {
        state.replies = action.payload;
    });
    builder.addCase(commentsActionCreators.fetchTagsSuccess.toString(), (state, action: PayloadAction<CommentTag[]>) => {
        state.tags = action.payload;
    });
  });