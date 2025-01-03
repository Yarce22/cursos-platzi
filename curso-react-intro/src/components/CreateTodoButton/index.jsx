import { useContext } from 'react'
import './style.css'
import { TodoContext } from '../../TodoContext'

const CreateTodoButton = () => {
  const { modalOpened } = useContext(TodoContext)

  return (
    <button
      className="CreateTodoButton"
      onClick={modalOpened}
    >+</button>
  )
}

export { CreateTodoButton }