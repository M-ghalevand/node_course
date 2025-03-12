import { dbPool } from '../../config/db';

export const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';

  const res = await dbPool.query(query, [id]);

  return res.rows[0];
};
