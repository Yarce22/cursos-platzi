import './style.css'

const CreateTodoButton = () => {
  const createToDo = () => {
    console.log('diste click')
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={createToDo}
    >+</button>
  )
}

export { CreateTodoButton }