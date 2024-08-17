
import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

const ImgProduct = configDB.define('ImgProduct', {
    enabled: {
        type: DataTypes.BOOLEAN(0),
    },
    product_id: {
        type: DataTypes.INTEGER,  // varchar(50)
        allowNull: false,   // NOT NULL
        references: {
            model: 'products', //nome da tabela
            key: 'id' //nome da chave primária na tabela de refrência
        }
    },
    path: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'imgproducts',  // Nome da tabela
    timestamps: true,       // Cria campos createdAt e updatedAt automaticamente
});



export default ImgProduct;
