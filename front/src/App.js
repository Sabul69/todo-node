import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Form from './components/form/form.component';
import TodoList from './components/todo-list/todo-list.component';

import './App.css';

const App = () => {
	// State
	const [todos, setTodos] = useState([]);

	const addTodo = async (todo) => {
		// const fdata = new FormData();
		// fdata.append('content', todo)

		
		
	};

	const fetchTodos = async () => {
		const res = await axios.get('http://localhost:4000/api/v1/todos');
		const resTodos = res.data.data.todos;
		setTodos(resTodos);
	};

	const editTodo = async (id, newContent) => {
		await axios.patch(`http://localhost:4000/api/v1/todos/${id}`, {content:newContent})
		fetchTodos();
	};

	const deleteTodo = async (id) => {
		await axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
		fetchTodos();
	};

	// When component is mounted, fetch todos
	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div className="app">
			<Form onAddTodo={fetchTodos} />
			<TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
		</div>
	);
};

export default App;
