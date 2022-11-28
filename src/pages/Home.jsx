import React from "react"
import {Banner, Welcome, Teams, Footer} from "../components/indexComponents"


const Home = () => {


  return (
    <div className="gradient-bg">
      <Banner />
      <main className="flex items-center mx-28">
        <Welcome />
        <Teams />
      </main>
      <Footer />
    </div>
  )
}

export default Home
