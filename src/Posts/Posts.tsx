import React from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { postsSelectors } from "./Posts.selectors";
import { Post } from './Post';
import './Posts.css';
import Input from '@mui/material/Input';
import { testIds } from '../App.testIds';

export const Posts: React.FC<{selectedPostId: number}> = (props) => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(postsSelectors.posts);

    return (
        <div className="Posts">
            <Input placeholder="Enter post username or title" onChange={console.log} data-test-id={testIds.postsFilter} className="Posts__input" />
            <div className='Posts__list'>
                {posts.map((post) => (
                    <Post post={post} key={post.id} selected={post.id === props.selectedPostId} />
                ))}
            </div>
        </div>
    );
};