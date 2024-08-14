
import User from '../models/User.js';
import Product from '../models/Product.js';

async function insertData() {
    try {
        // INSERT INTO users ...
        const user = await User.create({
            username: 'Marnei',
            surname: 'Cardoso',
            email: 'marneicardoso.prof@gmail.com',
            password: '1234'  //Tem que usar bcrypt
        });
        console.log(`Novo usuário criado: ${user.toJSON()}`);

        // INSERT INTO products ...
        const product = await Product.create({
            enabled: 0,
            name: 'Produto Exemplo',
            slug: '/product-example',
            use_in_menu: 0,
            stock: 0,
            description: 'Um excelente produto de exemplo.',
            price: 29.99,
            price_with_discount: 10.00,
        });
        console.log(`Novo produto criado: ${product.toJSON()}`);

    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;
