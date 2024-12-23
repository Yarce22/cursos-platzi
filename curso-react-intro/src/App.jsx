import { useState } from 'react'
import { TodoCounter } from './assets/components/TodoCounter'
import { TodoItem } from './assets/components/TodoItem'
import { TodoList } from './assets/components/TodoList'
import { TodoSearch } from './assets/components/TodoSearch'
import { CreateTodoButton } from './assets/components/CreateTodoButton'
import './App.css'

function App() {
  const defaultTodos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Tomar agua', completed: false},
    {text: 'Ordenar el cuarto', completed: true},
    {text: 'Limpiar cocina', completed: false},
  ]

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

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
    setTodos(newTodos)
  }

  const todoDeleted = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => todoCompleted(todo.text)}
            onDelete={() => todoDeleted(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
