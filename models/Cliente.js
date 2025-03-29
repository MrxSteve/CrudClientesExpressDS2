const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('Cliente', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = Cliente;
