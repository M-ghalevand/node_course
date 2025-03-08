import client from "../../config/db.js";

export const getProductById = async (id) => {
    const query = 'SELECT * FROM products WHERE id = $1';
    const res = await client.query(query, [id]);
    return res.rows[0];
};