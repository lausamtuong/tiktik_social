import React from 'react';
import  Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div>
            <Link href=''>
                <div>
                    <Image 
                    className='cursor-pointer'
                    alt='TikTik'
                    Layout='res'
                    />
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
