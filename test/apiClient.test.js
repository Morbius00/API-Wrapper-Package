// test/users.test.js

const assert = require('assert');
const { fetchUsers } = require('../apiClient');

describe('Users API', () => {
  it('should fetch users from the API', async () => {
    // Test fetching users from the API
    const users = await fetchUsers('https://jsonplaceholder.typicode.com');

    // Assert that the returned value is an array
    assert(Array.isArray(users), 'Users should be an array');
  });

  it('should handle errors when fetching users', async () => {
    // Test handling errors when fetching users
    let error = null;
    try {
      await fetchUsers('invalid-url'); // Pass an invalid URL to trigger an error
    } catch (err) {
      error = err;
    }

    // Assert that an error occurred
    assert(error instanceof Error, 'An error should be thrown when fetching users');
  });
});
