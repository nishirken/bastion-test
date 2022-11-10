import React from 'react';
import { useAppSelector } from "../app/hooks";
import {commentsSelectors} from "./Comments.selectors";
import { Comment } from './Comment';
import { Comment as IComment } from '../interfaces';
import './Comments.css';

export type CommentsProps = {
    postId: number;
};

export const Comments: React.FC<CommentsProps> = (props) => {
    const comments = useAppSelector(commentsSelectors.comments).filter((comment) => comment.postId === props.postId);
    const replies = useAppSelector(commentsSelectors.replies);
    const tags = useAppSelector(commentsSelectors.tags);
    const commentTags = (comment: IComment) => tags.filter(({id}) => comment.tagIds.includes(id));
    const commentReplies = (comment: IComment) => replies.filter(({id}) => comment.replyIds.includes(id));

    return (
        <div className='Comments'>
            {comments.map(comment => (
                <Comment
                    comment={comment}
                    key={comment.id}
                    allTags={tags}
                    commentTags={commentTags(comment)}
                    commentReplies={replies}
                />
            ))}
        </div>
    );
};