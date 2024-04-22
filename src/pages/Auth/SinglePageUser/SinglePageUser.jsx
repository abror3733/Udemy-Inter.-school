import React from 'react'
import bellIcon from "../../../assets/Images/bell.svg"
import singlePageTel from '../../../assets/Images/singlePageTel.svg'
import arrow from '../../../assets/Images/arrow.svg'
import singlePageUser from '../../../assets/Images/singlePageUser.svg'
import singlePageEmail from '../../../assets/Images/singlePageEmail.svg'
import { Link, useNavigate, useParams } from 'react-router-dom'

function SinglePageUser({user}) {
  const {id} =useParams()
  const singleDate = user.find(item=>item.id == id)
  console.log(singleDate);
  const navigate = useNavigate()
  return (
    <div className='px-[38px] pt-[21px]'>
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
      <div className='flex items-center justify-center space-x-[100px]'>
        <div>
          <img className='rounded-[50%] shadow-md' src={singleDate.avatarImg} alt="avatar img" width={280} height={280} />
          <h4 className='text-[#1A1A1A] text-[20px] font-bold mt-[30px] text-center'> {singleDate.name}</h4>
          <span className='text-[#A7A7A7] text-[14px] font-bold text-center  block'>{singleDate.subject} teacher</span>
          <div className='mt-[40px] flex items-center space-x-[25px]'>
            <Link className='inline-block hover:shadow-lg p-1 border-[1px] border-transparent hover:border-slate-400 rounded-lg transition-[0.4s]' to={'tel:1234567890'}>
              <img src={singlePageTel} alt="tel" width={60} height={60} />
            </Link>
            <Link className='inline-block hover:shadow-lg p-1 border-[1px] border-transparent hover:border-slate-400 rounded-lg transition-[0.4s]' to={'#'}>
              <img src={singlePageUser} alt="tel" width={60} height={60} />
            </Link>
            <Link className='inline-block hover:shadow-lg p-1 border-[1px] border-transparent hover:border-slate-400 rounded-lg transition-[0.4s]' to={`mail-tomailto:${singleDate.email}`}>
              <img src={singlePageEmail} alt="tel" width={60} height={60} />
            </Link>
          </div>
        </div>
        <div className='w-[335px]'>
          <h4 className='text-[#1A1A1A] text-[16px] font-bold mb-[16px]'>About</h4>
          <p className='text-[#A7A7A7] font-medium text-[16px]'>{singleDate.about}</p>
          <div className='mt-[50px] flex items-center space-x-[142px]'>
            <div className='flex flex-col space-y-[6px]'>
              <strong className='text-[#1A1A1A] text-[12px] font-semibold'>Age</strong>
              <span className='text-[#A7A7A7] text-[14px] font-medium'>{singleDate.age}</span>
            </div>
            <div className='flex flex-col space-y-[6px]'>
              <strong className='text-[#1A1A1A] text-[12px] font-semibold'>Gender</strong>
              <span className='text-[#A7A7A7] text-[14px] font-medium'>{singleDate.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePageUser