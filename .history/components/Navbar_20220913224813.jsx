import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../utils/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { IoMdAdd } from "react-icons/io";
import { createOrGetUser } from "../utils";
import { Modal} from "@nextui-org/react";
import {RiCloseFill} from'react-icons/ri'

import useAuthStore from "../store/authStore";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/router';
import ProfilePopup from './ProfilePopup'
const Navbar = () => {
  const { userProfile, addUser,removeUser } = useAuthStore();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const handler = () => setVisible(true);
  const handleSearch = (e) => {
    e.preventDefault();  
    if(searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };
  const [show,setShow] = useState(false)
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[129px] md:h-[30px] h-[38px] ml-[110px]">
          <Image
            className="cursor-pointer"
            alt="TikTik"
            Layout="responesive"
            src={Logo}
          />
        </div>
      </Link>
      <div className='relative hidden md:block'>
        <form
         onSubmit={handleSearch}
          className='absolute md:static top-10 -left-20 bg-white'
        >
          <input
           value={searchValue}
           onChange={(e) => setSearchValue(e.target.value)}
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0'
            placeholder='Search accounts and videos'
          />
          <button
            onClick={handleSearch}
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div className="">
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/Upload">
              <button className="border-2 px-3 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-2xl" />
                {` `}
                <span className="hidden md:block">Upload </span>
              </button>
            </Link>
            {userProfile.image && (
              <div className=" w-10 h-10 relative "
              onMouseEnter={()=>setShow(true)}
             
              >
                <Link href="/">
                  <>
                    <Image
                      width={40}
                      height={40}
                      className="rounded-full cursor-pointer"
                      src={userProfile.image}
                      alt="photo"
                      layout="responsive"
                    />
                  </>
                </Link>
                {
                  show&&
                <ProfilePopup setShow={setShow} className={show?'block':'hidden'} />
                }
              </div>
            )}
            <button
              type="button"
              className=" border-2 p-2 rounded-full cursor-pointer outline-none shadow-md"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <div className="">
            {/* <GoogleLogin
              onSuccess={(response) => {
                createOrGetUser(response, addUser);
              }}
              onError={() => console.log("error")}
            /> */}
             <button onClick={handler}
               className='bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-[3px] rounded-md outline-none w-full  hover:text-white hover:bg-[#F51997]'>
                            Log In
                        </button>
                        <Modal
          noPadding
          open={visible}
          onClose={closeHandler}
          css={{ maxHeight: "600px" }}
        >
          <Modal.Header
            // css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
            css={{ display: "block" }}
          >
            <div className="flex items-center w-full justify-between gap-20 p-[25px] border-b-2 border-gray-200">
              <p className="font-bold text-3xl">Log in to TikTok</p>
             <RiCloseFill  onClick={closeHandler} className='text-2xl'/>
            </div>
          </Modal.Header>
          <Modal.Body className=''>
            <div className="flex justify-center">

          <GoogleLogin
              onSuccess={(response) => {
                createOrGetUser(response, addUser);
              }}
              onError={() => console.log("error")}
              />
            
              </div>
          </Modal.Body>
        </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
