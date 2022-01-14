const express = require('express');

//Controllers
const {
    getAllTodos,
    getTodoById,
    createTodo, 
    updateTodo, 
    deleteTodo
} = require('../controllers/todos.controller')

const router = express.Router()

router.route('/').get(getAllTodos).post(createTodo);

router.route('/:id').patch(updateTodo).delete(deleteTodo).get(getTodoById);

//export
module.exports = {todosRouter:router}