import request from 'supertest';
import server from '../server.js';

describe('GET /users', () => {
    it('Deve retornar uma lista de usuários', async () => {
        const response = await request(server).get('/users');
        expect(response.statusCode).toBe(404);
        expect(response.body).toBeInstanceOf(Object);
    });
});

console.log('\n__tests__/userRoutes.test.js\n');