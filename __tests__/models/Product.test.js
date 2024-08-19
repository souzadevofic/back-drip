import Product from '../../models/Product.js';

describe('Product Model', () => {
    it('Deve criar uma instância de produto com atributos válidos', async () => {
        const product = Product.build(
            {
                name: 'Produto Exemplo',
                price: 29.99,
                description: 'Um excelente produto de exemplo',
            }
        );

        expect(product.name).toBe('Produto Exemplo');
        expect(product.price).toBe(29.99);
        expect(product.description).toBe('Um excelente produto de exemplo');
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await Product.build({}).validate();

        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});