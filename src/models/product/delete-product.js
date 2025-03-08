import client from "../../config/db.js";

export const deleteProduct = async (id) => {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *';
    const res = await client.query(query, [id]);
    return res.rows[0];
};

