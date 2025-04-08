import { Products } from '@prisma/client';
import { Request, Response } from 'express';

import { createProductService } from 'services';

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the product
 *                 example: "Sample Product"
 *               price:
 *                 type: number
 *                 description: The price of the product
 *                 example: 99.99
 *               user_id:
 *                 type: string
 *                 description: The ID of the user creating the product
 *                 example: "user_123"
 *     responses:
 *       200:
 *         description: The newly created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the product
 *                   example: "prod_456"
 *                 title:
 *                   type: string
 *                   description: The title of the product
 *                 price:
 *                   type: number
 *                   description: The price of the product
 *                 user_id:
 *                   type: string
 *                   description: The ID of the user who created the product
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The creation timestamp of the product
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The last update timestamp of the product
 *       400:
 *         description: Bad request or invalid input
 *       500:
 *         description: Internal server error
 */

export const createProductController = async (req: Request<{}, {}, Pick<Products, 'title' | 'price' | 'user_id'>>, res: Response) => {
  const result = await createProductService(req.body);

  res.json(result);
};