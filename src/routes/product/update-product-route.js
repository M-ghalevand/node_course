import { updateProduct } from '../../models/product/index.js';

export const handleUpdateProduct = async (req, res) => {
    const id = req.url.split('/').pop();
    let body = '';
    req.on('data', (chunk) => body += chunk);
    req.on('end', async () => {
        try {
            const { title, price } = JSON.parse(body);
            const product = await updateProduct(id, title, price);
            if (!product) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Product not found' }));
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
    });
};