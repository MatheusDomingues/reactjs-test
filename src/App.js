import React from 'react'
import Home from './pages/home'
import TodoProvider from './contexts/todo.context'

function App() {
  return (
    <TodoProvider>
      <div>
        <Home></Home>
      </div>
    </TodoProvider>
  )
}

export default App
