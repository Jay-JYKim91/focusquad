import Header from "./components/Header"
import Quadrant from "./components/Quadrant"
import { Quadrant as QuadrantType } from "./types"

const QUADRANTS: QuadrantType[] = [
  {
    id: 1,
    title: "Do Now",
    bg_color: "bg-red-100",
    text_color: "text-red-900",
  },
  {
    id: 2,
    title: "Schedule",
    bg_color: "bg-blue-100",
    text_color: "text-blue-900",
  },
  {
    id: 3,
    title: "Delegate",
    bg_color: "bg-yellow-100",
    text_color: "text-yellow-900",
  },
  {
    id: 4,
    title: "Delete",
    bg_color: "bg-gray-100",
    text_color: "text-gray-900",
  },
]

function App() {
  return (
    <>
      <Header />
      <div className="bg-white m-4 grid grid-cols-2 gap-2 md:gap-4">
        {QUADRANTS.map((quad) => (
          <Quadrant key={quad.id} item={quad} />
        ))}
      </div>
    </>
  )
}

export default App
