
import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

const ProdCategory = configDB.define('ProdCategory', {
    product_id: {
        type: DataTypes.INTEGER,  // varchar(50)
        allowNull: false,   // NOT NULL
        references: {
            model: 'products', //nome da tabela
            key: 'id' //nome da chave primária na tabela de refrência
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
}, {
    tableName: 'prodcategory',  // Nome da tabela
    timestamps: true,       // Cria campos createdAt e updatedAt automaticamente
});



export default ProdCategory;
