import client from "../../config/db.js";

export const getProductsByUserId = async (userId) => {
    const query = 'SELECT * FROM products WHERE user_id = $1';
    const res = await client.query(query, [userId]);
    return res.rows;
};