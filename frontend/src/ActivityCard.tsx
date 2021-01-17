import React from "react"
import "./ActivityCard.css"

type Direction = "left" | "right" | "up" | "down"

interface Props {
  type: string
  onClick: () => void
}

const ActivityCard: React.FC<Props> = ({ type, onClick }) => {
  return (
    <div className={`flexcard ${type}`}>
      {" "}
      {/* <div style={{ filter: "brightness(80%)" }}> */}
      <h2>Foo</h2>
      <em>
        <small>Some small text</small>
      </em>
      {/* </div> */}
      <hr />
      <p>A bit more text, this text should be long long long.</p>
      <button onClick={onClick} className="big-button">
        Click me if you can!
      </button>
    </div>
  )
}

export default ActivityCard
