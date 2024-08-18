<<<<<<< HEAD
import { User } from '../models';
import { where } from 'sequelize';
=======
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { jwtSecret, jwtExpiry } from '../config/jwt.js';
>>>>>>> c68400242187887def8a5a06ce68f98c416abb6c


// Criar um novo usuário
export const createUser = async (req, res) => {
    try {
        const { username, surname, email, password } = req.body;
        const newUser = await User.create({ username, surname, email, password });

        // Gerar o token JWT
        const token = jwt.sign({ id: newUser.id }, jwtSecret, { expiresIn: jwtExpiry });

        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Buscar todos os usuários
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

<<<<<<< HEAD
// Create a New User
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get User By ID
const getUserById = async ( req, res ) => {
=======
// Buscar um usuário por ID
export const getUserById = async (req, res) => {
>>>>>>> c68400242187887def8a5a06ce68f98c416abb6c
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

<<<<<<< HEAD
export default {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
=======
// Atualizar um usuário por ID
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedUser = await User.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar um usuário por ID
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
>>>>>>> c68400242187887def8a5a06ce68f98c416abb6c
