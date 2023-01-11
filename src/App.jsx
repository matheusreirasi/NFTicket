import React from "react"
import {Banner} from "./components/indexComponents"
import RoutesApp from "./routes"

function App() {


  return (
    <div className="gradient-bg min-h-screen">
      <Banner />
      <main className="flex items-center mx-28 w-screen">
        <RoutesApp />
      </main>
    </div>
  )
}

export default App
