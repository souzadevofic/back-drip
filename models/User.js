
import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import bcrypt from 'bcrypt';

const User = configDB.define('User', {
    // Campos
    username: {
        type: DataTypes.STRING(30), // varchar(30)
        allowNull: false,   // NOT NULL
    },
    surname: {
        type: DataTypes.STRING(30), // varchar(30)
        allowNull: false,   // NOT NULL
    },
    email: {
        type: DataTypes.STRING(50), // varchar(30)
        allowNull: false,   // NOT NULL
        unique: true,       // Não pode repetir o e-mail
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        set(value) {
            const saltRounds = 10;
            const hash = bcrypt.hashSync(value, saltRounds);
            this.setDataValue('password', hash)

        }
    }
}, {
    tableName: 'users', // Nome da tabela
    timestamps: true,   // Cria campos createdAt e updatedAt automaticamente
});

export default User;
