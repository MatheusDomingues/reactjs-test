import React from 'react'
import Home from './pages/home'
import TodoProvider from './contexts/todo.context'

function App () {
  return (
    <TodoProvider>
      <section>
        <Home></Home>
      </section>
    </TodoProvider>
  )
}

export default App
