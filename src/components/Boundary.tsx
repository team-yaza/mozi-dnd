import React from "react"

export default React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  function Boundary(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={
          "relative  h-64 bg-gray-200 dark:bg-[#121212] " + props.className
        }
      />
    )
  }
)
