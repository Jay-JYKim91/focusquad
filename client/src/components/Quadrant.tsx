import clsx from "clsx"
import React from "react"
import { Quadrant as QuadrantType } from "../types"

type QuadrantProps = {
  item: QuadrantType
}

export default function Quadrant({ item }: QuadrantProps) {
  const divClasses = clsx(
    "border border-black rounded-lg p-2 md:p-4",
    item.bg_color
  )

  return (
    <div className={divClasses}>
      <div className={`${item.text_color} font-bold text-center`}>
        {item.title}
      </div>
    </div>
  )
}
