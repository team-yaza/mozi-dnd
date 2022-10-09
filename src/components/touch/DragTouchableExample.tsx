import { inrange } from "@/utils"
import registerDragEvent from "@/utils/registerDragEvent"
import { useRef, useState } from "react"
import Boundary from "../Boundary"
import Box from "../Box"

const BOUNDARY_MARGIN = 12
const DEFAULT_W = 240
const DEFAULT_H = 120

export default function DragTouchableExample() {
  const boundaryRef = useRef<HTMLDivElement>(null)

  const [{ x, y }, setConfig] = useState({
    x: 0,
    y: 0,
  })

  return (
    <div className="p-4">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Touch Drag</h1>
        <span>mouse & touch event</span>
        <span className="ml-4">
          x:{Math.floor(x)} y:{Math.floor(y)}
        </span>
      </div>
      <Boundary ref={boundaryRef}>
        <div
          style={{ width: DEFAULT_W, height: DEFAULT_H, left: x, top: y }}
          className="relative"
          {...registerDragEvent((deltaX, deltaY) => {
            if (!boundaryRef.current) return

            const boundary = boundaryRef.current.getBoundingClientRect()

            setConfig({
              x: inrange(
                x + deltaX,
                BOUNDARY_MARGIN,
                boundary.width - DEFAULT_W - BOUNDARY_MARGIN
              ),
              y: inrange(
                y + deltaY,
                BOUNDARY_MARGIN,
                boundary.height - DEFAULT_H - BOUNDARY_MARGIN
              ),
            })
          })}
        >
          <Box />
        </div>
      </Boundary>
    </div>
  )
}
