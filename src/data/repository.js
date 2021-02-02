export default function Data() {
  const getItem = (name) => {
    return localStorage.getItem(name)
  }

  const getItemParse = (name) => {
    if (getItem(name) === null) return null
    return JSON.parse(localStorage.getItem(name))
  }

  const setItem = (name, value) => {
    return localStorage.setItem(name, value)
  }

  const setItemStringify = (name, value) => {
    return localStorage.setItem(name, JSON.stringify(value))
  }

  const clear = () => {
    return localStorage.clear()
  }

  return { getItem, setItem, getItemParse, setItemStringify, clear }
}
