import { createAction } from '@reduxjs/toolkit';
import { Post } from '../interfaces';

export const postsActionCreators = {
    fetchPostsStart: createAction('FETCH_POSTS_START'),
    fetchPostsSuccess: createAction<Post[]>('FETCH_POSTS_SUCCESS'),
    fetchPostsError: createAction('FETCH_POSTS_ERROR'),
    filterPosts: createAction<string>('FILTER_POSTS'),
};