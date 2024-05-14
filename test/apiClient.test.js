const { fetchData } = require('../apiClient'); // Using CommonJS require syntax

// Import the assert module for making assertions
const assert = require('assert');

// Test suite for the API Client
describe('API Client', () => {
  it('should fetch posts from the API', async () => {
    // Call the fetchPosts function
    const posts = await fetchData('https://jsonplaceholder.typicode.com');

    // Assert that the returned value is an array
    assert(Array.isArray(posts), 'Posts should be an array');

    // Assert that the posts array is not empty
    assert(posts.length > 0, 'Posts array should not be empty');
  });

  it('should handle errors when fetching posts', async () => {
    // Call the fetchPosts function with an invalid URL
    const invalidUrl = 'https://example.com/api';
    let error = null;
    try {
      await fetchPosts(invalidUrl);
    } catch (err) {
      error = err;
    }

    // Assert that an error occurred
    assert(error instanceof Error, 'An error should be thrown when fetching posts');
    assert.strictEqual(error.message, `Error fetching posts: Network Error`, 'Error message should indicate a network error');
  });
});
