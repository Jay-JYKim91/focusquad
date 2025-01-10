import { createContext, useEffect, useState } from "react"
import { Todo as TodoType, TodoInput as TodoInputType } from "../types"

const TODOS_STORAGE_KEY = "todos"

type TodoContextType = {
  todos: TodoType[]
  addTodo: (todo: TodoInputType) => void
  editTodo: (todo: TodoType) => void
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedTodoData = localStorage.getItem(TODOS_STORAGE_KEY)
  const [todos, setTodos] = useState<TodoType[]>(
    storedTodoData ? JSON.parse(storedTodoData) : []
  )

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const getQuadrantId = (priority: number, urgency: number) => {
    return priority && urgency ? 1 : priority ? 2 : urgency ? 3 : 4
  }

  const addTodo = (todo: TodoInputType) => {
    const newTodo: TodoType = {
      id: Date.now(),
      quadrant_id: getQuadrantId(todo.priority, todo.urgency),
      title: todo.title,
      isDone: false,
      due_date: todo.due_date,
      note: todo.note,
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const editTodo = (todo: TodoType) => {
    const newTodos = todos.map((item) => (item.id === todo.id ? todo : item))

    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
