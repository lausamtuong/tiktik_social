import React from 'react';

const ProfilePopup = () => {
    return (
        <div className='z-50 flex flex-col absolute w-[220px] 
         bg-white rounded-[12px] border-gray-200 h-[400px] top-[50px] right-0 shadow-gray-400  shadow-md overflow-hidden'>
            <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <p>213</p>
                <p>123</p>
            </div>
            <div className='hover:bg-gray-100 cursor-pointer overflow-hidden w-full py-2 flex pl-[20px] items-center gap-6'>
                <p>213</p>
                <p>123</p>
            </div>
           
        </div>
    );
};

export default ProfilePopup;