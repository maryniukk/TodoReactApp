import cn from 'classnames'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import Check from './Check'
import '/src/index.css'
const TodoItem = ({ todo, changeTodo, isCompleted, removeTodo }) => {
	return (
		<div>
			<div className='mt-5 w-2/5'>
				<span
					onClick={() => changeTodo(todo._id)}
					className='flex items-center rounded-3xl border-2 border-gray-800 p-5 '
				>
					<Check className='text-white ' isCompleted={isCompleted} />
					<span
						className={cn('text-white ml-3', { 'line-through': isCompleted })}
					>
						{todo.title}
					</span>
				</span>
			</div>
			<button
				onClick={() => removeTodo(todo._id)}
				className='text-white ml-auto pl-7'
			>
				<BsTrash size={25} />
			</button>
		</div>
	)
}

export default TodoItem
