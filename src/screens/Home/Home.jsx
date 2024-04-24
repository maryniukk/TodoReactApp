import '../../../src/index.css'
import TodoItem from './item/TodoItem'

const todos = [
	{ _id: 'WQEWQDSAF123', title: 'Learn JavaScript', completed: false },
	{ _id: 'weioqu231', title: 'Learn React', completed: false },
	{ _id: 'ds2kmco31', title: 'Build something awesome', completed: false },
]

const Home = () => {
	return (
		<div className='bg-gray-900 h-screen'>
			<h1 className='text-3xl text-white text-center font-bold'>
				Todo Junior App
			</h1>
			{todos.map(todo => (
				<TodoItem key={todo._id} todo={todo} />
			))}
		</div>
	)
}

export default Home
