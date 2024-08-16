
import express from 'express';
import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';
import swagger from './config/swagger.js'

const app = express();

// Rotas de usuário
app.use('/api', userRoutes);
// Swagger
swagger(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

// Permite que o express interprete o corpo da requisição como JSON
app.use(express.json());

// Rota para obter todos os usuários
app.get('/users', async (request, response) => {
    try {
        // Busca todos os usuários na DB
        const users = await User.findAll();
        response.status(200).json(users);

    } catch (error) {
        console.error('Erro ao buscar usuários: ', error);
        response.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

export default app;
