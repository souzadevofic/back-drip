import ProdCategory from '../../models/ProdCategory.js';

describe('ProdCategory Model', () => {
    it('Deve criar uma instância de relacionamento entre produto e categoria com atributos válidos', async () => {
        const prodCategory = ProdCategory.build(
            {
                product_id: 1, // Assumindo que o produto com ID 1 existe
                category_id: 1, // Assumindo que a categoria com ID 1 existe
            },
        );

        expect(prodCategory.product_id).toBe(1);
        expect(prodCategory.category_id).toBe(1);
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await ProdCategory.build({}).validate();
        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});