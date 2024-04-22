import React, { useState, useEffect } from 'react';
import './TeacherHome.css';
import Search from "../../../assets/Images/search.svg";
import teachersHeroImg from "../../../assets/Images/teachersHeroImg.png";
import bx_support from "../../../assets/Images/bx_support.svg";
import chevronDown from "../../../assets/Images/chevron-down.svg";
import threeDots from "../../../assets/Images/three-dots.svg";
import trash from "../../../assets/Images/trash.svg";
import Modal from '../../../components/ModalHomePage/ModalHomePage'; 
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function TeacherHome({ user, setUser }) {
  const navigate = useNavigate();
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleDeleteUser = (id) => {
    setDeleteUserId(id);
  };

  const handleCancelDelete = () => {
    setDeleteUserId(null);
  };

  const handleConfirmDelete = () => {
    const updatedUser = user.filter((item) => item.id !== deleteUserId);
    setUser(updatedUser);
    toast.success("Ma'lumot o'chirildi!");
    setDeleteUserId(null);
    window.localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const handleSearchUser = (e) => {
    const value = e.target.value;
    const localUser = JSON.parse(window.localStorage.getItem('user'));
    const filteredUser = localUser.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setUser(filteredUser);
  };

  useEffect(() => {
    const localUser = JSON.parse(window.localStorage.getItem('user'));
    setUser(localUser || []);
  }, [setUser]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex items-end justify-between mb-[21px]'>
        <h3 className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</h3>
        <div className='flex flex-col space-y-[14px]'>
          <button onClick={() => navigate("/add-teachers")} className='text-[14] inline-block text-center font-semibold text-white bg-[#509CDB] rounded-[6px] py-[12px] w-[130px] hover:opacity-60 transition-[0.3s]'>Add Teachers</button>
        </div>
      </div>
      <div className='relative'>
        <label>
          <input onChange={handleSearchUser}
            className='w-full shadow-[#a19f9f]  pl-[48px] py-[16px] pr-10 bg-[#FCFAFA] border-transparent border-[1px] rounded-md outline-none shadow-md focus:border-[1px] focus:border-[#509CDB]'
            type="text"
            placeholder='Search for a student by name or email'
          />
          <img
            className='absolute left-[16px] top-[20px]'
            src={Search} alt="search icon"
            width={16}
            height={16}
          />
        </label>
      </div>
      <table className="mt-[27px] w-full">
        <thead>
          {user.length ?
            <tr>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">User Img</th>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">Name</th>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">Subject</th>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">Class</th>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">Email address</th>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">Gender</th>
              <th className="text-[#424242] text-[15px] py-2 font-bold w-[14%]">Action</th>
            </tr>
            : ""}
        </thead>
        <tbody>
          {user.length ? user.map(item => (
            <tr key={item.id} className="odd:bg-[#e8edf1]">
              <td className="text-center py-3 font-medium text-[#4F4F4F] ">
                <img className='mx-auto' src={item.avatarImg} alt="avatar img" width={40} height={40} />
              </td>
              <td className="text-center py-3 font-medium text-[#4F4F4F] ">{item.name}</td>
              <td className="text-center py-3 font-medium text-[#4F4F4F] ">{item.subject}</td>
              <td className="text-center py-3 font-medium text-[#4F4F4F] ">{item.class}</td>
              <td className="text-center py-3 font-medium text-[#4F4F4F] ">{item.email}</td>
              <td className="text-center py-3 font-medium text-[#4F4F4F] ">{item.gender}</td>
              <td className=" py-3 font-medium text-[#4F4F4F] mt-2 flex items-center justify-center space-x-5">
                <button onClick={() => navigate(`/single-page/${item.id}`)} className='flex items-center justify-center hover:shadow-md hover:shadow-[#509CDB] hover:border-[2px] hover:border-slate-400 border-[2px] border-transparent p-1 rounded'>
                  <img src={threeDots} alt="more" width={20} height={20} />
                </button>
                <button id={item.id} onClick={() => handleDeleteUser(item.id)} className='flex items-center justify-center hover:shadow-md hover:shadow-[#509CDB] hover:border-[2px] hover:border-slate-400 border-[2px] border-transparent p-1 rounded'>
                  <img src={trash} alt="delete" width={20} height={20} />
                </button>
              </td>
            </tr>
          )) :
            <tr>
              <td colSpan="7">
                <div className='w-full shadow-[#8b8989] shadow-md relative text-center pt-[14px] bg-[#FCFAFA]  pb-[50px]'>
                  <img className='mx-auto mb-3' src={teachersHeroImg} alt="img" width={340} height={255} />
                  <h4 className='text-[28px] text-[#4F4F4F] font-semibold my-[5px]'>No Teachers at this time</h4>
                  <p className='text-[14px] text-[#4F4F4F] font-medium'>Teachers will appear here after they enroll in your school.  </p>
                  <button className='flex items-center  justify-center space-x-3 w-[171px] bg-[#152259] rounded-[30px] text-center py-[16px] absolute right-[35px] bottom-[40px] hover:opacity-60  shadow-xl'>
                    <img src={bx_support} alt="icon" width={16} height={16} />
                    <span className='text-[16px] font-semibold text-[#FCFAFA]'>Support</span>
                    <img src={chevronDown} alt="icon" width={16} height={16} />
                  </button>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>

      <Modal
        isOpen={deleteUserId !== null}
        onCancel={handleCancelDelete}
        onOk={handleConfirmDelete}
      />
    </div>
  )
}

export default TeacherHome;
