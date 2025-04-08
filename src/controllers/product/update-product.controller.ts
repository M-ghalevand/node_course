import { Products } from '@prisma/client';
import { Request, Response } from 'express';

import { updateProductService } from 'services';

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Updates the title and price of a product by its ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: integer
 *       - in: body
 *         name: body
 *         description: Updated product details
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - price
 *           properties:
 *             title:
 *               type: string
 *               description: The updated title of the product
 *               example: "Updated Product Title"
 *             price:
 *               type: number
 *               description: The updated price of the product
 *               example: 29.99
 *     responses:
 *       200:
 *         description: Successfully updated product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the updated product
 *                 title:
 *                   type: string
 *                   description: The updated title of the product
 *                 price:
 *                   type: number
 *                   description: The updated price of the product
 *       400:
 *         description: Bad Request. Invalid input.
 *       404:
 *         description: Product not found.
 */

export const updateProductController = async (req: Request<{ id: string }, {}, Pick<Products, 'title' | 'price'>>, res: Response) => {
  const result = await updateProductService(req.body, Number(req.params.id));

  res.json(result);
};