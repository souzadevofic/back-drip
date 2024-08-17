import User from '../models/User.js';
import Product from '../models/Product.js';
import Categories from '../models/Categories.js';
import ImgProduct from '../models/ImgProducts.js';
import ProdCategory from '../models/ProdCategory.js'
// import bcrypt from 'bcrypt';

async function insertData() {
    try {
        // const saltRounds = 10; // Defina o número de rounds para o salt (quanto maior, mais seguro, mas mais lento)
        // const hashedPassword = await bcrypt.hash('1234', saltRounds);

        // INSERT INTO users ...
        const user = await User.create({
            username: 'Vanessa',
            surname: 'Souza',
            email: 'maria12345@gmail.com',
            password: '12345' // Senha com hash gerado pelo bcrypt
        });
        console.log(`Novo usuário criado: ${user.toJSON()}`);

        // INSERT INTO products ...
        const product = await Product.create({
            enabled: 0,
            name: 'Produto Exemplo4',
            slug: '/product-example',
            use_in_menu: 0,
            stock: 0,
            description: 'Um excelente produto de exemplo3.',
            price: 29.99,
            price_with_discount: 10.00,
        });
        console.log(`Novo produto criado: ${product.toJSON()}`);

        // INSERT INTO categories ...
        const categories = await Categories.create({
            name: 'Sapato4',
            slug: '/categories-exemple',
            use_in_menu: 0,
        });
        console.log(`Nova categoria criada: ${categories.toJSON()}`);

        // INSERT INTO imgproducts ...
        const imgproducts = await ImgProduct.create({
            enabled: 0,
            product_id: product.id,
            path: 'https://drive.google.com/file/d/1JDOQUqT6LhyuoRPxB4YPpyZr6AKKthU_/preview',
        });
        console.log(`Nova categoria criada: ${imgproducts.toJSON()}`);

        // INSERT INTO imgproducts ...
        const prodcategory = await ProdCategory.create({
            product_id: product.id,
            category_id: categories.id,
        });
        console.log(`Nova categoria criada: ${prodcategory.toJSON()}`);


    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;