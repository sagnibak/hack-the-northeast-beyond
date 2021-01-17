import React, { useState } from "react"
import ActivityCard from "./ActivityCard"
import "./ActivityCard.css"

type Direction = "left" | "right" | "up" | "down"
interface Props {}

const App: React.FC<Props> = (props) => {
  const [directions, setDirections] = useState(["right"])
  const directionChoices = ["left", "right", "up", "down"]
  return (
    <div className="flex-container">
      {directions.map((dir) => (
        <ActivityCard
          type={dir}
          onClick={() => {
            const random = Math.floor(Math.random() * 4)
            setDirections(directions.concat(directionChoices[random]))
          }}
        />
      ))}
    </div>
  )
}

export default App
