import React, { useState, useContext } from 'react'
import { TodoContext } from '../../../../contexts/todo.context'
import { Button } from '@material-ui/core'

export default function TodoHeader () {
  const todoContext = useContext(TodoContext)
  const [todo, setTodo] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (todo === '') {
      alert('You must fill in the Name field')
    } else {
      todoContext.dispatch({ type: 'add', payload: todo })
    }
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
        <Button
          color='primary'
          size='small'
          variant='contained'
          style={{ fontSize: '10px', borderRadius: '20px', marginLeft: '5px' }}
          onClick={(e) => {
            handleAddTodo(e)
            setTodo('')
          }}
        >Adicionar</Button>
      </div>
    </div>
  )
}
