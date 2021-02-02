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
    return state
  }

  const deleteTodo = (todo) => {
    return state
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
