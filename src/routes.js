import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home"
import Tickets from "./pages/Tickets"

import {AnimatePresence} from "framer-motion"

const RoutesApp = () => {
  const location = useLocation()
  return (
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </AnimatePresence>
  )
}


export default RoutesApp