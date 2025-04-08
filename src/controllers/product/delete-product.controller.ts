import { Request, Response } from 'express';

import { deleteProductService } from 'services';

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a product by its ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product Id 1 deleted successfully
 *                 status:
 *                   type: integer
 *                   example: 200
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product not found
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid ID supplied
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 */

export const deleteProductController = async (req: Request<{ id: string }>, res: Response) => {
  const result = await deleteProductService(Number(req.params.id));

  res.json(result);
};