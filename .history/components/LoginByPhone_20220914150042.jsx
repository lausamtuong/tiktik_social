import React from 'react';
import Image from "next/image";
const LoginByPhone = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className='flex gap-3 justify-center'>
          <div className="flex flex-col gap-1">
            <div className="">
              
            </div>
          <Image
            className="cursor-pointer"
            alt="TikTik"
            Layout="responesive"
            src={Logo}
          />
            <div className="">

            <p className='font-normal'></p>
            </div>
          </div>
             
        </div>
    );
}

export default LoginByPhone;
