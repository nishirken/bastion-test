import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { testIds } from '../App.testIds';
import { Comment as IComment, CommentReply, CommentTag } from '../interfaces';
import { AddTag } from './AddTag';
import { Replies } from './Replies';
import { AddReply } from './AddReply';
import './Comment.css';

type CommentProps = {
    comment: IComment;
    allTags: CommentTag[];
    commentTags: CommentTag[];
    commentReplies: CommentReply[];
    onNewReply(reply: string): void;
    onNewTag(newTagId: number): void;
};

export const Comment: React.FC<CommentProps> = ({comment, allTags, commentTags, commentReplies, onNewReply, onNewTag}) => {
    const availableTags = allTags.filter(tag => !commentTags.map(({id}) => id).includes(tag.id));

    return (
        <Card data-test-id={testIds.comment(comment.id)} className="Comment">
            <CardContent>
                <div className='Comment__header'>
                    <Typography variant="body2" data-test-id={testIds.commentBody(comment.id)}>
                        {comment.body}
                    </Typography>
                    <Typography variant="body2">
                        <span className="Comment__tags">{commentTags.map((tag) => <span data-test-id={testIds.tag(tag.id, comment.id)} key={tag.id}>#{tag.name}</span>)}</span>
                    </Typography>
                </div>
                <Typography variant="caption" color="text.secondary" data-test-id={testIds.commentUsername(comment.id)}>
                    {comment.username}
                </Typography>
            </CardContent>
            <CardActions>
                <AddReply onSubmit={onNewReply} commentId={comment.id} />
                {availableTags.length !== 0 && <AddTag onSubmit={onNewTag} tagSuggests={availableTags} commentId={comment.id} />}
            </CardActions>
            <CardContent>
                <Replies replies={commentReplies} />
            </CardContent>
        </Card>
    )
};