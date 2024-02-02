import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap  justify-evenly  items-center h-25 inset-y-10 left-10 w-16 rounded-3xl bg-black"
      >
        <div  className="flex flex-col flex-wrap gap-5 items-center">
          <button onClick={() => setColor("pink")} className="h-10 w-10 px-4 py-2 rounded-full" style={{backgroundColor:"pink"}} ></button>
          <button onClick={() => setColor("white")} className="h-10 w-10 px-4 py-2 rounded-full" style={{backgroundColor:"white"}}></button>
          <button onClick={() => setColor("lightblue")} className="h-10 w-10 px-4 py-2 rounded-full" style={{backgroundColor:"lightblue"}}></button>
          <button onClick={() => setColor("lightgreen")} className="h-10 w-10 px-4 py-2 rounded-full" style={{backgroundColor:"lightgreen"}}></button>
          <button onClick={() => setColor("violet")} className="h-10 w-10 px-4 py-2 rounded-full" style={{backgroundColor:"violet"}}></button>
        </div>
      </div>
    </div>
    )
}

export default App
