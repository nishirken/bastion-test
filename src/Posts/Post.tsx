import React from 'react';
import { Post as IPost } from '../interfaces';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { testIds } from '../App.testIds';

export const Post: React.FC<{post: IPost; selected: boolean}> = ({post, selected}) => {
    return (
        <Card data-test-id={testIds.post(post.id)} className={`Posts__post ${selected ? 'Posts__post--selected' : ''}`}>
            <CardContent>
            <Typography variant='h6' color="text.secondary" gutterBottom data-test-id={testIds.postTitle(post.id)}>
                {post.title}
            </Typography>
            <Typography variant="body2" data-test-id={testIds.postBody(post.id)}>
                {post.body}
            </Typography>
            <Typography variant="caption" color="text.secondary" data-test-id={testIds.postUsername(post.id)}>
                {post.username}
            </Typography>
            </CardContent>
        </Card>
    )
};