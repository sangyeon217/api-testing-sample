import { test, expect } from '@playwright/test';
import { PostsAPI, PostAPI } from '../apis/post';

test('Get Posts API Request @post', async({ request }) => {
    const postsAPI = new PostsAPI();
    const response = await request.get(postsAPI.url);

    const responseBody = await response.json();
    console.log(responseBody);

    const index = 0;
    expect(response.status()).toBe(200);
    expect(responseBody[index].userId).toEqual(expect.any(Number));
    expect(responseBody[index].id).toBe(index + 1);
    expect(responseBody[index].title).toEqual(expect.any(String));
    expect(responseBody[index].body).toEqual(expect.any(String));
});

test('Get Post API Request @post', async({ request }) => {
    const postNum = 1;
    const postAPI = new PostAPI(postNum);
    const response = await request.get(postAPI.url);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.userId).toEqual(expect.any(Number));
    expect(responseBody.id).toBe(postNum);
    expect(responseBody.title).toEqual(expect.any(String));
    expect(responseBody.body).toEqual(expect.any(String));
});
