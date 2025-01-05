import React, { ReactNode } from "react"

type RadioProps = {
  children: ReactNode
  value: number
  name: string
  defaultChecked: boolean
  onChange: () => void
}

export default function Radio({
  children,
  value,
  name,
  defaultChecked,
  onChange,
}: RadioProps) {
  return (
    <label className="basis-1/2">
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        onClick={onChange}
        className="mr-2"
      />
      {children}
    </label>
  )
}
