import ImgProducts from '../../models/ImgProducts.js';

describe('ImgProducts Model', () => {
    it('Deve criar uma instância de imagem com atributos válidos', async () => {
        const imgProducts = ImgProducts.build(
            {
                product_id: 1, // Assumindo que o produto com ID 1 existe
                path: 'http://example.com/imagem.jpg',
            },
        );

        expect(imgProducts.product_id).toBe(1);
        expect(imgProducts.path).toBe('http://example.com/imagem.jpg');
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await ImgProducts.build({}).validate();
        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});