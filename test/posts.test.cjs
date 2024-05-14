// test/posts.test.js

const assert = require('assert');
const { fetchPosts } = require('../apiClient');

describe('Posts API', () => {
  it('should fetch posts from the API', async () => {
    // Test fetching posts from the API
    const posts = await fetchPosts('https://jsonplaceholder.typicode.com');

    // Assert that the returned value is an array
    assert(Array.isArray(posts), 'Posts should be an array');
  });

  it('should handle errors when fetching posts', async () => {
    // Test handling errors when fetching posts
    let error = null;
    try {
      await fetchPosts('invalid-url'); // Pass an invalid URL to trigger an error
    } catch (err) {
      error = err;
    }

    // Assert that an error occurred
    assert(error instanceof Error, 'An error should be thrown when fetching posts');
  });
});
