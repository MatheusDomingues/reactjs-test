export default function Data () {
  const getItem = (name) => {
    return sessionStorage.getItem(name)
  }

  const getItemParse = (name) => {
    if (getItem(name) === null) return null
    return JSON.parse(sessionStorage.getItem(name))
  }

  const setItem = (name, value) => {
    return sessionStorage.setItem(name, value)
  }

  const setItemStringify = (name, value) => {
    return sessionStorage.setItem(name, JSON.stringify(value))
  }

  const clear = () => {
    return sessionStorage.clear()
  }

  return { getItem, setItem, getItemParse, setItemStringify, clear }
}
