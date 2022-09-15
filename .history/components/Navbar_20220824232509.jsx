import React from 'react';
import  Link from 'next/link'
import Image from 'next/image'
import Logo from '../utils/tiktik-logo.png'
const Navbar = () => {
    return (
        <div>
            <Link href='/'>
                <div className='w-[100px] md'>
                    <Image 
                    className='cursor-pointer'
                    alt='TikTik'
                    Layout='responesive'
                    src={Logo}
                    />
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
