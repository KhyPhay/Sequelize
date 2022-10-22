const Sequelize = require('sequelize')
// import connection database
const sequelize = require('../database')
const Customers = sequelize.define('customers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

module.exports  = Customers