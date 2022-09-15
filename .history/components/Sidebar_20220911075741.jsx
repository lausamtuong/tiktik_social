import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu,AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import Discover from './Discorver'
import SuggestedAccounts from "./SuggestedAccount";
import useAuthStore from '../store/authStore';

const Sidebar = () => {
  const router = useRouter()
  
  console.log(router.pathname)
  console.log(router.asPath)
  const params=''
  const [showSidebar, setShowSidebar] = useState(true);
  const {userProfile} = useAuthStore();
  const { fetchAllUsers, allUsers } = useAuthStore();
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold  text-black rounded ";
  const activeLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded ";
  return (
    <div className=''>
      <div
        className="block xl:hidden  mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle className='m-auto'/> : <AiOutlineMenu className='m-auto'/>}
      </div>
      {showSidebar && (
        <div className="  flex flex-col justify-start xl:w-[415px] w-20 mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/foryou">
              <div className={params===''?activeLink:normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="hidden text-xl xl:block"> For You</span>
              </div>
            </Link>
            <Link href="/following">
              <div className={params==='following'?activeLink:normalLink}>
                <p className="text-2xl">
                  <MdOutlineSupervisorAccount />
                </p>
                <span className="hidden text-xl xl:block"> Following</span>
              </div>
            </Link>
            <Link href="/live">
              <div className={params==='live'?activeLink:normalLink}>
                <p className="text-2xl">
                  <AiOutlineVideoCamera />
                </p>
                <span className="hidden text-xl xl:block"> Live</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
              <div className='px-2 py-4 hidden xl:block'>
                <p className='text-gray-400'>Login to like and comment</p>
                <div className='pr-4'>
                    <GoogleLogin
                    clientId=''
                    render={(renderProps)=>(
                        <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className='bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997]'
                        >
                            Log In
                        </button>

                    )
                    }
                    onSuccess={(responseGoogle )=>{console.log(responseGoogle)}}
                    onFailure={()=>{}}
                    cookiePolicy='single_host_origin'
                    />
                </div>
              </div>
              )
          }
          <Discover/>
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
