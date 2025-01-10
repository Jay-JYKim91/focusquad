import clsx from "clsx"
import { useTodos } from "../hooks/useTodos"
import { Quadrant as QuadrantType } from "../types"
import Todo from "./Todo"

type QuadrantProps = {
  item: QuadrantType
  isHideCompleted: boolean
}

export default function Quadrant({ item, isHideCompleted }: QuadrantProps) {
  const divClasses = clsx("rounded-lg p-2 md:p-4", "bg-" + item.neutral_color)
  const { todos } = useTodos()
  const filteredTodo = todos
    .filter((todo) => todo.quadrant_id === item.id)
    .filter((todo) => !isHideCompleted || !todo.isDone)

  return (
    <div className={divClasses}>
      <div className={`text-${item.primary_color} font-bold mb-2`}>
        <span className="text-lg">{item.title}</span>
      </div>
      <div
      // className="grid grid-cols-1 md:grid-cols-2 gap-2"
      >
        {filteredTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}
