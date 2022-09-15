import React from 'react';
import  Link from 'next/link'
import Image from 'next/image'
import Logo from ''
const Navbar = () => {
    return (
        <div>
            <Link href=''>
                <div>
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
