const Sequelize = require('sequelize')
const database = new Sequelize(
    process.env.DB_NAME, // database name
    process.env.USER_NAME, // user name
    process.env.PASSWORD, // user password
    {
        host: process.env.DB_HOST, // database host
        dialect:'mariadb', // database dialect can be mysql if we use mysql 
    }
)
database.sync()
module.exports = database