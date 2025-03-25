import { Request, Response } from 'express';

import { getProductByIdService } from '../services';

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     description: Retrieve a product by its ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to retrieve.
 *     responses:
 *       200:
 *         description: Product retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique identifier of the product.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Name of the product.
 *                   example: Example Product
 *                 price:
 *                   type: number
 *                   description: Price of the product.
 *                   example: 99.99
 *                 description:
 *                   type: string
 *                   description: Details about the product.
 *                   example: A high-quality example product.
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Product not found
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Invalid ID format
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Something went wrong
 */
export const getProductByIdController = async (req: Request, res: Response) => {
  const result = await getProductByIdService(Number(req.params.id));

  res.json(result);
};
