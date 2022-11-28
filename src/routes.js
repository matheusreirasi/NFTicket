import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Tickets from "./pages/Tickets"



const Router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/tickets",
    element:<Tickets/>
  }
])

export default Router