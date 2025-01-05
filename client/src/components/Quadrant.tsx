import clsx from "clsx"
import React from "react"
import { useTodos } from "../hooks/useTodos"
import { Quadrant as QuadrantType } from "../types"

type QuadrantProps = {
  item: QuadrantType
}

export default function Quadrant({ item }: QuadrantProps) {
  const divClasses = clsx("rounded-lg p-2 md:p-4", "bg-" + item.neutral_color)
  const { todos } = useTodos()

  return (
    <div className={divClasses}>
      <div className={`text-${item.primary_color} font-bold mb-2`}>
        <span>{item.title}</span>
      </div>
      <div>
        {todos
          .filter((todo) => todo.quadrant_id === item.id)
          .map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
      </div>
    </div>
  )
}
