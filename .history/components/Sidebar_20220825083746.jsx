import React, { useState } from 'react';
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import {AiFillHome,AiOutlineMenu} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'
const Sidebar = () => {
    const [showSidebar,setShowSidebar] = useState(true)
    return (
        <div>
            <div className='block xl:hidden m-2 ml-4 mt-3 text-xl'
            onClick={()=> setShowSidebar(prev=>!prev)}
            >
            {showSidebar?<ImCancelCircle/>:<AiOutlineMenu/>}
            </div>
            {showSidebar&&(
                <div className='flex flex-col justify-start xl:w-400 w-20 mb-10 border-r-2 border-grey-100 xl:border-0 p-3'>
                           
                           <div>
                            </div>
                             <Link href='/'>
                                <div className=''>

                                </div>
                            </Link>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
