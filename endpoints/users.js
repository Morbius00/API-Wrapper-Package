const apiClient = require('../apiClient');

async function getUserById(apiUrl, userId) {
    try {
        return await apiClient.fetchData(apiUrl, `users/${userId}`);
    } catch (error) {
        throw new Error(`Error fetching user data: ${error.message}`);
    }
}

module.exports = {
    getUserById
};
