import React from 'react';
import { Image } from "@nextui-org/react";
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineScan} from 'react-icons/ai'
const LoginByPhone = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className='flex justify-center px-[30px] py-[10px]'>
          <div className="flex justify-between">
            <p className="font-bold text-[16px]">Phone</p>
            <p className="font-normal text-[10px]">Log in with email or username</p>
             </div>
        </div>
    );
}

export default LoginByPhone;
