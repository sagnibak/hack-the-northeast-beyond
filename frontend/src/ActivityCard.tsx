import React, { useEffect, useState } from "react"
import "./ActivityCard.css"
import axios from "axios"

type Direction = "left" | "right" | "up" | "down"

interface Props {
  type: string
  onClick: () => void
}

const ActivityCard: React.FC<Props> = ({ type, onClick }) => {
  const [jokeState, setJokeState] = useState("")
  const [titleState, setTitleState] = useState("")

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => setJokeState(res.data.joke))

    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        const joke = res.data.joke.split(" ")
        console.log(joke)
        const random = Math.floor(Math.random() * joke.length)
        const random2 = Math.floor(Math.random() * joke.length)
        setTitleState(joke[random] + " " + joke[random2])
      })
    // axios
    //   .get("https://evilinsult.com/generate_insult.php", {
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     setTitleState(res.data.insult)
    //   })

    return () => {}
  }, [])

  return (
    <div className={`flexcard ${type}`}>
      {" "}
      {/* <div style={{ filter: "brightness(80%)" }}> */}
      <h2>{titleState}</h2>
      <em>
        <small>A dad joke for you, because we aren't so evil</small>
      </em>
      {/* </div> */}
      <hr />
      <p>{jokeState}</p>
      <button onClick={onClick} className="big-button">
        Click me if you can!
      </button>
    </div>
  )
}

export default ActivityCard
