const assert = require('assert');
const { fetchPosts, fetchUsers } = require('../apiClient.js');

const apiUrl = 'https://jsonplaceholder.typicode.com';

describe('API Client', function () {
  // Test to verify fetching posts from the API
  it('should fetch posts from the API', async function () {
    const posts = await fetchPosts(apiUrl);
    assert(Array.isArray(posts), 'Posts should be an array');
    assert(posts.length > 0, 'Posts array should not be empty');
  });

  // Test to verify error handling when fetching posts
  it('should handle errors when fetching posts', async function () {
    try {
      await fetchPosts('https://invalid-url.com'); // Pass an invalid URL to trigger an error
      assert.fail('An error should be thrown when fetching posts');
    } catch (error) {
      assert.match(error.message, /Error fetching posts:/, 'Request failed with status code 404');
    }
  });

  // Test to verify fetching users from the API
  it('should fetch users from the API', async function () {
    const users = await fetchUsers(apiUrl);
    assert(Array.isArray(users), 'Users should be an array');
    assert(users.length > 0, 'Users array should not be empty');
  });

  // Test to verify error handling when fetching users
  it('should handle errors when fetching users', async function () {
    try {
      await fetchUsers('https://invalid-url.com');  // Pass an invalid URL to trigger an error
      assert.fail('An error should be thrown when fetching users');
    } catch (error) {
      assert.match(error.message, /Error fetching users:/, 'Request failed with status code 404');
    }
  });
});
