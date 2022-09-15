import React from 'react';
import { Modal, Button, Image } from "@nextui-org/react";

const LoginByPhone = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className='flex gap-3 justify-center'>
          <div className="flex flex-col gap-3">
            <div className="">
                <Image
                  className="cursor-pointer"
                  alt="TikTik"
                  Layout="responesive"
                  src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                />
            </div>
            <div className="">
              <p className='font-normal'>1. Open the TikTok app on your mobile device</p>
              <p className='font-normal'>1. Open the TikTok app on your mobile device</p>
              <p className='font-normal'>1. Open the TikTok app on your mobile device</p>
            </div>
          </div>
             
        </div>
    );
}

export default LoginByPhone;
