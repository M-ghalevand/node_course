import client from "../../config/db.js";

export const getUsers = async () => {
    const query = 'SELECT * FROM users';
    const res = await client.query(query);
    return res.rows; // برمی‌گرداند آرایه‌ای از کاربران
};