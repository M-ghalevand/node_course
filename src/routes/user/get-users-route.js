import { getUsers } from '../../models/user/index.js';

export const handleGetUsers = async (req, res) => {
    console.log("=>(get-users-route.js:5) req", req);
    try {
        const users = await getUsers();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
    }
};

