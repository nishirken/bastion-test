export const testIds = {
    posts: 'posts',
    postsFilter: 'posts-filter',
    post: (id: number) => `post-${id}`,
    postBody: (postId: number) => `post-body-${postId}`,
    postTitle: (postId: number) => `post-title-${postId}`,
    postUsername: (postId: number) => `post-username-${postId}`,
    comments: 'comments',
    comment: (id: number) => `comment-${id}`,
    commentNewReply: (commentId: number) => `comment-new-reply-${commentId}`,
    commentReplyInput: (commentId: number) => `comment-reply-input-${commentId}`,
    commentReplySubmit: (commentId: number) => `comment-reply-submit-${commentId}`,
    reply: (id: number) => `comment-reply-${id}`,
    tag: (id: number) => `comment-tag-${id}`,
    addTag: (commentId: number) => `comment-add-tag-${commentId}`,
    addTagInput: (commentId: number) => `comment-tag-input-${commentId}`,
    addTagSuggest: (tagId: number) => `comment-tag-suggest-${tagId}`,
};

export const mkSelector = (id: string) => `[data-test-id="${id}"]`;

export const testIdSelectors = {
    posts: mkSelector('posts'),
    postsFilter: mkSelector('posts-filter'),
    post: (id: number) => mkSelector(`post-${id}`),
    postBody: (postId: number) => mkSelector(`post-body-${postId}`),
    postTitle: (postId: number) => mkSelector(`post-title-${postId}`),
    postUsername: (postId: number) => mkSelector(`post-username-${postId}`),
    comments: mkSelector('comments'),
    comment: (id: number) => mkSelector(`comment-${id}`),
    commentNewReply: (commentId: number) => mkSelector(`comment-new-reply-${commentId}`),
    commentReplyInput: (commentId: number) => mkSelector(`comment-reply-input-${commentId}`),
    commentReplySubmit: (commentId: number) => mkSelector(`comment-reply-submit-${commentId}`),
    reply: (id: number) => mkSelector(`comment-reply-${id}`),
    tag: (id: number) => mkSelector(`comment-tag-${id}`),
    addTag: (commentId: number) => mkSelector(`comment-add-tag-${commentId}`),
    addTagInput: (commentId: number) => mkSelector(`comment-tag-input-${commentId}`),
    addTagSuggest: (tagId: number) => mkSelector(`comment-tag-suggest-${tagId}`),
};
