import { Request, Response } from 'express';

import { createUserService } from '../services';
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with the provided data.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the user
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Email of the user
 *                 example: john.doe@example.com
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: Unique ID of the created user
 *                 name:
 *                   type: string
 *                   description: Name of the created user
 *                 email:
 *                   type: string
 *                   description: Email of the created user
 *       400:
 *         description: Invalid request data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 */

export const createUserController = async (req: Request, res: Response) => {
  const result = await createUserService(req.body);

  res.status(201).json(result);
};
