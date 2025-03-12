import {dbPool} from "../../config/db.js";

export const deleteProduct = async (id) => {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *';
    const res = await dbPool.query(query, [id]);
    return res.rows[0];
};

