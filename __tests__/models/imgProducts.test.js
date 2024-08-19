import ImgProducts from '../../models/ImgProducts.js';

describe('ImgProducts Model', () => {
    it('Deve criar uma instância de imagem com atributos válidos', async () => {
        const imgProducts = ImgProducts.build(
            {
                product_id: 1, // Assumindo que o produto com ID 1 existe
                path: 'https://drive.google.com/file/d/1JDOQUqT6LhyuoRPxB4YPpyZr6AKKthU_/preview',
            },
        );

        expect(imgProducts.product_id).toBe(1);
        expect(imgProducts.path).toBe('https://drive.google.com/file/d/1JDOQUqT6LhyuoRPxB4YPpyZr6AKKthU_/preview');
    });

    it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
        try {
            await ImgProducts.build({}).validate();
        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
        }
    });
});