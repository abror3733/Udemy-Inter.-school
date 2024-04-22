import React from 'react'
import "./Teachers.css"
import bellIcon from "../../../assets/Images/bell.svg"
import TeacherHome from '../TeacherHome/TeacherHome'


function Teachers({user,setUser}){
  return (
    <div className='px-[38px] pt-[21px]'>
      <div className='flex items-center  justify-end space-x-[14px] mb-4'>
          <img src={bellIcon} alt="bel Icon" width={28} height={28}/>
          <button className="text-[#424242] text-[16px] font-semibold w-[90px] rounded-[8px] text-center hover:opacity-50 transition-[0.3s]">Log out</button>
      </div>
          <TeacherHome user={user} setUser={setUser}/>
    </div>
  )
}

export default Teachers