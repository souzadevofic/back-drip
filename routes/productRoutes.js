import express from 'express';
import { createProduct, getAllProducts, getProductsById, updateProduct, deleteProduct } from '../controllers/ProductController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - enabled
 *         - name
 *         - slug
 *         - use_in_menu
 *         - stock
 *         - description
 *         - price
 *         - price_with_discount
 *       properties:
 *         enabled:
 *           type: boolean
 *           description: The product enabled
 *         name:
 *           type: string
 *           description: The product name
 *         slug:
 *           type: string
 *           description: The product slug
 *         use_in_menu:
 *           type: boolean
 *           description: The use_in_menu boolean  0 or 1
 *         stock:
 *           type: integer
 *           description: The stock boolean 
 *         description:
 *           type: string
 *           description: The description string
 *         price:
 *           type: decimal
 *           description: The price decimal 
 *         price_with_discount:
 *           type: float
 *           description: The price_with_discount float
 *       example:
 *         enabled: 0
 *         name: Tênis Adidas
 *         slug: /product-shoes
 *         use_in_menu: 0
 *         stock: 0
 *         description: Descrição do Tênis
 *         price: 99.99
 *         price_with_discount: 79.99
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new Product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *       400:
 *         description: Some input data is invalid
 */
router.post('/products', createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The product description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Category not found
 */
router.get('/products/:id', getProductsById);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The category was updated
 *       404:
 *         description: Category not found
 *       400:
 *         description: Some input data is invalid
 */
router.put('/products/:id', updateProduct);

/**
 * @swagger
 * /Products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: Product not found
 */
router.delete('/products/:id', deleteProduct);

export default router;

