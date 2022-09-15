import React, { useState, useEffect, useRef } from "react";
import { Video } from "../types";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { BsPlay } from "react-icons/bs";
interface IProps {
  post: Video;
}
const VideoCard: NextPage<IProps> = ({ post }) => {
    console.log(post)
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6 ">
      <div className="">
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="/">
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="video"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div className="">
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className='flex gap-2 items-center mid:text-md font-bold text-primary'>
                  {post.postedBy.userName} {` `}
                  <GoVerified className="text-md text-blue-400" />
                </p>
                <p className='text-gray-500 capitalize font-medium text-xs hiden'></p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
