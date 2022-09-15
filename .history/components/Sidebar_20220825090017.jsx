import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const userProfile = false;
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded ";
  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="flex flex-col justify-start xl:w-400 w-20 mb-10 border-r-2 border-grey-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-grey-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="hidden text-2xl xl:block"> for dou</span>
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
                        disable={renderProps.disabled}
                        className='bg-white text-lg text-[F#51997] border-[1px] border-[F#51997] font-semibold px-6 py-3 rounded-md outline'
                        >
                            Log In
                        </button>

                    )
                    }
                    onSuccess={()=>{}}
                    onFailure={()=>{}}
                    cookiePolicy='single_host_origin'
                    />
                </div>
              </div>
              )
          }
        </div>
      )}
    </div>
  );
};

export default Sidebar;
