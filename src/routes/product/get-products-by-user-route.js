import {getProductsByUserId} from '../../models/product/index.js';

export const handleGetProductsByUser = async (req, res) => {
    const parts = req.url.split('/');
    const userId = parts[2];
    try {
        const products = await getProductsByUserId(userId);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } catch (err) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: err.message}));
    }
};