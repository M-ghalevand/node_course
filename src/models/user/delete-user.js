import client from "../../config/db.js";

export const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const res = await client.query(query, [id]);
    return res.rows[0];
};

