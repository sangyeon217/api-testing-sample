import { test, expect } from '@playwright/test';
import { CommentsAPI, CommentAPI } from '../apis/comment';

const emailRegex = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

test('Get Comments API Request @comment', async({ request }) => {
    const commentsAPI = new CommentsAPI();
    const response = await request.get(commentsAPI.url);
    const responseBody = await response.json();
    console.log(responseBody);

    const index = 0;
    expect(response.status()).toBe(200);
    expect(responseBody[index].postId).toEqual(expect.any(Number));
    expect(responseBody[index].id).toBe(index + 1);
    expect(responseBody[index].name).toEqual(expect.any(String));
    expect(responseBody[index].email).toMatch(emailRegex);
    expect(responseBody[index].body).toEqual(expect.any(String));
});

test('Get Comment API Request @comment', async({ request }) => {
    const cmtNum = 8;
    const commentAPI = new CommentAPI(cmtNum);
    const response = await request.get(commentAPI.url);
    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.postId).toEqual(expect.any(Number));
    expect(responseBody.id).toBe(cmtNum);
    expect(responseBody.name).toEqual(expect.any(String));
    expect(responseBody.email).toMatch(emailRegex);
    expect(responseBody.body).toEqual(expect.any(String));
});
