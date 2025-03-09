import {getProducts} from '../../models/product/index.js';

export const handleGetProducts = async (req, res) => {
    try {
        const products = await getProducts();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } catch (err) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: err.message}));
    }
};