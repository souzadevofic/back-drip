import Category from '../models/Categories.js';

// Criar uma nova categoria
export const createCategories = async (req, res) => {
    try {
        const { name, slug, use_in_menu } = req.body;
        const newCategory = await Category.create({ name, slug, use_in_menu });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Buscar todos os usuários
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar um usuário por ID
export const getCategoriesById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar uma categoria por ID
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Category.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedCategory = await Category.findByPk(id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar uma categoria por ID
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Category.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Categoria deletada com sucesso' });
        } else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
