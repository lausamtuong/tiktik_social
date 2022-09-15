import React ,{useState}from 'react';
import {AiOutlineUser,AiOutlineQuestionCircle} from 'react-icons/ai'
import {BiStore} from 'react-icons/bi'

import {FiSettings,FiLogIn} from 'react-icons/fi'
const ProfilePopup = ({show}) => {
    const [fade,setFade]= useState('')
    return (
        <div 
        
        className={`hover:hidden_ ease-in-out duration-1000 visible-hidden 
        opacity-0 z-50 flex flex-col absolute w-[220px] 
         bg-white rounded-[12px] border-gray-200 top-[50px] right-0
          shadow-gray-400  shadow-md 
          before:content-['*'] before:h-[50px] before:absolute before:bg-red-500 before:top-0
          `}
          
          >
            <div className='py-[10px] hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <AiOutlineUser  className='text-3xl font-semibold'/>
                <p className='text-base font-semibold'>View profile</p>
            </div>
             <div className=' py-[10px] hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <BiStore className='text-3xl font-semibold'/>
                <p className='text-base font-semibold'>Business Suite</p>
            </div>
            <div className='py-[10px] hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <FiSettings  className='text-3xl font-semibold'/>
                <p className='text-base font-semibold'>Setting</p>
            </div>
            <div className='py-[10px] hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
               <AiOutlineQuestionCircle  className='text-3xl font-semibold'/>
                <p className='text-base font-semibold'>Feedback and Help</p>
            </div>
            <div className='py-[10px] hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
               <FiLogIn  className='text-3xl font-semibold'/>
                <p className='text-base font-semibold'>Log out</p>
            </div>
           
        </div>
        )
    
};

export default ProfilePopup;