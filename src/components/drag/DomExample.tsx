import { useState } from "react"

export default function DomExample() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

  return (
    <div>
      <div>
        <h1>DOM Event</h1>
        <span>watch the console log</span>
        <span>
          screen x:{x} y:{y}
        </span>
      </div>
    </div>
  )
}
