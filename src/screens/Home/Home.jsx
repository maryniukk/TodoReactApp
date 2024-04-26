import { useState } from 'react'
import '../../../src/index.css'
import TodoItem from './item/TodoItem'

const todos = [
	{ _id: 'WQEWQDSAF123', title: 'Learn JavaScript', completed: false },
	{ _id: 'weioqu231', title: 'Learn React', completed: false },
	{ _id: 'ds2kmco31', title: 'Build something awesome', completed: false },
]

const Home = data => {
	const [todo, setTodo] = useState(data)

	// Смена true/false
	const changeTodo = parameter => {
		const arr = [...todos]
		const element = arr.find(f => f._id === parameter)
		element.completed = !element.completed
		setTodo(element)
	}

	return (
		<div className='text-white w-4/5 mx-auto'>
			<div className='mb-10'>
				<h1 className='text-3xl text-white text-center font-bold mt-4 '>
					Todo Junior App
				</h1>
			</div>
			<div className=' text-white w-4/5 mx-auto'>
				{todos.map(todo => (
					<TodoItem
						key={todo._id}
						todo={todo}
						isCompleted={todo.completed}
						changeTodo={changeTodo}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
