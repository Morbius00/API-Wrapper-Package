const apiClient = require('../apiClient');

async function getPostsByUserId(apiUrl, userId) {
    try {
        return await apiClient.fetchData(apiUrl, `posts?userId=${userId}`);
    } catch (error) {
        throw new Error(`Error fetching user posts: ${error.message}`);
    }
}

module.exports = {
    getPostsByUserId
};
