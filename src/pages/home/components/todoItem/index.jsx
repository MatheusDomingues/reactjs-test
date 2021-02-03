import React, { useEffect, useContext } from 'react'
import { Button } from '@material-ui/core'
import { Delete, Check } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { TodoContext } from '../../../../contexts/todo.context'

const useStyles = makeStyles(() => ({
  enve: {
    backgroundColor: '#ffffff',
    border: '1px solid #dddddd'
  },
  odd: {
    backgroundColor: '#dddddd'
  }
}))

export default function Todo ({ id, description, done }) {
  const todoContext = useContext(TodoContext)
  const classes = useStyles()

  useEffect(() => {
    const items = document.querySelectorAll('.item')
    items.forEach(item => filledItem(item))
  }, [])

  const filledItem = (item) => {
    if (item.id % 2 === 0) {
      item.classList.add(classes.enve)
    } else {
      item.classList.add(classes.odd)
    }
  }

  const alreadyDone = done
    ? <p style={{ color: 'green', margin: 0, marginLeft: 5 }}>Sim</p>
    : <p style={{ color: 'red', margin: 0, marginLeft: 5 }}>Não</p>

  const handleUpdateTodo = (e) => {
    e.preventDefault()
    todoContext.dispatch({ type: 'update', payload: { id, description, done: true } })
  }

  const handleDeleteTodo = (e) => {
    e.preventDefault()
    todoContext.dispatch({ type: 'remove', payload: { id } })
  }

  return (
    <article id={id} className='item' style={{ marginTop: 10, cursor: 'pointer', padding: 10 }}>
      <div>
        <div style={{ fontWeight: 'bold' }}>{id} - {description}</div>
        <div style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>Feito? {alreadyDone}</div>
      </div>
      <div>
        <Button
          color='primary'
          size='small'
          variant='contained'
          style={done ? { fontSize: 10, opacity: 0, cursor: 'default' } : { fontSize: 10 }}
          startIcon={<Check style={{ fontSize: 15 }} />}
          onClick={(e) => handleUpdateTodo(e)}
        >Done</Button>
        <Button
          color='secondary'
          size='small'
          variant='contained'
          startIcon={<Delete style={{ fontSize: 15 }} />}
          style={{ fontSize: 10, marginLeft: 5 }}
          onClick={(e) => handleDeleteTodo(e)}
        >Delete</Button>
      </div>
    </article>
  )
}
