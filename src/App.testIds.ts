import {makeTestIdSelectors} from 'test-ids';

export const testIds = {
    posts: 'posts',
    postsFilter: 'posts-filter',
    post: (id: number) => `post-${id}`,
    postBody: (postId: number) => `post-body-${postId}`,
    postTitle: (postId: number) => `post-title-${postId}`,
    postUsername: (postId: number) => `post-username-${postId}`,
    comments: 'comments',
    comment: (id: number) => `comment-${id}`,
    commentBody: (id: number) => `coment-body-${id}`,
    commentUsername: (id: number) => `comment-username-${id}`,
    commentNewReply: (commentId: number) => `comment-new-reply-${commentId}`,
    commentReplyInput: (commentId: number) => `comment-reply-input-${commentId}`,
    commentReplySubmit: (commentId: number) => `comment-reply-submit-${commentId}`,
    reply: ({id, commentId}: {id: number, commentId: number}) => `comment-reply-${commentId}-${id}`,
    tag: ({id, commentId}: {id: number, commentId: number}) => `comment-tag-${commentId}-${id}`,
    tags: (commentId: number) => `tags-${commentId}`,
    addTag: (commentId: number) => `comment-add-tag-${commentId}`,
    addTagInput: (commentId: number) => `comment-tag-input-${commentId}`,
    addTagSuggest: (tagId: number) => `comment-tag-suggest-${tagId}`,
};

const selectors = makeTestIdSelectors(testIds);
const inputSelector = (selector: string) => selector + ' input';

export const testIdSelectors = {
    ...selectors,
    postsFilter: inputSelector(selectors.postsFilter),
    commentReplyInput: (commentId: number) => inputSelector(selectors.commentReplyInput(commentId)),
    addTagInput: (commentId: number) => inputSelector(selectors.addTagInput(commentId)),
} as const;
