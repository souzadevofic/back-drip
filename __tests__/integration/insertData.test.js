import configDB from "../../config/db.js";
import createDatabase from "../../scripts/createDatabase.js";
import createTables from "../../scripts/createTables.js";
import insertData from "../../scripts/insertData.js";
import User from "../../models/User.js";
import Product from "../../models/Product.js";

describe('Integração de DB', () => {
    beforeAll(async () => {
        await createDatabase();
        await createTables();
    });

    afterAll(async () => {
        await configDB.close();
    });

    it('Deve inserir dados iniciais no banco de dados', async () => {
        await insertData();

        const users = await User.findAll();
        const products = await Product.findAll();

        expect(users.length).toBe(1);
        expect(products.length).toBe(1);

        expect(users[0].username).toBe('Vanessa');
        expect(products[0].name).toBe('Produto Exemplo4');
    });
});