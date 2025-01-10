import { useTodos } from "../hooks/useTodos"
import { Todo as TodoType } from "../types"

type TodoProps = {
  todo: TodoType
}

export default function Todo({ todo }: TodoProps) {
  const { editTodo } = useTodos()

  const handleCheck = () => {
    editTodo({ ...todo, isDone: !todo.isDone })
  }

  return (
    <div className="border border-gray-400 rounded p-2 mb-2">
      <div className="flex flex-row items-center mb-1">
        <input
          type="checkbox"
          defaultChecked={todo.isDone}
          className="w-5 h-5 mr-2"
          onChange={handleCheck}
        />
        <div className="w-full flex flex-row justify-between">
          <span className="break-words truncate font-bold">{todo.title}</span>
          {/* <span className="basis-1/3">
            ~ {todo.due_date.split("-")[1]}/{todo.due_date.split("-")[2]}
          </span> */}
        </div>
      </div>
      <p className="ml-7 text-gray-700">{todo.note}</p>
    </div>
  )
}
