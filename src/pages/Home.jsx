import React from "react"
import {Welcome, Teams, Footer} from "../components/indexComponents" 
import { motion } from "framer-motion"

const Home = () => {

  const screenSizeWidth = window.innerWidth
  
  return (
    <motion.div
    initial={{width:"100%"}}
    animate={{width:"100vw"}}
    exit={{x:"0", transition:{duration:0.4}}}
    >
      <main className={`flex justify-around content-center ${screenSizeWidth<770 ? "flex-col justify-center" : ""}`}>
        <Welcome />
        <Teams />
      </main>
      <footer className={`flex justify-around ${screenSizeWidth<770 ? "justify-center" : ""}`}>
        <Footer />
      </footer>
    </motion.div>
  )
}

export default Home
