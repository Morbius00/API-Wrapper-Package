const apiClient = require('./apiClient');
const users = require('./endpoints/users');
const posts = require('./endpoints/posts');
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');

module.exports = {
    apiClient,
    users,
    posts,
    rateLimitMiddleware
};
