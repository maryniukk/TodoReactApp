import React, { useState } from 'react'
import '../../../src/index.css'
import TodoItem from './item/TodoItem'
const initialTodos = []

const Home = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [input, setInput] = useState('')

  const changeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id))
  }
  const addTodo = () => {
    if (input.trim() === '') return // проверка на пустую строку, и прерывание выполнения функции
    setTodos((prevTodos) => [
      ...prevTodos,
      { _id: Math.random().toString(), title: input, completed: false },
    ])

    setInput('') // очистка инпута после ввода
  }
  const clearAll = () => {
    setTodos([])
  }

  return (
    <div className="text-white w-4/5 mx-auto ">
      <div className="text-center ">
        <h1 className="text-3xl  text-center font-bold pt-10 text-black ">
          Todo App
        </h1>
        <div className="flex pt-10   ml-auto mr-auto">
          <div>
            <input
              placeholder="Enter Todo"
              className="w-2/2 border-[0.5px] border-gray-800 rounded-3xl p-3 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="ml-5">
            <button
              onClick={addTodo}
              className="bg-gray-800 rounded-3xl p-3 hover:bg-gray-700 transition-all 0.3s"
            >
              Add Todo
            </button>
          </div>
          <div className="ml-5 text-black">
            {todos.length > 1 ? (
              <button
                className="bg-gray-800 rounded-3xl p-3 text-white hover:bg-gray-700 transition-all 0.3s"
                onClick={clearAll}
              >
                Clear All
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container mx-auto text-black">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            isCompleted={todo.completed}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
