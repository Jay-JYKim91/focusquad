import React from "react"

type ButtonProps = {
  title: string
  handleClick: () => void
}

export default function Button({ title, handleClick }: ButtonProps) {
  return (
    <div
      className="border border-black px-2 py-1 ml-2 rounded"
      onClick={handleClick}
    >
      {title}
    </div>
  )
}
