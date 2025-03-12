import {dbPool} from "../../config/db.js";

export const updateProduct = async (id, title, price) => {
    const query = `
        UPDATE products
        SET title = $1,
            price = $2
        WHERE id = $3 RETURNING *
    `;
    const res = await dbPool.query(query, [title, price, id]);
    return res.rows[0];
};