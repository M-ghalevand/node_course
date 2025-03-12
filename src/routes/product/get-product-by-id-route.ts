import {getProductById} from '../../models/product/index';

export const handleGetProductById = async (req, res) => {
    const id = req.url.split('/').pop();
    try {
        const product = await getProductById(id);
        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify({error: 'Product not found'}));
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(product));
    } catch (err) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: err.message}));
    }
};