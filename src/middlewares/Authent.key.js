export const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key']; 
    
    if (apiKey && apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).send('Invalid request: API key is missing or invalid');
    }
};
