import React from "react"
import {Banner, Welcome, Teams, Footer} from "./components/indexComponents"


function App() {


  return (
    <div className="min-h-screen">
      <Banner />
      <main className="w-full flex items-center justify-start px-12 py-6">
        <Welcome />
        <Teams />
      </main>
      <Footer />
    </div>
  )
}

export default App
