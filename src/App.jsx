import React from "react"
import {Banner, Welcome, Teams, Footer} from "./components/indexComponents"


function App() {


  return (
    <div className="min-h-screen">
      <Banner />
      <main className="flex items-center mx-28">
        <Welcome />
        <Teams />
      </main>
      <Footer />
    </div>
  )
}

export default App
