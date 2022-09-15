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
  const [isHover,setIsHover]= useState(false)
  const [isPlaying,setIsPlaying] = useState(false)
  const [isMuted,setIsMuted] = useState(false);
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
                <p className="flex gap-2 items-center mid:text-md font-bold text-primary">
                  {post.postedBy.userName} {` `}
                  <GoVerified className="text-md text-blue-400" />
                </p>
                <p className="text-gray-500 capitalize font-medium text-xs hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div 
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        className="rounded-3xl">
          <Link href="/">
            <video
              loop
              className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
              src={post.video?.asset?.url}
            />
          </Link>
          {isHover&&(
            <div className="lg">
              {isPlaying?(
                <button>
                  
                </button>
              ):()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
