import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Auth/Dashboard/Dashboard'
import Teachers from './pages/Auth/Teachers/Teachers'
import Students from './pages/Auth/Students/Students'
import Billing from './pages/Auth/Billing/Billing'
import SettingsAndProfile from './pages/Auth/SettingsAndProfile/SettingsAndProfile'
import Exams from './pages/Auth/Exams/Exams'
import Features from './pages/Auth/Features/Features'
import AddTeachers from './pages/Auth/AddTeachers/AddTeachers'
import avatarImg from "././assets/Images/avatarSvg.svg"
import SinglePageUser from './pages/Auth/SinglePageUser/SinglePageUser'
import Login from './pages/UnAuth/Login/Login'

function Authentication() {
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem("user"))||[
    {
      id:1,
      avatarImg:avatarImg,
      name:"Kristin Watson",
      subject:"Chemistry",
      class:"JSS 2",
      email:"michela@example.com",
      gender:"Female"
    }

  ])
  
  return (
    <div className='flex'>
      <NavBar/>
      <div className='w-[79%] h-[100vh] overflow-y-auto'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/teachers' element={<Teachers user={user} setUser={setUser}/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/settingsAndProfileIcon' element={<SettingsAndProfile/>}/>
          <Route path='/exams' element={<Exams/>}/>
          <Route path='/add-teachers' element={<AddTeachers user={user} setUser={setUser}/>}/>
          <Route path='/featuresIcon' element={<Features/>}/>
          <Route path='/single-page/:id' element={<SinglePageUser user={user}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Authentication