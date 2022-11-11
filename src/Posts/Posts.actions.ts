import { createAction } from '@reduxjs/toolkit';
import { Post } from '../interfaces';

export const postsActionCreators = {
    fetchPostsSuccess: createAction<Post[]>('FETCH_POSTS_SUCCESS'),
    fetchPostsError: createAction('FETCH_POSTS_ERROR'),
    filterPosts: createAction<string>('FILTER_POSTS'),
};