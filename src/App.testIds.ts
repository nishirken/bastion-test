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
    reply: (id: number) => `comment-reply-${id}`,
    tag: (id: number, commentId: number) => `comment-tag-${commentId}-${id}`,
    addTag: (commentId: number) => `comment-add-tag-${commentId}`,
    addTagInput: (commentId: number) => `comment-tag-input-${commentId}`,
    addTagSuggest: (tagId: number) => `comment-tag-suggest-${tagId}`,
};

export const mkSelector = (id: string) => `[data-test-id="${id}"]`;

export const testIdSelectors = {
    posts: mkSelector(testIds.posts),
    postsFilter: mkSelector(testIds.postsFilter),
    post: (id: number) => mkSelector(testIds.post(id)),
    postBody: (postId: number) => mkSelector(testIds.postBody(postId)),
    postTitle: (postId: number) => mkSelector(testIds.postTitle(postId)),
    postUsername: (postId: number) => mkSelector(testIds.postUsername(postId)),
    comments: mkSelector(testIds.comments),
    comment: (id: number) => mkSelector(testIds.comment(id)),
    commentUsername: (id: number) => mkSelector(testIds.commentUsername(id)),
    commentBody: (id: number) => mkSelector(testIds.commentBody(id)),
    commentNewReply: (commentId: number) => mkSelector(testIds.commentNewReply(commentId)),
    commentReplyInput: (commentId: number) => mkSelector(testIds.commentReplyInput(commentId)),
    commentReplySubmit: (commentId: number) => mkSelector(testIds.commentReplyInput(commentId)),
    reply: (id: number) => mkSelector(testIds.reply(id)),
    tag: (id: number, commentId: number) => mkSelector(testIds.tag(id, commentId)),
    addTag: (commentId: number) => mkSelector(testIds.addTag(commentId)),
    addTagInput: (commentId: number) => mkSelector(testIds.addTagInput(commentId)),
    addTagSuggest: (tagId: number) => mkSelector(testIds.addTagSuggest(tagId)),
};
