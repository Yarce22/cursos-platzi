import { TodoCounter } from './assets/components/TodoCounter'
import { TodoItem } from './assets/components/TodoItem'
import { TodoList } from './assets/components/TodoList'
import { TodoSearch } from './assets/components/TodoSearch'
import './App.css'

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton /> */}
    </>
  )
}

export default App
