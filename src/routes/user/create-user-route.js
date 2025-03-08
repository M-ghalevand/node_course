import { createUser } from '../../models/user/index.js';

export const handleCreateUser = async (req, res) => {
    let body = '';
    req.on('data', (chunk) => body += chunk);
    req.on('end', async () => {
        try {
            const { name, email } = JSON.parse(body);
            const user = await createUser(name, email);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
    });
};

