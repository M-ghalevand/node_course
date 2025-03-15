import { dbPool } from '../../config/db.config';

export const getProducts = async () => {
  const query = 'SELECT * FROM products';

  const res = await dbPool.query(query);

  return res.rows;
};
