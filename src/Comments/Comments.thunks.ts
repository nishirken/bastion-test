import { createAsyncThunk } from "@reduxjs/toolkit";
import { getComments, getReplies, getTags, updateCommentTags } from "../api";
import { AppThunk } from "../app/store";
import { NewCommentReply } from "../interfaces";
import { commentsActionCreators } from "./Comments.actions";

export const fetchComments = (): AppThunk => async (dispatch) => {
    try {
      const response = await getComments();

      dispatch(commentsActionCreators.fetchCommentsSuccess(response));
    } catch (e) {
      dispatch(commentsActionCreators.fetchCommentsError);
    }
  };

export const fetchReplies = (): AppThunk => async (dispatch) => {
    try {
        const response = await getReplies();

        dispatch(commentsActionCreators.fetchRepliesSuccess(response));
    } catch (e) {
        dispatch(commentsActionCreators.fetchRepliesError);
    }
};

export const fetchTags = (): AppThunk => async (dispatch) => {
    try {
        const response = await getTags();

        dispatch(commentsActionCreators.fetchTagsSuccess(response));
    } catch (e) {
        dispatch(commentsActionCreators.fetchTagsError);
    }
};

export const createReply = (reply: NewCommentReply): AppThunk => async (dispatch) => {
    try {
        await createReply(reply);

        dispatch(commentsActionCreators.createReplySuccess);
    } catch (e) {
        dispatch(commentsActionCreators.createReplyError);
    }
};

export const updateTags = (tagsIds: number[]): AppThunk => async (dispatch, getState) => {
    try {
        await updateCommentTags(tagsIds);

        dispatch(commentsActionCreators.createReplySuccess);
    } catch (e) {
        dispatch(commentsActionCreators.createReplyError);
    }
};