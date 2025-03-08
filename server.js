import http from 'http';
import {handleCreateUser, handleGetUserById, handleGetUsers} from './src/routes/user/index.js';
import {
    handleCreateProduct,
    handleGetProductById,
    handleGetProductsByUser,
    handleUpdateProduct,
    handleDeleteProduct
} from './src/routes/product/index.js';


const PORT = 3000;

const server = http.createServer(async (req, res) => {
    const {method, url} = req;
    console.log("=>(server.js:16) method", method,url);

    if (method === 'POST' && url === '/api/users') {
        await handleCreateUser(req, res);
    }
    if (method === 'GET' && url.startsWith('/api/users')) {
        await handleGetUserById(req, res);
    }
    if (method === 'GET' && url === '/api/users') {


        await handleGetUsers(req, res);
    }
    if (method === 'POST' && url === '/api/products') {
        await handleCreateProduct(req, res);
    }
    if (method === 'GET' && url.startsWith('/api/products/')) {
        await handleGetProductById(req, res);
    }
    if (method === 'GET' && url.endsWith('/api/products')) {
        await handleGetProductsByUser(req, res);
    }
    if (method === 'PUT' && url.startsWith('/api/products/')) {
        await handleUpdateProduct(req, res);
    }
    if (method === 'DELETE' && url.startsWith('/api/products/')) {
        await handleDeleteProduct(req, res);
    }

        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not found'}));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});