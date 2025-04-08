import { Request, Response } from 'express';

import { getAllUsersService } from 'services';

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     description: Returns an array of user objects from the database.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A successful response with an array of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The user ID.
 *                   name:
 *                     type: string
 *                     description: The user name.
 *                   email:
 *                     type: string
 *                     description: The user email.
 *       400:
 *         description: Bad request, an error occurred.
 *       500:
 *         description: Internal server error.
 */

export const getAllUsersController = async (req: Request, res: Response) => {
  const result = await getAllUsersService();

  res.json(result);
};