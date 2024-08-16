const { User } = require('../models');
const { where } = require('sequelize');

// GET All Users
const getAllUsers = async ( req, res ) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// Get User By ID
const getUserById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuario não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// Update a User By ID 
const updateUser = async ( req, res ) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: {id: id}
        });
        if (updated) {
            const updatedUser = await User.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuario não encontrado '});
        }
    } catch (error) {
        res.status(404).json({ message: 'Usuario não encontrado' });
    }
}

const deleteUser = async ( req, res ) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.status(200).send();
        } else {
            res.status(404).json ({ message: 'Usuario não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};