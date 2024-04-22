import React from 'react'
import   './Login.css'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function Login({setToken}) {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || {newLogin:"abror",
newPassword:"123"}

  //Login Submit start
  const loginSubmit = (evt) =>{
    evt.preventDefault()
    const data = {
      login:evt.target.login.value,
      password:evt.target.password.value
    }
    if(data.login == newData.newLogin && data.password == newData.newPassword){
      toast.success("Muvaffaqiyatli kirdingiz!")
    }
    else{
      toast.error("Ma'lumtlar mos kelmadi!")
    }
    setTimeout(() => {
      setToken(data);
    }, 1000);
    window.localStorage.setItem("token",JSON.stringify(data))
  }
  return (
    <div className='flex justify-center pt-[70px] bg-[#FCFAFA]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex flex-col space-y-[53px]'>
        <h2 className='text-[36px] text-[#4F4F4F] font-semibold'>Welcome, Log into you account</h2>
        <form onSubmit={loginSubmit} className='shadow-[#8b8989] shadow-md  w-[512px] bg-white pt-[72px] pb-[39px] px-[132px] text-center flex flex-col'>
           <h4 className='text-[#667085] text-[16px] font-medium mb-[18px]'>It is our great pleasure to have you on board! </h4>
           <input 
           className='pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none  focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md pr-3' 
           name='login'
           type="text" 
           placeholder='Enter your Login' 
           required 
           autocomplete="off"
           />
            <input 
           className='pt-[13px] pb-[12px] pl-[13px] w-[248px] placeholder:#8A8A8A rounded-[4px] border-[1px] border-[#A7A7A7] outline-none mt-[14px] focus:border-[#2D88D4] focus:border-[1px] focus:shadow-md pr-3' 
           name='password'
           type="password" 
           placeholder='Enter Password' 
           required 
           autocomplete="off"
           />
           <button 
           type='submit' 
           className='w-[248px] bg-[#2D88D4] pt-[11px] pb-[12px] rounded-md text-white text-center mt-[14px] hover:opacity-55 transition-[0.3s] font-bold'>
           Login
           </button>
           <Link to={'/sign-up'} 
           className='mt-[14px] inline-block font-bold text-[15px] text-[#2D88D4] '> 
           Sign up
           </Link>
        </form>
      </div>
    </div>
  )
}

export default Login