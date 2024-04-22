import React from 'react'
import Navlink from '../Navlink/Navlink'
import SiteLogo from "../../assets/Images/LogoIcon.svg"
import dashboardIcon from "../../assets/Images/dashboardIcon.svg"
import billingIcon from "../../assets/Images/billingIcon.svg"
import examsIcon from "../../assets/Images/examsIcon.svg"
import featuresIcon from "../../assets/Images/featuresIcon.svg"
import settingsAndProfileIcon from "../../assets/Images/settingsAndProfileIcon.svg"
import studentIcon from "../../assets/Images/studentIcon.svg"
import teachersIcon from "../../assets/Images/teachersIcon.svg"
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div className='w-[21%] h-[100vh] overflow-y-auto bg-[#152259] pt-[26px] px-[28px] relative'>
      <div className=' text-center '>
        <img className='block mx-auto' src={SiteLogo} alt="site logo" width={65} height={65} />
        <h4 className='mt-[27px] font-semibold text-[16px] text-white leading-[17px]'>Udemy Inter. school</h4>
      </div>
        <span className='block h-[0.5px] w-[100%] bg-[#BDBDBD] absolute left-0 right-0 top-[180px]'></span>
      <div className='pt-[60px] pl-1 space-y-[12px]'>
         <Navlink ImgUrl={dashboardIcon} title={"Dashboard"} URL={'/'}/>
         <Navlink ImgUrl={teachersIcon} title={"Teachers"} URL={'/teachers'}/>
         <Navlink ImgUrl={studentIcon} title={"Students"} URL={'/students'}/>
         <Navlink ImgUrl={billingIcon} title={"Billing"} URL={'/billing'}/>
         <Navlink ImgUrl={settingsAndProfileIcon} title={"Settings and profile"} URL={'/settingsAndProfileIcon'}/>
         <Navlink ImgUrl={examsIcon} title={"Exams"} URL={'/exams'}/>
         <div className='flex items-center'>
         <NavLink className={"flex items-center space-x-[16px] hover:bg-[#779fc0] rounded-md w-[222px] pt-[11px] pb-[12px] pl-[16px] mt-[40px] relative"} to={"/featuresIcon"}>
          <img src={featuresIcon} alt="icon" />
          <span className='text-[16px] text-white font-semibold'>Features</span>
         <span className='font-semibold text-[12px] py-[2px] px-[8px] absolute right-[10px] bg-[#B9D7F1] rounded-[12px]'>NEW</span>
         </NavLink>
         </div>
      </div>
    </div>
  )
}

export default NavBar