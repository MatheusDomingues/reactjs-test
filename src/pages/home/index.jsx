import React from 'react'
import TodoList from './components/todoList'
import TodoHeader from './components/todoHeader'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0
  }
}))

export default function TodoIndex () {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth='lg'>
      <TodoHeader></TodoHeader>
      <hr/>
      <TodoList></TodoList>
    </Container>
  )
}
