export type Post = {
    id: number;
    body: string;
    title: string;
    username: string;
};

export type Comment = {
    id: number;
    postId: number;
    body: string;
    username: string;
    tagIds: number[];
    replyIds: number[];
};

export type CommentReply = {
    id: number;
    commentId: number;
    body: string;
    username: string;
};

export type NewCommentReply = Omit<CommentReply, 'id'>;

export type CommentTag = {
    id: number;
    name: string;
};

export type User = {
    id: number;
    name: string;
};