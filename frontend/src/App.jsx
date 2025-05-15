import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (

    <Routes>
      {/* User Layout */}
      <Route path='/' element={<UserLayout />} />
      {/* Admin Layout */}
    </Routes>

  )
}

export default App