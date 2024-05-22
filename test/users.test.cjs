const assert = require('assert');
const { fetchUsers } = require('../apiClient');

describe('Users API', () => {
  // Test fetching users from the API
  it('should fetch users from the API', async () => {
    // Call the fetchUsers function with a valid API URL
    const users = await fetchUsers('https://jsonplaceholder.typicode.com');
    // Assert that the returned value is an array
    assert(Array.isArray(users), 'Users should be an array');
  });

      // Test handling errors when fetching users
  it('should handle errors when fetching users', async () => {
    let error = null;
    try {
      await fetchUsers('invalid-url of your choice'); // Pass an invalid URL to trigger an error
    } catch (err) {
      error = err;
    }
    assert(error instanceof Error, 'An error should be thrown when fetching users');
  });
});
