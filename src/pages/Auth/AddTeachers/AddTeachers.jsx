import React, { useEffect, useState } from 'react'
import bellIcon from "../../../assets/Images/bell.svg"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import arrow from '../../../assets/Images/arrow.svg'
import download from '../../../assets/Images/cloud-arrow-down-fill.svg'



function AddTeachers({user,setUser}) {

  const navigate = useNavigate()
  const [imgURl,setImgURl] =useState(null)
  const [saveLocal,setSaveLocal] = useState(false)
  const handleFormSubmit = (evt)=>{
    evt.preventDefault()
    const data = {
      id: user.length ? user[user.length - 1].id + 1 : 1,
      avatarImg:imgURl,
      name:evt.target.name.value,
      subject:evt.target.subject.value,
      class:evt.target.class.value,
      email:evt.target.email.value,
      gender:evt.target.gender.value,
      age:evt.target.age.value,
      about:evt.target.about.value
    }
    console.log(data);
    setUser([...user,data]);
    toast.success("Ma'lumot qo'shildi!")
    setTimeout(() => {
      navigate('/teachers')
    }, 1000);
    setSaveLocal(!saveLocal)
  }
  const chooseImgChange = (e)=>{
    setImgURl(URL.createObjectURL(e.target.files[0]))
  }
  useEffect(()=>{
    window.localStorage.setItem("user",JSON.stringify(user))
  },[saveLocal])
  return (
    <div className='px-[38px] pt-[21px]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex items-center  justify-between space-x-[14px] mb-4'>
          <button onClick={()=> navigate('/teachers')}>
            <img className='hover:shadow-xl border-[1px] border-transparent p-1 hover:border-slate-400 rounded-lg transition-[0.4s]' src={arrow} alt="arrow" width={40} height={40}/>
          </button>
          <div className='flex items-center'>
          <img src={bellIcon} alt="bel Icon" width={28} height={28}/>
           <button className="text-[#424242] text-[16px] font-semibold w-[90px] rounded-  [8px] text-center hover:opacity-50 transition-[0.3s]">
            Log out
           </button>
        </div>
      </div>
        <form onSubmit={handleFormSubmit}>
        <div className='flex items-end justify-between mb-[21px]'>
           <h3 className='text-[#4F4F4F] text-[20px] font-medium'>Add teacher</h3>
           <div className='flex flex-col space-y-[14px]'>
             <button type='submit' className='text-[14]   inline-block text-center font-semibold text-white bg-[#509CDB] py-[12px] w-[100px] rounded-[8px] hover:opacity-60 transition-[0.3s]'>Save</button>
           </div>
       </div>
       <div  className="flex space-x-[60px] mt-[50px]">
        <div className="flex flex-col space-y-[25px]">
          <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">Full Name</span>
            <input 
             className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-[#8b8989] focus:shadow-md"
             name='name'
             type="text" 
             autocomplete="off"
             placeholder="Full name"/>
          </label>
          <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">Email address</span>
            <input 
             className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md focus:shadow-[#8b8989]"
             name='email'
             type="email" 
             autocomplete="off"
             placeholder="Email address"/>
          </label>
          <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">Subject</span>
            <input 
             className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md focus:shadow-[#8b8989]"
             name='subject'
             type="text" 
             autocomplete="off"
             placeholder="Subject"/>
          </label>
          <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">About</span>
               <textarea
               className=' pl-[48px] py-[16px] pr-10 bg-[#FCFAFA] border-transparent border-[1px] shadow-md shadow-[#6e6d6d]  rounded-md outline-none  focus:border-[1px] focus:border-[#509CDB] w-[407px] focus:shadow-[#8b8989]'
               name='about'
               autocomplete="off"
               placeholder='about'
               rows={4} 
               cols={50}
                />
          </label>
        </div>
        <div className="flex flex-col space-y-[25px]">
        <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">Class</span>
             <select className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md focus:shadow-[#8b8989]" name="class">
              <option value="N58">N58</option>
              <option value="N40">N40</option>
              <option value="N36">N36</option>
              <option value="N30">N30</option>
             </select>
          </label>
          <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">Gender</span>
             <select className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md focus:shadow-[#8b8989]" name="gender">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
             </select>
          </label>
          <label className="flex flex-col space-y-1">
            <span className="text-[16px] text-[#8A8A8A] font-medium">Age</span>
            <input 
             className="text-[15px] placeholder-[#8A8A8A] text-black font-medium py-[11px] pl-[10px] pr-5 border-[0.5px] border-[#A7A7A7] rounded-md w-[407px] outline-none  focus:border-[#509CDB] focus:shadow-md focus:shadow-[#8b8989]"
             name='age'
             autocomplete="off"
             type="number" 
             placeholder="Age"/>
          </label>
          <label className="flex items-center justify-around space-y-1">
            <div className="flex  space-x-2 items-center hover:opacity-60">
            <span className="text-[16px] text-black font-medium  cursor-pointer">Import Img</span>
            <img className="cursor-pointer" src={download} alt="choose img" width={30} height={20} />
            </div>
            <input 
             autocomplete="off"
             onChange={chooseImgChange} 
             name='img'
             className="visually-hidden "
             type="file"/>
             {imgURl ? <img src={imgURl} alt="avatar img" width={90} height={90} /> :""}
          </label>
        </div>
       </div>
        </form>
    </div>
  )
}

export default AddTeachers

