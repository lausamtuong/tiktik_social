import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../utils/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { IoMdAdd } from "react-icons/io";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
const Navbar = () => {
  const { userProfile, addUser } = useAuthStore();
 console.log(userProfile)
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[129px] md:h-[30px] h-[38px]">
          <Image
            className="cursor-pointer"
            alt="TikTik"
            Layout="responesive"
            src={Logo}
          />
        </div>
      </Link>
      <div className="">Search</div>
      <div className="">
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-2xl" />
                {` `}
                <span className="hidden md:block">Upload </span>
              </button>
            </Link>
            {userProfile.image && (
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
            )}
          </div>
        ) : (
          <div className="">
            <GoogleLogin
              onSuccess={(response) => {
                createOrGetUser(response, addUser);
              }}
              onError={() => console.log("error")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
