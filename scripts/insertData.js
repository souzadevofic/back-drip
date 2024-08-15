import User from '../models/User.js';
import Product from '../models/Product.js';
import Categories from '../models/Categories.js';
import bcrypt from 'bcrypt';

async function insertData() {
    try {
        const saltRounds = 10; // Defina o número de rounds para o salt (quanto maior, mais seguro, mas mais lento)
        const hashedPassword = await bcrypt.hash('1234', saltRounds);

        // INSERT INTO users ...
        const user = await User.create({
            username: 'Alisson',
            surname: 'Souza',
            email: 'alissonprogramador@gmail.com',
            password: hashedPassword // Senha com hash gerado pelo bcrypt
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

        // INSERT INTO categories ...
        const categories = await Categories.create({
            name: 'Sapato',
            slug: '/categories-exemple',
            use_in_menu: 0,
        });
        console.log(`Nova categoria criada: ${categories.toJSON()}`);


    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;