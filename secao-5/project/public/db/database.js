const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','619302$5847',{
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;
