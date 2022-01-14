const {Sequelize} = require('sequelize')

//Connect to database
const db = new Sequelize({
    dialect:'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database:'todos',
    port: 5432,
    logging:false
});

module.exports = {db}

