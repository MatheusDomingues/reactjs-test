import React from 'react'
import TodoList from './components/todoList'
import TodoHeader from './components/todoHeader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: 10
  }
}))

export default function TodoIndex () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TodoHeader></TodoHeader>
      <hr/>
      <TodoList></TodoList>
    </div>
  )
}
