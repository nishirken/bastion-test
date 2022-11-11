import React, { ChangeEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { postsSelectors } from "./Posts.selectors";
import { Post } from './Post';
import './Posts.css';
import Input from '@mui/material/Input';
import { testIds } from '../App.testIds';
import { postsActionCreators } from './Posts.actions';
import { Post as IPost } from '../interfaces';

type PostsProps = {
    onPostSelect(post: IPost): void;
    selectedPostId: number | null;
};

export const Posts: React.FC<PostsProps> = (props) => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(postsSelectors.posts);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch(postsActionCreators.filterPosts(event.target.value));
    };

    return (
        <div className="Posts" data-test-id={testIds.posts}>
            <Input
                placeholder="Enter post username or title"
                data-test-id={testIds.postsFilter}
                className="Posts__input"
                onChange={handleInputChange}
            />
            <div className='Posts__list'>
                {posts.map((post) => (
                    <Post post={post} key={post.id} selected={post.id === props.selectedPostId} onPostSelect={props.onPostSelect} />
                ))}
            </div>
        </div>
    );
};