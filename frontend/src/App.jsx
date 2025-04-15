import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReminderSection from './component/ReminderSection'
import Dashbord from './component/.Dashbord'
import ReminderList from './component/ReminderList'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashbord/>}></Route>
          <Route path='/remindersection' element={<ReminderSection/>}></Route>
          <Route path='/reminderlist' element={<ReminderList/>}></Route>
    
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
