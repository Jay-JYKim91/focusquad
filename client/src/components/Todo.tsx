import { useState } from "react"
import { useTodos } from "../hooks/useTodos"
import { Todo as TodoType } from "../types"

type TodoProps = {
  todo: TodoType
}

export default function Todo({ todo }: TodoProps) {
  //   const [isChecked, setIsChecked] = useState(todo.isDone)
  const { editTodo } = useTodos()

  const handleCheck = () => {
    editTodo({ ...todo, isDone: !todo.isDone })
  }

  return (
    <div className="flex flex-row items-center mb-1">
      <input
        type="checkbox"
        defaultChecked={todo.isDone}
        className="w-5 h-5 mr-2"
        onChange={handleCheck}
      />
      <span>{todo.title}</span>
    </div>
  )
}
