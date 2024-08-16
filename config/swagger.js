import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API',
            version: '1.0.0',
            description: 'API for managing users',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Local server',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            description: 'Nome do usuário',
                        },
                        surname: {
                            type: 'string',
                            description: 'Nome do usuário',
                        },
                        email: {
                            type: 'string',
                            description: 'Email do usuário',
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário',
                        }
                    },
                    required: ['username', 'surname', 'email', 'password'],
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Caminho para os arquivos que contêm as anotações de API
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
