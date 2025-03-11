import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const emojiMap: { [key:string]: string } = {
  eat: "🍔",
  sleep: "🛌",
  exercise: "🏋️‍♂️",
}

const TodoList: React.FC = () => {
  const [todoText, setTodoText] = useState("")
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const removeTodo = useTodoStore((state) => state.removeTodo)

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.toLowerCase()] || todoText
    if (mappedText.trim()) {
      addTodo(todoText)
      setTodoText("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo()
    }
  }

  return (
    <div>
      <em>Made with Zustand</em>
      <h1>Emoji Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
        onKeyDown={handleKeyDown}
      />
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} onClick={() => removeTodo(todo.id)}>
              {todo.text}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { TodoList }