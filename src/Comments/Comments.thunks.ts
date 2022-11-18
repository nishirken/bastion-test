import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { getComments, getReplies, getTags, updateCommentTags } from "../api";
import { AppThunk, RootState } from "../app/store";
import { NewCommentReply } from "../interfaces";
import { commentsActionCreators } from "./Comments.actions";

export const fetchCommentsData = (): AppThunk => async (dispatch) => {
    dispatch(commentsActionCreators.setLoading(true));
    await Promise.all([
        fetchComments(dispatch),
        fetchReplies(dispatch),
        fetchTags(dispatch),
    ]);
    dispatch(commentsActionCreators.setLoading(false));
};

type Dispatch = ThunkDispatch<RootState, unknown, Action<string>>;

export const fetchComments = async (dispatch: Dispatch) => {
    try {
      const response = await getComments();

      dispatch(commentsActionCreators.fetchCommentsSuccess(response));
    } catch (e) {
      dispatch(commentsActionCreators.fetchCommentsError());
    }
  };

export const fetchReplies = async (dispatch: Dispatch) => {
    try {
        const response = await getReplies();

        dispatch(commentsActionCreators.fetchRepliesSuccess(response));
    } catch (e) {
        dispatch(commentsActionCreators.fetchRepliesError());
    }
};

export const fetchTags = async (dispatch: Dispatch) => {
    try {
        const response = await getTags();

        dispatch(commentsActionCreators.fetchTagsSuccess(response));
    } catch (e) {
        dispatch(commentsActionCreators.fetchTagsError());
    }
};

export const createReply = (reply: NewCommentReply): AppThunk => async (dispatch) => {
    try {
        await createReply(reply);

        dispatch(commentsActionCreators.createReplySuccess(reply));
    } catch (e) {
        dispatch(commentsActionCreators.createReplyError());
    }
};

export const updateTags = (commentId: number, tagsIds: number[]): AppThunk => async (dispatch) => {
    try {
        await updateCommentTags(commentId, tagsIds);

        dispatch(commentsActionCreators.addTagSuccess({commentId, tagsIds}));
    } catch (e) {
        dispatch(commentsActionCreators.addTagError());
    }
};