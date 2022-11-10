import { test, expect } from '@playwright/test';
import { testIdSelectors } from './App.testIds';

const url = process.env.URL ?? 'http://localhost:3000';

test.beforeEach(async ({page}) => {
    await page.goto(url);
});

test('Load posts', async ({ page }) => {
    const postsIds = [1, 2, 3, 4, 5];
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
        await filter.type('bla');
        await expect(container.waitForSelector(testIdSelectors.post(1))).resolves.not.toBeNull();
    });

    test('By username', async ({ page }) => {
        const container = await page.waitForSelector(testIdSelectors.posts);
        const filter = await container.waitForSelector(testIdSelectors.postsFilter);
        await filter.type('Dmitriy');
        await expect(container.waitForSelector(testIdSelectors.post(1))).resolves.not.toBeNull();
    });
});

test('Click on post opens comments', async ({ page }) => {
    const commentsIds = [1, 2, 3];
    await page.goto(url);
    const container = await page.waitForSelector(testIdSelectors.posts);
    const post = await container.waitForSelector(testIdSelectors.post(1));

    await post?.click();

    await container.waitForSelector(testIdSelectors.comments);

    for (const id of commentsIds) {
        await expect(container.waitForSelector(testIdSelectors.comment(id))).resolves.not.toBeNull();
    }
});

test('Click on comment shows replies', async ({ page }) => {
    await page.goto(url);
    const container = await page.waitForSelector(testIdSelectors.posts);
    const post = await container.waitForSelector(testIdSelectors.post(1));
    await post?.click();

    const comment = await container.waitForSelector(testIdSelectors.comment(1));

    await comment.click();

    const replyIds = [1, 2, 3];

    for (const id of replyIds) {
        await expect(comment.waitForSelector(testIdSelectors.reply(id))).resolves.not.toBeNull();
    }
});

test('Add reply', async ({ page }) => {
    await page.goto(url);
    const container = await page.waitForSelector(testIdSelectors.posts);
    const post = await container.waitForSelector(testIdSelectors.post(1));
    await post?.click();
    const commentId = 1;

    const commentReply = await container.waitForSelector(testIdSelectors.commentNewReply(commentId));
    
    await commentReply.click();

    const input = await container.waitForSelector(testIdSelectors.commentReplyInput(commentId));

    await input.type('NewReply');

    const submit = await container.$(testIdSelectors.commentReplySubmit(commentId));

    submit?.click();

    await expect(container.waitForSelector(testIdSelectors.commentReplyInput(commentId), {state: 'detached'})).resolves.toBeNull();
    await expect(container.waitForSelector(testIdSelectors.commentNewReply(6))).resolves.not.toBeNull();
});

test('Add tag', async ({ page }) => {
    await page.goto(url);
    const container = await page.waitForSelector(testIdSelectors.posts);
    const post = await container.waitForSelector(testIdSelectors.post(1));
    await post?.click();
    const commentId = 1;

    const comment = await container.waitForSelector(testIdSelectors.comment(commentId));
    const addTag = await comment.$(testIdSelectors.addTag(commentId));
    await addTag?.click();
    const input = await comment.waitForSelector(testIdSelectors.addTagInput(commentId));
    input.type('ar');
    const suggest = await comment.waitForSelector(testIdSelectors.addTagSuggest(3));
    await suggest.click();

    await expect(comment.waitForSelector(testIdSelectors.tag(3))).resolves.not.toBeNull();
});