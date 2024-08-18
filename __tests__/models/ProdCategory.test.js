import ProdCategory from '../../models/ProdCategory.js';

describe('ProdCategory Model', () => {
   it('Deve criar uma instância de produto com atributos válidos', async () => {
       // const ProdCategory = await ProdCategory.build(
       const prodCategory = ProdCategory.build(
           {
               name: 'Produto Exemplo',
               price: 29.99,
               description: 'Um excelente produto de exemplo',
           }
       );

       expect(prodCategory.name).toBe('Produto Exemplo');
       expect(prodCategory.price).toBe(29.99);
       expect(prodCategory.description).toBe('Um excelente produto de exemplo');
   });

   it('Deve falhar se os campos obrigatórios estiverem faltando', async () => {
       try {
           await prodCategory.build({}).validate();

       } catch (error) {
           expect(error.name).toBe('SequelizeValidationError');
       }
   });
});