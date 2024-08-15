
import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

const Categories = configDB.define('Categories', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
     use_in_menu: {
        type: DataTypes.BOOLEAN(0),
        allowNull: true,
    },
}, {
    tableName: 'categories',  // Nome da tabela
    timestamps: true,       // Cria campos createdAt e updatedAt automaticamente

})

export default Categories;
