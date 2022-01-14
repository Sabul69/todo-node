//Models
const {Todo} = require('../models/todo.model')

//Utils
const {catchAsync} = require('../utils/catchAsync')
const { AppError } = require('../utils/appError');

exports.getAllTodos = catchAsync(async (req, res, next) => {
	const todos = await Todo.findAll();

	res.status(200).json({
		status: 'success',
		data: { todos },
	});
});

exports.getTodoById = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const todo = await Todo.findOne({ where: { id } });

	if (!todo) {
		return next(new AppError(`ToDo doesn't exist`, 404));
	}

	res.status(200).json({
		status: 'success',
		data: { todo },
	});
});

exports.createTodo = catchAsync(async (req, res, next) => {
	const { content } = req.body;

	const newTodo = await Todo.create({ content });

	res.status(201).json({
		status: 'success',
		data: { newTodo },
	});
});

exports.updateTodo = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const { content } = req.body;

	const todoExists = await Todo.findOne({ where: { id } });

	if (!todoExists) {
		return next(new AppError('To Do does not exists', 404));
	}

	await todoExists.update({ content });

	res.status(204).json({
		status: 'success',
	});
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
	const { id } = req.params;

	const todoExists = await Todo.findOne({ where: { id } });

	if (!todoExists) {
		return next(
			new AppError(`Can't delete ToDo because it doesn't exists`, 404)
		);
	}

	await todoExists.destroy();

	res.status(204).json({
		status: 'success',
	});
});
