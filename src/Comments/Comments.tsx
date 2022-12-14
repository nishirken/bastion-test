import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {commentsSelectors} from "./Comments.selectors";
import { Comment } from './Comment';
import { Comment as IComment, User } from '../interfaces';
import './Comments.css';
import { testIds } from '../App.testIds';
import { createReply, fetchCommentsData, updateTags } from './Comments.thunks';
import { CommentsSkeleton } from './CommentsSkeleton';

export type CommentsProps = {
    postId: number;
    user: User;
};

export const Comments: React.FC<CommentsProps> = (props) => {
    const dispatch = useAppDispatch();

    const comments = useAppSelector(commentsSelectors.comments).filter((comment) => comment.postId === props.postId);
    const replies = useAppSelector(commentsSelectors.replies);
    const tags = useAppSelector(commentsSelectors.tags);
    const loading = useAppSelector(commentsSelectors.loading);
    const commentTags = (comment: IComment) => tags.filter(({id}) => comment.tagIds.includes(id));
    const commentReplies = (comment: IComment) => replies.filter(({id}) => comment.replyIds.includes(id));
    const handleNewReply = (comment: IComment) => (reply: string) => {
        dispatch(createReply({
            body: reply,
            username: props.user.name,
            commentId: comment.id
        }));
    };

    useEffect(() => {
        if (comments.length === 0) {
            dispatch(fetchCommentsData());
        }
    }, [dispatch, comments]);

    const handleNewTag = (comment: IComment) => (tagId: number) => {
        dispatch(updateTags(comment.id, [...comment.tagIds, tagId]));
    };

    return (
        <div className='Comments' data-test-id={testIds.comments}>
            {loading ? <CommentsSkeleton /> : comments.map(comment => (
                <Comment
                    comment={comment}
                    key={comment.id}
                    allTags={tags}
                    commentTags={commentTags(comment)}
                    commentReplies={commentReplies(comment)}
                    onNewReply={handleNewReply(comment)}
                    onNewTag={handleNewTag(comment)}
                />
            ))}
        </div>
    );
};