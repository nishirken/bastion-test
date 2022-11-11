import React from 'react';
import {CommentReply} from '../interfaces';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { testIds } from '../App.testIds';

type RepliesProps = {
    replies: CommentReply[];
};

export const Replies: React.FC<RepliesProps> = (props) => {
    return (
        <List sx={{ width: '100%', maxHeight: 300, overflow: 'auto' }}>
            {props.replies.map(reply => (
                <ListItem key={reply.id} data-test-id={testIds.reply(reply.id, reply.commentId)}>
                    <ListItemText primary={reply.body} secondary={reply.username} />
                </ListItem>
            ))}
        </List>
    );
};