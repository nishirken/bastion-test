import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Comment, CommentReply, CommentTag, NewCommentReply } from "../interfaces";
import { commentsActionCreators } from "./Comments.actions";

export type CommentsState = {
    comments: Comment[];
    replies: CommentReply[];
    tags: CommentTag[];
    loading: boolean;
};

export const initialState: CommentsState = {
    comments: [],
    replies: [],
    tags: [],
    loading: false,
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
    builder.addCase(commentsActionCreators.createReplySuccess.toString(), (state, action: PayloadAction<NewCommentReply>) => {
        // Should be received from server
        const newId = Math.max(...state.replies.map(({id}) => id)) + 1;
        const newReply: CommentReply = {
            ...action.payload,
            id: newId,
        };
        state.replies.push(newReply);
        state.comments.forEach(comment => {
            if (comment.id === newReply.commentId) {
                comment.replyIds.push(newReply.id);
            }
        })
    });
    builder.addCase(commentsActionCreators.addTagSuccess.toString(), (state, action: PayloadAction<{commentId: number; tagsIds: number[]}>) => {
        state.comments.forEach(comment => {
            if (action.payload.commentId === comment.id) {
                comment.tagIds = action.payload.tagsIds;
            }
        })
    })
    .addCase(commentsActionCreators.setLoading.toString(), (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    });
  });