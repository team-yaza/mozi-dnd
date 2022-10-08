import type { NextPage } from "next"

import DomExample from "@/components/drag/DomExample"
import DragExample from "@/components/drag/DragExample"
import DragBounceExample from "@/components/drag/DragBounceExample"

const Home: NextPage = () => {
  return (
    <>
      <DomExample />
      <DragExample />
      <DragBounceExample />
    </>
  )
}

export default Home
