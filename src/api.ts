import { CommentReply, CommentTag, Comment, Post, NewCommentReply } from "./interfaces";

export const baseUrl = 'https://my-json-server.typicode.com/nishirken/bastion-test';
export const mkUrl = (url: string): string => `${baseUrl}/${url.replace(/^\//, '')}`.toString();

const mkRequest = <T>(endpoint: string, method: 'GET' | 'POST' | 'PATCH' = 'GET', body?: Record<string, any>): Promise<T> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return fetch(mkUrl(endpoint), {method, headers, body: JSON.stringify(body)}).then(r => r.json());
};

export const getPosts = (): Promise<Post[]> => mkRequest('/posts');

export const getComments = (): Promise<Comment[]> => mkRequest('/comments');

export const updateCommentTags = (tags: number[]): Promise<void> => mkRequest('/comments', 'PATCH', {
    tags,
});

export const getReplies = (): Promise<CommentReply[]> => mkRequest('/replies');

export const createReply = (newReply: NewCommentReply): Promise<void> => mkRequest('/replies', 'POST');

export const getTags = (): Promise<CommentTag[]> => mkRequest('/tags');