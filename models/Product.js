
import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

const Product = configDB.define('Product', {
    enabled: {
        type: DataTypes.BOOLEAN(0),
    },
    name: {
        type: DataTypes.STRING(50),  // varchar(50)
        allowNull: false,   // NOT NULL
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN(0),
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER(0),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: true,    // NULL
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,   // NOT NULL
    },
    price_with_discount: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false,
    },
}, {
    tableName: 'products',  // Nome da tabela
    timestamps: true,       // Cria campos createdAt e updatedAt automaticamente
});

export default Product;
