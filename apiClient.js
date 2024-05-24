const axios = require('axios');
const EventEmitter = require('eventemitter3');

// Create a new instance of NodeCache
let cache;
if (typeof window === 'undefined') {
    // Node.js environment
    const NodeCache = require('node-cache');
    cache = new NodeCache();
} else {
    // Browser environment
    cache = new Map();
}

// Create an event emitter instance
const emitter = new EventEmitter();

// Function to fetch data from the API
async function fetchData(apiUrl, endpoint, params, cacheTTL = 60) {
    const cacheKey = `${endpoint}-${JSON.stringify(params)}`;

    // Check if the response is cached
    const cachedData = cache.get(cacheKey);
    if (cachedData !== undefined) {
        console.log('Data retrieved from cache');
        return cachedData;
    }

    try {
        const response = await axios.get(`${apiUrl}/${endpoint}`, { params });
        const responseData = response.data;

        // Cache the response data with the specified TTL
        if (typeof window === 'undefined') {
            cache.set(cacheKey, responseData, cacheTTL);
        } else {
            // Simple expiration mechanism for browser environment
            setTimeout(() => cache.delete(cacheKey), cacheTTL * 1000);
            cache.set(cacheKey, responseData);
        }

        // Emit a success event
        emitter.emit('fetchSuccess', responseData);

        return responseData;
    } catch (error) {
        // Emit an error event
        emitter.emit('fetchError', error);

        throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
    }
}

async function batchRequest(apiUrl, requests) {
    try {
        const responses = await axios.post(`${apiUrl}/batch`, requests);
        return responses.data;
    } catch (error) {
        throw new Error(`Error making batch request: ${error.message}`);
    }
}

// Function to fetch posts from the API
async function fetchPosts(apiUrl) {
    try {
        const response = await axios.get(`${apiUrl}/posts`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
}

// Function to fetch users from the API
async function fetchUsers(apiUrl) {
    // Example implementation to fetch users
    try {
        // Code to make HTTP request and retrieve users from the API
        const users = await axios.get(`${apiUrl}/users`);
        return users.data;
    } catch (error) {
        throw new Error('Error fetching users: Network Error');
    }
}

module.exports = {
    fetchData,
    batchRequest,
    fetchPosts,
    fetchUsers,
    emitter: emitter // Expose emitter for event handling
};
