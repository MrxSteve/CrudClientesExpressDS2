const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'tarea1_ds2_clientes', 'root', 'pa55word', {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

module.exports = sequelize;