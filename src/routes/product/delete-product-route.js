import {deleteProduct} from '../../models/product/index.js';

export const handleDeleteProduct = async (req, res) => {
    const id = req.url.split('/').pop();
    try {
        const product = await deleteProduct(id);
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

