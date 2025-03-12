import http from 'http';
import {handleCreateUser, handleGetUserById, handleGetUsers,handleDeleteUser} from './src/routes/user/index';
import {
    handleCreateProduct,
    handleGetProductById,
    handleGetProducts,
    handleUpdateProduct,
    handleDeleteProduct
} from './src/routes/product/index';


const PORT = 3000;

const server = http.createServer(async (req, res) => {
    const {method, url} = req;


    let normalizedUrl = url as string;
    const urlParts = normalizedUrl?.split('/').filter(part => part !== '')

    if (normalizedUrl.endsWith('/') && normalizedUrl.length > 1) {
        normalizedUrl = normalizedUrl.slice(0, -1);
    }


    if (method === 'POST' && normalizedUrl === '/api/users') {
         await handleCreateUser(req, res);
    } else if (method === 'GET' && urlParts.length === 3 && urlParts[1] === 'users') {
         await handleGetUserById(req, res);
    } else if (method === 'GET' && url === '/api/users') {
         await handleGetUsers(req, res);
    } else if (method === 'DELETE' && urlParts.length === 3 && urlParts[1] === 'users') {
         await handleDeleteUser(req, res);
    } else if (method === 'GET' && normalizedUrl === '/api/products') {
        await handleGetProducts(req, res);
    } else if (method === 'GET' && urlParts.length === 3 && urlParts[1] === 'products') {
        await handleGetProductById(req, res);
    } else if (method === 'POST' && normalizedUrl === '/api/products') {
        await handleCreateProduct(req, res);
    } else if (method === 'PUT' && urlParts.length === 3 && urlParts[1] === 'products') {
        await handleUpdateProduct(req, res);
    } else if (method === 'DELETE' && urlParts.length === 3 && urlParts[1] === 'products') {
        await handleDeleteProduct(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not found'}));
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});