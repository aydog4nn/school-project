import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Pc from '../pages/Pc'

function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/pcMuh' element={<Pc />} />
        </Routes>
    </div>
  )
}

export default RouterConfig