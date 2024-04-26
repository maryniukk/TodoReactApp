import React from 'react'
import { BsCheck } from 'react-icons/bs'
import '/src/index.css'
const Check = ({ isCompleted }) => {
	return (
		<div className='border-2 border-pink-400 rounded-lg w-7 h-7 flex items-center justify-center mr-3 '>
			<div>{isCompleted && <BsCheck size={25} className='text-white ' />}</div>
		</div>
	)
}

export default Check
