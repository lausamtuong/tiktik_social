import React from 'react';
import {AiOutlineUser,AiOutlineQuestionCircle} from 'react-icons/ai'
import {BiStore} from 'react-icons/bi'

import {FiSettings,FiLogIn} from 'react-icons/fi'
const ProfilePopup = () => {
    return (
        <div className='z-50 flex flex-col absolute w-[220px] 
         bg-white rounded-[12px] border-gray-200 top-[50px] right-0 shadow-gray-400  shadow-md overflow-hidden'>
            <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <AiOutlineUser  className='text-3xl font-semibold'/>
                <p className='text-lg font-semibold'>View profile</p>
            </div>
             <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <BiStore className='text-3xl font-semibold'/>
                <p className='text-lg font-semibold'>Business Suite</p>
            </div>
            <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <FiSettings  className='text-3xl font-semibold'/>
                <p className='text-lg font-semibold'>Setting</p>
            </div>
            <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
               <AiOutlineQuestionCircle  className='text-3xl font-semibold'/>
                <p className='text-lg font-semibold'>Feedback and Help</p>
            </div>
            <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
               <FiLogIn  className='text-3xl font-semibold'/>
                <p>Log out</p>
            </div>
           
        </div>
        )
    
};

export default ProfilePopup;