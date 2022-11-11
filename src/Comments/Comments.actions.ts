import { createAction } from "@reduxjs/toolkit";
import { Comment, CommentReply, CommentTag, NewCommentReply } from "../interfaces";

export const commentsActionCreators = {
    fetchCommentsSuccess: createAction<Comment[]>('FETCH_COMMENTS_SUCCESS'),
    fetchCommentsError: createAction('FETCH_COMMENTS_ERROR'),

    fetchRepliesSuccess: createAction<CommentReply[]>('FETCH_REPLIES_SUCCESS'),
    fetchRepliesError: createAction('FETCH_REPLIES_ERROR'),

    fetchTagsSuccess: createAction<CommentTag[]>('FETCH_TAGS_SUCCESS'),
    fetchTagsError: createAction('FETCH_TAGS_ERROR'),

    addTagSuccess: createAction<{commentId: number; tagsIds: number[]}>('ADD_TAG_SUCCESS'),
    addTagError: createAction('ADD_TAG_ERROR'),

    createReplySuccess: createAction<NewCommentReply>('CREATE_REPLY_SUCCESS'),
    createReplyError: createAction('CREATE_REPLY_ERROR'),
};