import { dbPool } from '../../config/db';

export const getProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = $1';

  const res = await dbPool.query(query, [id]);

  return res.rows[0];
};
