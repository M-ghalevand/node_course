import { Request, Response } from 'express';

import { getProductsService } from 'services';

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products.
 *     description: Fetch a list of all available products from the database.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A successful response containing the list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The product ID.
 *                   name:
 *                     type: string
 *                     description: The name of the product.
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: The price of the product.
 *       400:
 *         description: Bad request or invalid parameters.
 *       500:
 *         description: Internal server error.
 */

export const getProductsController = async (req: Request, res: Response) => {
  const result = await getProductsService();

  res.json(result);
};