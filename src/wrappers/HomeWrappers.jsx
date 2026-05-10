import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";

import React from 'react'

const HomeWrappers = () => {
  return (
    <div>

        <Navbar />
        <Outlet /> 

    </div>
  )
}

export default HomeWrappers