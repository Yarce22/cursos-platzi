import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const TodoContext = createContext()

const localStorageInitial = () => localStorage.getItem("TODOS_V1") ? JSON.parse(localStorage.getItem("TODOS_V1")) : []

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(localStorageInitial)
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')

    setTimeout(() => {
      try {
        if (todosFromStorage) {
          setLoading(false)
          return JSON.parse(todosFromStorage)
        } else {
          setLoading(false)
          return []
        }
      } catch(error) {
        console.log(error);
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [todos])

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const todoCompleted = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const todoDeleted = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(todoIndex, 1)
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const inputText = (event) => {
    setSearchValue(event.target.value)
  }

  const modalOpened = () => {
    setOpenModal(!openModal)
  }

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      searchValue,
      setSearchValue,
      loading,
      setLoading,
      error,
      setError,
      totalTodos,
      completedTodos,
      searchedTodos,
      todoCompleted,
      todoDeleted,
      inputText,
      openModal,
      setOpenModal,
      modalOpened,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node
}

export { TodoContext, TodoProvider }
