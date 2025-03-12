import {dbPool} from "../../config/db.js";

export const getUsers = async () => {
    const query = 'SELECT * FROM users';
    const res = await dbPool.query(query);
    return res.rows;
};