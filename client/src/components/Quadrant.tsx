import clsx from "clsx"
import { useTodos } from "../hooks/useTodos"
import { Quadrant as QuadrantType } from "../types"
import Todo from "./Todo"

type QuadrantProps = {
  item: QuadrantType
}

export default function Quadrant({ item }: QuadrantProps) {
  const divClasses = clsx("rounded-lg p-2 md:p-4", "bg-" + item.neutral_color)
  const { todos } = useTodos()

  return (
    <div className={divClasses}>
      <div className={`text-${item.primary_color} font-bold mb-2`}>
        <span className="text-lg">{item.title}</span>
      </div>
      <div>
        {todos
          .filter((todo) => todo.quadrant_id === item.id)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  )
}
