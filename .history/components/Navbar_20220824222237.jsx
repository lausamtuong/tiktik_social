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
                    
                    />
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
