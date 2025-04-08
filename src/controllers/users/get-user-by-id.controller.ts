import { Request, Response } from 'express';

import { getUserByIdService } from 'services';

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by their ID
 *     description: Retrieve detailed information about a user based on their unique ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the user to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved the user data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique ID of the user.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Full name of the user.
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   description: Email address of the user.
 *                   example: john.doe@example.com
 *       404:
 *         description: User not found in the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: A short error message.
 *                   example: User not found
 *       400:
 *         description: Invalid request due to improper ID format.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: A short error message indicating the issue.
 *                   example: Invalid ID format
 */
export const getUserByIdController = async (req: Request<{ id: string }>, res: Response) => {
  const result = await getUserByIdService(Number(req.params.id));

  res.json(result);
};