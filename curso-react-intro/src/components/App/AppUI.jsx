import { useContext } from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../../TodoContext'
import './App.css'

const AppUI = () => {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    todoCompleted,
    todoDeleted
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <div className='TodoList-div'>
          {loading && <p className="TodoItem-p">Cargando los ToDos</p>}
          {error && <p className="TodoItem-p">Error cargando los ToDos</p>}
          {(!loading && totalTodos === 0) && <p className="TodoItem-p" style={{display: `${totalTodos ? "none" : "block"}`}}>No tienes tareas pendientes</p>}
        </div>
        {!loading && searchedTodos.map((todo) => (
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

export { AppUI }