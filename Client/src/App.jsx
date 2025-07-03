import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,
   Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import HomePage from './pages/Homepage'
import CandidateSetupPage from './pages/CandidateSetup'
import InterviewSessionPage from './pages/InterviewSessionPage'
import RecruiterDashboardPage from './pages/RecruiterDashboard'
import ReportPage from './pages/ReportPage'
import ErrorPage from './pages/Errorpage'
function App() {



  return (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/candidate/setup" element={<CandidateSetupPage />} />
          <Route path="/candidate/interview" element={<InterviewSessionPage />} />
          <Route path="/recruiter/dashboard" element={<RecruiterDashboardPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
  )
}

export default App
