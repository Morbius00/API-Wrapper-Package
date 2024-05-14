const requestCounts = new Map();

function rateLimitMiddleware(req, res, next) {
    const { endpoint } = req.params;
    const now = Date.now();

    // Initialize request count for the endpoint if it doesn't exist
    if (!requestCounts.has(endpoint)) {
        requestCounts.set(endpoint, [{ timestamp: now, count: 1 }]);
    } else {
        const counts = requestCounts.get(endpoint);
        const windowStart = now - 60000; // 1 minute window
        const windowCounts = counts.filter(entry => entry.timestamp > windowStart);

        // Check if request limit is exceeded
        if (windowCounts.length >= 10) {
            return res.status(429).send('Too Many Requests');
        }

        // Update request count for the current window
        windowCounts.push({ timestamp: now, count: windowCounts.length + 1 });
        requestCounts.set(endpoint, windowCounts);
    }

    next();
}

module.exports = rateLimitMiddleware;
