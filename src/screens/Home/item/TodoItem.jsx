import React from 'react'
import { FaCheck } from 'react-icons/fa'
import '/src/index.css'

const TodoItem = ({ todo }) => {
	return (
		<div>
			<div className='text-white text-2xl'>
				<FaCheck className='text-pink-500' size={25} />
				{todo.title}
			</div>
			)
		</div>
	)
}

export default TodoItem
