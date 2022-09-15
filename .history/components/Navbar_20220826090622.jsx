import React from 'react';
import  Link from 'next/link'
import Image from 'next/image'
import Logo from '../utils/tiktik-logo.png'
import {GoogleLogin,googleLogout} from'@react-oauth/google'
import { createOrGetUser } from '../utils';
const Navbar = () => {
    const {userProfile,addUser} = use;
    return (
        <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <Link href='/'>
                <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
                    <Image 
                    className='cursor-pointer'
                    alt='TikTik'
                    Layout='responesive'
                    src={Logo}
                    />
                </div>
            </Link>
            <div className="">Search</div>
            <div className="">
                {!user?(
                    <div className="">
                        <GoogleLogin 
                        onSuccess={(response)=>{
                            createOrGetUser(response);
                        }}
                        onError={()=>console.log('error')}/>
                    </div>
                ):(
                    <div className=""></div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
