import React, { useState, useContext } from 'react'
import { TodoContext } from '../../../../contexts/todo.context'

export default function TodoHeader () {
  const todoContext = useContext(TodoContext)
  const [todo, setTodo] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    todoContext.dispatch({ type: 'add', payload: todo })
  }

  return (
    <div>
      <p>Lista de Atividades</p>
      <div >
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
          placeholder="digite para filtrar"
        ></input>
        <button
          type="button"
          onClick={(e) => {
            handleAddTodo(e)
            setTodo('')
          }}
        >Adicionar</button>
      </div>
    </div>
  )
}
