import User from '../../models/User.js';

describe('User Model', () => {
    it('Deve criar uma instância de usuário com atributos válidos', async () => {
        const user = User.build(
            {
                username: 'Marnei',
                email: 'marneicardoso.prof@gmail.com',
            },
        );

        expect(user.username).toBe('Marnei');
        expect(user.email).toBe('marneicardoso.prof@gmail.com');
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await User.build({}).validate();

        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});