import client from "../../config/db.js";

export const getProducts = async () => {
    const query = 'SELECT * FROM products';
    const res = await client.query(query);
    return res.rows;
};