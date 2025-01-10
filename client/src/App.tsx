import { useState } from "react"
import AddForm from "./components/AddForm"
import Button from "./components/Button"
import Header from "./components/Header"
import Quadrant from "./components/Quadrant"
import { TodoProvider } from "./context/TodoContext"
import { Quadrant as QuadrantType } from "./types"

const QUADRANTS: QuadrantType[] = [
  {
    id: 1,
    title: "Do Now",
    primary_color: "red-900",
    neutral_color: "red-100",
  },
  {
    id: 2,
    title: "Schedule",
    primary_color: "blue-900",
    neutral_color: "blue-100",
  },
  {
    id: 3,
    title: "Delegate",
    primary_color: "yellow-900",
    neutral_color: "yellow-100",
  },
  {
    id: 4,
    title: "Delete",
    primary_color: "gray-900",
    neutral_color: "gray-100",
  },
]

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isHideCompleted, setIsHideCompleted] = useState(false)
  const clickFormClose = () => setIsFormOpen(false)

  return (
    <TodoProvider>
      <Header />
      <div className="m-4 flex justify-end">
        <Button
          title={`${isHideCompleted ? "Show" : "Hide"} Completed`}
          handleClick={() => setIsHideCompleted(!isHideCompleted)}
        />
        <Button title="+ Add Todo" handleClick={() => setIsFormOpen(true)} />
      </div>
      <div className="m-4 grid grid-cols-2 gap-2 md:gap-4">
        {QUADRANTS.map((quad) => (
          <Quadrant
            key={quad.id}
            item={quad}
            isHideCompleted={isHideCompleted}
          />
        ))}
      </div>
      {isFormOpen && <AddForm handleFormClose={clickFormClose} />}
    </TodoProvider>
  )
}

export default App
