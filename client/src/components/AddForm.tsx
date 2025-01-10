import clsx from "clsx"
import React, { useState } from "react"
import { useTodos } from "../hooks/useTodos"
import Radio from "./Radio"

type FormValueType = {
  title: string
  priority: number
  urgency: number
  due_date: string
  note: string
}

type AddFormProp = {
  handleFormClose: () => void
}

export default function AddForm({ handleFormClose }: AddFormProp) {
  const buttonClasses = clsx("border border-black px-2 py-1 ml-2 rounded")
  const spanClasses = clsx("basis-1/2 md:basis-1/3 text-lg ")
  const rowClasses = clsx("flex flex-row mb-2")
  const textInputClasses = clsx(
    "w-full border border-gray-400 rounded-lg px-2 py-1 focus:outline-none focus:ring-0"
  )
  const fieldsetClasses = clsx("w-full flex flex-row justify-between")

  const [formValue, setFormValue] = useState<FormValueType>({
    title: "",
    priority: 1,
    urgency: 1,
    due_date: "",
    note: "",
  })
  const { addTodo } = useTodos()

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(formValue)
    handleFormClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Todo</h2>
        <form onSubmit={handleAddTodo}>
          <div className={rowClasses}>
            <span className={spanClasses}>Title: </span>
            <input
              type="text"
              className={textInputClasses}
              value={formValue.title}
              onChange={(e) =>
                setFormValue({ ...formValue, title: e.target.value })
              }
            />
          </div>
          <div className={rowClasses}>
            <span className={spanClasses}>Priority: </span>
            <fieldset className={fieldsetClasses}>
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
          <div className={rowClasses}>
            <span className={spanClasses}>Urgency: </span>
            <fieldset className={fieldsetClasses}>
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
          <div className={rowClasses}>
            <span className={spanClasses}>Due Date: </span>
            <input
              type="date"
              className={textInputClasses}
              value={formValue.due_date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) =>
                setFormValue({ ...formValue, due_date: e.target.value })
              }
            />
          </div>
          <div className="flex flex-row">
            <span className={spanClasses}>Note: </span>
            <textarea
              className={textInputClasses}
              value={formValue.note}
              onChange={(e) =>
                setFormValue({ ...formValue, note: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className={buttonClasses}
              type="button"
              onClick={handleFormClose}
            >
              Cancel
            </button>
            <button className={buttonClasses} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
