import { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import './style.css'

const TodoForm = () => {
  const {setOpenModal, todos, setTodos} = useContext(TodoContext)
  const [newTodo, setNewTodo] = useState('')

  const closeModal = () => {
    setOpenModal(false)
  }

  const addTodo = (text) => {
    if (text) {
      const oldTodos = [...todos]
      const newTodos = {text: text, completed: false}
      oldTodos.push(newTodos)
      
      localStorage.setItem('TODOS_V1', JSON.stringify(oldTodos))
      
      setTodos(oldTodos)
      setOpenModal(false)
    }else {
      alert("Debes ingresar una tarea")
    }
  }

  const newTodoValue = (event) => {
    setNewTodo(event.target.value)
  }
  
  return (
    <form>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        onChange={newTodoValue}
        placeholder="Ingresa su nuevo ToDo"
        required
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          onClick={closeModal}
          type='button'
          className="TodoForm-button TodoForm-button--cancel"
        >Cancelar</button>
        <button
          onClick={() => addTodo(newTodo)}
          type='button'
          className="TodoForm-button TodoForm-button--add"
        >Agregar</button>
      </div>
    </form>
  )
}

export { TodoForm }
