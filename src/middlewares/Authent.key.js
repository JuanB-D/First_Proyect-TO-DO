export const apiKeyMiddleware = (req, res, next) =>{
    const apiKey = req.headers['x-api-keu'];
    if(apiKey &&  apiKey === process.env.API_KEY){
        next();
    }else{
        res.status(401).send('invalid request')
    }
}