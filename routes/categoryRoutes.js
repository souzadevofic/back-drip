import express from 'express';
import { createCategories, getAllCategories, getCategoriesById, updateCategory, deleteCategory } from '../controllers/CategoriesController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       required:
 *         - name
 *         - slug
 *         - use_in_menu
 *       properties:
 *         name:
 *           type: string
 *           description: The category name
 *         slug:
 *           type: string
 *           description: The category slug
 *         use_in_menu:
 *           type: boolean
 *           description: The use_in_menu boolean 0 or 1
 *       example:
 *         name: Calçados
 *         slug: /categories-example
 *         use_in_menu: 0
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The categories managing API
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categories'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *       400:
 *         description: Some input data is invalid
 */
router.post('/categories', createCategories);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Returns the list of all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categories'
 */
router.get('/categories', getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: The category description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categories'
 *       404:
 *         description: Category not found
 */
router.get('/categories/:id', getCategoriesById);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categories'
 *     responses:
 *       200:
 *         description: The category was updated
 *       404:
 *         description: Category not found
 *       400:
 *         description: Some input data is invalid
 */
router.put('/categories/:id', updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: Category not found
 */
router.delete('/categories/:id', deleteCategory);

export default router;

