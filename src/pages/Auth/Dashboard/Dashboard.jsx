import React, { useState } from 'react';
import "./Dashboard.css";
import bellIcon from "../../../assets/Images/bell.svg";
import dashboardAdmin from "../../../assets/Images/dashboardAdmin.svg";
import dashboradBank from "../../../assets/Images/dashboradBank.svg";
import dashboardStudents from "../../../assets/Images/dashboardStudents.svg";
import bx_support from "../../../assets/Images/bx_support.svg";
import chevronDown from "../../../assets/Images/chevron-down.svg";
import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import Login from '../../UnAuth/Login/Login';
import UnAuthentication from '../../../UnAuthentication';

function Dashboard() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
    setShowLogoutModal(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className='relative'>
      <div className='flex items-center justify-between shadow-md w-full pt-[15px] pb-[15px] pl-[94px] pr-[100px] bg-[#FCFAFA] '>
        <div className='flex flex-col'>
          <strong className='text-[#424242] text-[16px]'>Learn  how to launch faster</strong>
          <p className='text-[#424242] text-[16px]'>watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
        <div className='flex items-center space-x-[48px]'>
          <img src={bellIcon} alt="bell Icon" width={28} height={28}/>
          <button onClick={() => setShowLogoutModal(true)} className="text-[#FCFAFA] text-[16px] font-semibold w-[120px] rounded-[8px] bg-[#509CDB] py-[10px] text-center hover:opacity-50 transition-[0.3s]">Log out</button>
        </div>
      </div>
      <div className='pl-[94px] pt-[43px]'>
        <h1 className='text-[#4F4F4F] text-[36px] font-semibold'>Welcome to your dashboard, Udemy school</h1>
        <h3 className='text-[#4F4F4F] pl-[70px] text-[22px] mt-[13px] font-semibold'>Uyo/school/@teachable.com</h3>
        <ul className='mt-[40px] pl-[70px] flex flex-col space-y-[30px]'>
          <li className='flex items-start space-x-[20px]'>
            <img src={dashboardAdmin} alt="icon" width={36} height={36}/>
            <div className='flex flex-col space-y-[15px] w-[514px]'>
              <h4 className='text-[21px] font-medium text-[#4F4F4F]'>Add other admins </h4>
              <p className='text-[14px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
          <li className='flex items-start space-x-[20px]'>
            <img src={dashboradBank} alt="icon" width={36} height={36}/>
            <div className='flex flex-col space-y-[15px] w-[514px]'>
              <h4 className='text-[21px] font-medium text-[#4F4F4F]'>Add classes  </h4>
              <p className='text-[14px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
          <li className='flex items-start space-x-[20px]'>
            <img src={dashboardStudents} alt="icon" width={36} height={36}/>
            <div className='flex flex-col space-y-[15px] w-[514px]'>
              <h4 className='text-[21px] font-medium text-[#4F4F4F]'>Add students </h4>
              <p className='text-[14px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
                When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
        </ul>
        <button className='flex items-center  justify-center space-x-3 w-[171px] bg-[#152259] rounded-[30px] text-center py-[16px] absolute right-[90px] bottom-[20px] hover:opacity-60  shadow-xl'>
          <img src={bx_support} alt="icon" width={16} height={16} />
          <span className='text-[16px] font-semibold text-[#FCFAFA]'>Support</span>
          <img src={chevronDown} alt="icon" width={16} height={16}/>
        </button>
      </div>
      {showLogoutModal && (
        <Modal onClose={() => setShowLogoutModal(false)}>
          <h2>Are you sure you want to log out?</h2>
          <div className="flex justify-end mt-4 space-x-4">
            <button onClick={handleCancelLogout} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
            <button onClick={handleLogout} className="px-4 py-2 bg-[#509CDB] text-white rounded-md">OK</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
