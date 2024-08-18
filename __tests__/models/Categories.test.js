import Categories from '../../models/Categories.js';

describe('Categories Model', () => {
    it('Deve criar uma instância de Categories com atributos válidos', async () => {
        const categories = Categories.build(
            {
                name: 'tenis',
                slug: '/categories',
            },
        );

        expect(categories.nome).toBe('tenis');
        expect(categories.slug).toBe('/categories');
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await Categories.build({}).validate();
        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});