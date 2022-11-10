import { updateCommentTags } from "../api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Comment } from "../interfaces";
import {commentsSelectors} from "./Comments.selectors";

export type CommentsProps = {
    postId: number;
};

export const Comments: React.FC<CommentsProps> = (props) => {
    const comments = useAppSelector(commentsSelectors.comments).filter((comment) => comment.postId === props.postId);
    const replies = useAppSelector(commentsSelectors.replies);
    const tags = useAppSelector(commentsSelectors.tags);

    return <div>{comments.length}</div>;
};