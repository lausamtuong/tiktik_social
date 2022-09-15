import React from 'react';
import { Image } from "@nextui-org/react";
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineScan} from 'react-icons/ai'
const LoginByPhone = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className='flex flex-col justify-center px-[30px] py-[10px]'>
          <div className="flex justify-between items-center">
            <p className="font-bold text-[16px]">Phone</p>
            <p className="font-normal text-[12px]">Log in with email or username</p>
        </div>
        <div className="flex rounded-[4px] border border-gray-200 bg-gray-100 h-6">
            <div className="flex">
                <p>123</p>
                <p>123</p>
            </div>
            <div className="flex-auto">
                <input type="text borde" />
            </div>
        </div>
        </div>
    );
}

export default LoginByPhone;
