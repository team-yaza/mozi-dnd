import React from "react"

export default React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  function Box(props, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className="h-full w-full bg-white shadow-xl cursor-move rounded-xl ring-1 ring-gray-100"
      ></div>
    )
  }
)
