import Product from '../models/Product.js';

// Criar uma nova categoria
export const createProduct = async (req, res) => {
    try {
        const {  enabled, name, slug, use_in_menu, stock, description, price, price_with_discount } = req.body;
        const newProduct = await Product.create({ enabled, name, slug, use_in_menu, stock, description, price, price_with_discount });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Buscar todos os usuários
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar um usuário por ID
export const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar uma categoria por ID
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Product.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedProduct = await Product.findByPk(id);
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar uma categoria por ID
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
