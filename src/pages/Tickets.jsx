import React from 'react'
import { Teams , Purchase} from '../components/indexComponents'
import { motion } from 'framer-motion'

const Tickets = () => {
  return (
    <motion.main
      initial={{width:"0"}}
      animate={{width:"100vw"}}
      exit={{x:"100vw", transition:{duration:0.2}}}
    >
      <main className='flex items-center my-8 mx-16'>
        <Teams/>
        <Purchase/>
      </main>
    </motion.main>
  )
}

export default Tickets