const assert = require('assert');
const { fetchPosts } = require('../apiClient');

describe('Posts API', () => {
    // Test fetching posts from the API
  it('should fetch posts from the API', async () => {
    // Call the fetchPosts function with a valid API URL 
    const posts = await fetchPosts('https://jsonplaceholder.typicode.com');
    // Assert that the returned value is an array 
    assert(Array.isArray(posts), 'Posts should be an array');
  });
// Test handling errors when fetching posts
  it('should handle errors when fetching posts', async () => {
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
