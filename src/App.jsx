import React from "react"
import {Banner} from "./components/indexComponents"
import RoutesApp from "./routes"

function App() {

  const screenSizeWidth = window.innerWidth

  return (
    <div className="gradient-bg min-h-screen w-full">
      <Banner />
      <div className={`flex ${screenSizeWidth<560 ? "flex-col" : ""}`}>
        <RoutesApp />
      </div>
    </div>
  )
}

export default App
