import { Request, Response } from 'express';
import { getUserById } from 'models';

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.end(user);
  } catch (err) {
    res.status(500).end(JSON.stringify({ error: err instanceof Error ? err.message : 'An unknown error occurred' }));
  }
};
