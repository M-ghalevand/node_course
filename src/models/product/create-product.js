import client from "../../config/db.js";

export const createProduct = async (title, price, userId) => {
    const query = `
        INSERT INTO products (title, price, user_id)
        VALUES ($1, $2, $3) RETURNING *
    `;
    const values = [title, price, userId];
    const res = await client.query(query, values);
    return res.rows[0];
};