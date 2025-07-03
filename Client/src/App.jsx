import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,
   Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
function App() {



  return (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
          <Route path="/dashboard/settings" element={<h1>Settings Page</h1>} />
        </Routes>
  )
}

export default App
