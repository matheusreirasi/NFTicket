import React from 'react'
import { Teams , Purchase} from '../components/indexComponents'
import { motion } from 'framer-motion'

const Tickets = () => {

  const screenSizeWidth = window.innerWidth
  
  return (
    <motion.main
      initial={{width:"0%"}}
      animate={{width:"100%"}}
      transition={{default: { ease: "linear" }, duration:0.4}}
      exit={{x:screenSizeWidth, transition:{duration:0.3}}}
    >
      <main className={`flex justify-around content-center ${screenSizeWidth<770 ? "flex-col justify-center mx-4" : ""}`}>
        <Teams/>
        <Purchase/>
      </main>
    </motion.main>
  )
}

export default Tickets