import { CommentReply, CommentTag, Comment, Post, NewCommentReply, User } from "./interfaces";

export const baseUrl = 'https://my-json-server.typicode.com/nishirken/bastion-test';
export const mkUrl = (url: string): string => `${baseUrl}/${url.replace(/^\//, '')}`.toString();

const mkRequest = <T>(endpoint: string, method: 'GET' | 'POST' | 'PATCH' = 'GET', body?: Record<string, any>): Promise<T> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return fetch(mkUrl(endpoint), {method, headers, body: JSON.stringify(body)}).then(r => {
        if (!r.ok) {
            throw new Error(`Api error with status ${r.status}`);
        }
        return r.json();
    });
};

export const getUser = (): Promise<User> => mkRequest('/user');

export const getPosts = (): Promise<Post[]> => mkRequest('/posts');

export const getComments = (): Promise<Comment[]> => mkRequest('/comments');

export const updateCommentTags = (commentId: number, tags: number[]): Promise<void> => mkRequest(`/comments/${commentId}`, 'PATCH', {
    tags,
});

export const getReplies = (): Promise<CommentReply[]> => mkRequest('/replies');

export const createReply = (newReply: NewCommentReply): Promise<void> => mkRequest('/replies', 'POST');

export const getTags = (): Promise<CommentTag[]> => mkRequest('/tags');