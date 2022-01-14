const {db} = require('../utils/database')
const {DataTypes} = require('sequelize')

const Todo = db.define('todos', {
	
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER,
		allowNull: false, 
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

// Export model
module.exports = { Todo };
