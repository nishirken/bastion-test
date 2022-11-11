import { test, expect } from '@playwright/test';
import { testIdSelectors } from './App.testIds';

const url = process.env.URL ?? 'http://localhost:3000';

test.beforeEach(async ({page}) => {
    await page.goto(url);
});

test('Load posts', async ({ page }) => {
    const postsIds = [1, 2, 3, 4];
    const container = await page.waitForSelector(testIdSelectors.posts);

    for (const id of postsIds) {
        await expect(container.waitForSelector(testIdSelectors.post(id))).resolves.not.toBeNull();
    }
});

test('Post has title, body and username', async ({ page }) => {
    const postId = 1;
    const container = await page.waitForSelector(testIdSelectors.posts);
    const post = await container.waitForSelector(testIdSelectors.post(postId));

    await expect(post.$eval(testIdSelectors.postBody(postId), el => el.textContent)).resolves.toBe('SDF');
    await expect(post.$eval(testIdSelectors.postTitle(postId), el => el.textContent)).resolves.toBe('bla');
    await expect(post.$eval(testIdSelectors.postUsername(postId), el => el.textContent)).resolves.toBe('Dmitriy');
});

test.describe('Posts filter', () => {
    test('By title', async ({ page }) => {
        const container = await page.waitForSelector(testIdSelectors.posts);
        const filter = await container.waitForSelector(testIdSelectors.postsFilter);
        await filter.type('blaaa');
        await expect(container.waitForSelector(testIdSelectors.post(1), {state: 'detached'})).resolves.toBeNull();
        await expect(container.waitForSelector(testIdSelectors.post(2))).resolves.not.toBeNull();
    });

    test('By username', async ({ page }) => {
        const container = await page.waitForSelector(testIdSelectors.posts);
        const filter = await container.waitForSelector(testIdSelectors.postsFilter);
        await filter.type('Dmitriy');
        // Strange, but the expectations order matters
        await expect(container.waitForSelector(testIdSelectors.post(2), {state: 'detached'})).resolves.toBeNull();
        await expect(container.waitForSelector(testIdSelectors.post(1))).resolves.not.toBeNull();
    });
});

test('Click on post opens comments', async ({ page }) => {
    const commentsIds = [1, 2];
    const posts = await page.waitForSelector(testIdSelectors.posts);
    const post = await posts.waitForSelector(testIdSelectors.post(1));

    await post?.click();

    const comments = await page.waitForSelector(testIdSelectors.comments);

    for (const id of commentsIds) {
        await expect(comments.waitForSelector(testIdSelectors.comment(id))).resolves.not.toBeNull();
    }
});

test('Comment shows replies', async ({ page }) => {
    const posts = await page.waitForSelector(testIdSelectors.posts);
    const post = await posts.waitForSelector(testIdSelectors.post(1));

    await post?.click();

    const comments = await page.waitForSelector(testIdSelectors.comments);
    const commentId = 1;
    const replyIds = [1, 2, 3];

    for (const id of replyIds) {
        await expect(comments.waitForSelector(testIdSelectors.reply(id, commentId))).resolves.not.toBeNull();
    }
});

// TODO: fix tests
test.skip('Add reply', async ({ page }) => {
    const posts = await page.waitForSelector(testIdSelectors.posts);
    const post = await posts.waitForSelector(testIdSelectors.post(1));

    await post?.click();

    const commentId = 1;

    const comments = await page.waitForSelector(testIdSelectors.comments);
    const commentReply = await comments.waitForSelector(testIdSelectors.commentNewReply(commentId));
    
    await commentReply.click();

    const input = await comments.waitForSelector(`${testIdSelectors.commentReplyInput(commentId)} input`);
    const submit = await comments.waitForSelector(testIdSelectors.commentReplySubmit(commentId));

    await input.type('NewReply');

    await submit?.click();

    await expect(comments.waitForSelector(testIdSelectors.reply(6, commentId))).resolves.not.toBeNull();
    await expect(comments.waitForSelector(testIdSelectors.commentReplyInput(commentId), {state: 'detached'})).resolves.toBeNull();
});

test.skip('Add tag', async ({ page }) => {
    const posts = await page.waitForSelector(testIdSelectors.posts);
    const post = await posts.waitForSelector(testIdSelectors.post(1));

    await post?.click();

    const commentId = 1;

    const comments = await page.waitForSelector(testIdSelectors.comments);
    const comment = await comments.waitForSelector(testIdSelectors.comment(commentId));
    const addTag = await comment.$(testIdSelectors.addTag(commentId));

    await addTag?.click();

    const input = await comment.waitForSelector(testIdSelectors.addTagInput(commentId));
    input.type('ar');
    const suggest = await comment.waitForSelector(testIdSelectors.addTagSuggest(3));
    
    await suggest.click();

    await expect(comment.waitForSelector(testIdSelectors.tag(3, commentId))).resolves.not.toBeNull();
});