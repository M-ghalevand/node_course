import {deleteUser} from '../../models/user/index';

export const handleDeleteUser = async (req, res) => {
    const id = req.url.split('/').pop();
    try {
        console.log("=>(delete-user-route.js:7) id", id);
        const product = await deleteUser(id);
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

