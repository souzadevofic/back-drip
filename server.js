import express from 'express';
import userRoutes from './routes/userRoutes.js';
import swagger from './config/swagger.js';

const app = express();

// Permite que o express interprete o corpo da requisição como JSON
app.use(express.json());

// Rotas de usuário
app.use('/api', userRoutes);

// Swagger
swagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

export default app;

