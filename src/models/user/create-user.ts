import { dbPool } from '../../config/db.config';

export const createUser = async (name, email) => {
  const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';

  const values = [name, email];

  const res = await dbPool.query(query, values);

  return res.rows[0];
};
