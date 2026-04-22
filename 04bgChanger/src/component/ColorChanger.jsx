//import React from 'react'
import { useState, useEffect } from "react"

const ColorChanger = () => {
   const [color, setColor] = useState(() => {
    return localStorage.getItem("bgColor") || "magenta"
  })

  useEffect(() => {
    localStorage.setItem("bgColor", color)
  }, [color])

  return (
   <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">

          <button onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}>
            Red
          </button>

          <button onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}>
            Blue
          </button>

          <button onClick={() => setColor("black")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}>
            Black
          </button>

        </div>
      </div>
    </div>
  )
  
}

export default ColorChanger