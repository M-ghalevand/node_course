import { createProduct } from '../../models/product/index';

export const handleCreateProduct = async (req, res) => {
  let body = '';
  req.on('data', (chunk) => (body += chunk));
  req.on('end', async () => {
    try {
      const { title, price, user_id } = JSON.parse(body);

      const product = await createProduct(title, price, user_id);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  });
};
