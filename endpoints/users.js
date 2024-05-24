const apiClient = require('../apiClient');

async function fetchUsers() {
    try {
        return await apiClient.fetchData('/users');
    } catch (error) {
        throw new Error(`Error fetching users: ${error.message}`);
    }
}

module.exports = {
    fetchUsers
};
