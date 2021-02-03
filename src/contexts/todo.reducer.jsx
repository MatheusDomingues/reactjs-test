export default function reducer (state, action) {
  const ids = []
  const maxOfItems = 10000

  const addTodo = (todo) => {
    const uniqueId = () => {
      if (ids.length !== maxOfItems) {
        let randomNumber = Math.ceil(Math.random() * maxOfItems)
        while (ids.indexOf(randomNumber) >= 0) {
          randomNumber = Math.ceil(Math.random() * maxOfItems)
        }
        ids.push(randomNumber)
        return randomNumber
      }
    }

    const todoItem = { id: uniqueId(), description: todo, done: false }

    return [...state, todoItem]
  }

  const updateTodo = (todo) => {
    const filledTodo = state.map(item => {
      if (item.id === todo.id) {
        return todo
      }
      return item
    })

    return filledTodo
  }

  const deleteTodo = (todo) => {
    const filledTodos = []
    state.forEach(item => {
      if (item.id !== todo.id) {
        filledTodos.push(item)
      }
    })

    return filledTodos
  }

  switch (action.type) {
    case 'add':
      return addTodo(action.payload)
    case 'update':
      return updateTodo(action.payload)
    case 'remove':
      return deleteTodo(action.payload)
    default:
      return null
  }
}
