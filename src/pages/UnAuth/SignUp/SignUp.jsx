import React from 'react'
import   './SignUp.css'
import toast, { Toaster } from 'react-hot-toast'
import { json, useNavigate } from 'react-router-dom'


function SignUp({setSignUpData}) {
  const navigate = useNavigate()
  const signUpSubmit = (evt)=>{
    evt.preventDefault()
    const data = {
      newLogin:evt.target.newLogin.value,
      newPassword:evt.target.newPassword.value
    }
    toast.success("Ma'lumotlar yangilandi!")
    setTimeout(() => {
      setSignUpData(data);
      navigate('/')
    }, 1000);
    window.localStorage.setItem("newToken",JSON.stringify(data))
}
  return (
    <div className='flex justify-center h-[100vh] pt-[40px] bg-[#FCFAFA]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex flex-col space-y-[33px]'>
        <h2 className='text-[36px] text-[#4F4F4F] font-semibold text-center'>Welcome, Sign up</h2>
        <form onSubmit={signUpSubmit} className='shadow-[#8b8989] shadow-md w-[512px] bg-white pt-[62px] pb-[49px] px-[132px] text-center flex flex-col'>
           <h4 className='text-[#667085] text-[16px] font-medium mb-[28px]'>It is our great pleasure to have you on board! </h4>
           <input 
           className='pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none  focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md pr-3' 
           name='newEmail'
           type="email" 
           placeholder='Enter your Email' 
           required 
           autocomplete="off"
           />
           <input 
           className='my-[15px] pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none  focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md pr-3' 
           name='newLogin'
           type="text" 
           placeholder='Create your Login' 
           required 
           autocomplete="off"
           />
           <input 
           className='pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none  focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md pr-3' 
           name='newPassword'
           type="password" 
           placeholder='Create your Password' 
           required 
           />
           <button className='w-[248px] bg-[#2D88D4] pt-[11px] pb-[12px] rounded-md text-white text-center mt-[15px] hover:opacity-55 transition-[0.3s] font-bold'>
           Sign up
           </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp