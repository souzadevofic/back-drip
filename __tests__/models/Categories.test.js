import Categories from '../../models/Categories.js';

describe('Categories Model', () => {
    it('Deve criar uma instância de Categories com atributos válidos', async () => {
        const categories = Categories.build(
            {
                name: 'Sapato4',
                slug: '/categories-exemple',
                use_in_menu: false,
            },
        );

        expect(categories.name).toBe('Sapato4');
        expect(categories.slug).toBe('/categories-exemple');
        expect(categories.use_in_menu).toBe(false);
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await Categories.build({}).validate();
        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});