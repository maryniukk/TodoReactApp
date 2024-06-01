import cn from 'classnames'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import '/src/index.css'

const TodoItem = ({ todo, changeTodo, isCompleted, removeTodo }) => {
    return (
        <div className="flex mt-5 w-2/5 border-2 border-gray-800 rounded-3xl p-5 items-center">
            <FaCheck
                className="text-grey-300"
                isCompleted={isCompleted}
                onClick={() => changeTodo(todo._id)}
            />
            <span
                className={cn('text-black ml-3 flex-grow', {
                    'line-through': isCompleted,
                })}
            >
                {todo.title}
            </span>
            <button
                onClick={() => removeTodo(todo._id)}
                className="text-black ml-auto"
            >
                <BsTrash className="text-black" size={20} />
            </button>
        </div>
    )
}

export default TodoItem
