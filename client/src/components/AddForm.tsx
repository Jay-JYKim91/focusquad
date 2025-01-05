import clsx from "clsx"
import React, { useState } from "react"
import { useTodos } from "../hooks/useTodos"
import Radio from "./Radio"

type FormValueType = {
  title: string
  priority: number
  urgency: number
  due_date: string
}

export default function AddForm() {
  const buttonClasses = clsx("border border-black px-2 py-1 ml-2 rounded")
  const spanClasses = clsx("basis-1/3")
  const [formValue, setFormValue] = useState<FormValueType>({
    title: "",
    priority: 1,
    urgency: 1,
    due_date: "",
  })
  const { addTodo } = useTodos()

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formValue)
    addTodo(formValue)
  }

  return (
    <form onSubmit={handleAddTodo}>
      <div className="flex flex-row">
        <span className={spanClasses}>Title: </span>
        <input
          type="text"
          className="w-full mb-2"
          value={formValue.title}
          onChange={(e) =>
            setFormValue({ ...formValue, title: e.target.value })
          }
        />
      </div>
      <div className="flex flex-row">
        <span className={spanClasses}>Priority: </span>
        <fieldset>
          <Radio
            name="priority"
            value={1}
            defaultChecked={true}
            onChange={() => setFormValue({ ...formValue, priority: 1 })}
          >
            HIGH
          </Radio>
          <Radio
            name="priority"
            value={0}
            defaultChecked={false}
            onChange={() => setFormValue({ ...formValue, priority: 0 })}
          >
            LOW
          </Radio>
        </fieldset>
      </div>
      <div className="flex flex-row">
        <span className={spanClasses}>Urgency: </span>
        <fieldset>
          <Radio
            name="urgency"
            value={1}
            defaultChecked={true}
            onChange={() => setFormValue({ ...formValue, urgency: 1 })}
          >
            HIGH
          </Radio>
          <Radio
            name="urgency"
            value={0}
            defaultChecked={false}
            onChange={() => setFormValue({ ...formValue, urgency: 0 })}
          >
            LOW
          </Radio>
        </fieldset>
      </div>
      <div className="flex flex-row">
        <span className={spanClasses}>Due Date: </span>
        <input
          type="date"
          className="w-full mb-2"
          value={formValue.due_date}
          onChange={(e) =>
            setFormValue({ ...formValue, due_date: e.target.value })
          }
        />
      </div>
      {/* <div className="flex flex-row">
        <span className={spanClasses}>Note: </span>
        <input
          type="text"
          className="w-full mb-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div> */}

      <div className="flex justify-end">
        <button className={buttonClasses} type="button">
          Cancel
        </button>
        <button className={buttonClasses} type="submit">
          SAVE
        </button>
      </div>
    </form>
  )
}
