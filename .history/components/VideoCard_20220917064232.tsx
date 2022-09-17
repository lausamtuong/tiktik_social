import React, { useState, useRef } from "react";
import { Video } from "../types";
import { NextPage } from "next";
import Link from "next/link";
import CardInfo from './CardInfo'
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { Waypoint } from "react-waypoint";

interface IProps {
  post: Video;
}
const VideoCard: NextPage<IProps> = ({ post }) => {
 
  const [isHover, setIsHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [like, setLike] = useState<Boolean>(false);
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6 ">
     <CardInfo post={post}/>
      <div className="lg:ml-20 flex gap-4 relative pr-[20px]">
        <Link href={`/details/${post._id}`}>
          <div
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
            className="overflow-hidden  w-[calc(100%+2rem) rounded-[7px] cursor-pointer bg-gray-100"
          >
            <Waypoint
              onEnter={() => {
                videoRef?.current?.play();
                setIsPlaying(true);
              }}
              onLeave={() => {
                videoRef?.current?.pause();
                setIsPlaying(false);
              }}
            >
              <video
                ref={videoRef}
                loop
                className="object-cover -right-0 bottom-0 min-w-full min-h-full"
                src={post.video?.asset?.url}
                controls
              />
            </Waypoint>
          </div>
        </Link>
      
        <div className="flex flex-col justify-end gap-2">
          <div
            onClick={() => {
              setLike((prev) => !prev);
            }}
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full w-[40px] h-[40px] p-[6px] md:w-[60px] md:h-[60px] flex items-center justify-center"
          >
            {like ? (
              <AiFillHeart className="text-sm md:text-3xl" />
            ) : (
              <AiOutlineHeart className="text-sm md:text-3xl" />
            )}
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full w-[20px] h-[20px] p-[6px] md:w-[60px] md:h-[60px] flex items-center justify-center">
            <AiOutlineComment className="text-sm md:text-3xl" />
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full w-[20px] h-[20px] p-[6px] md:w-[60px] md:h-[60px] flex items-center justify-center">
            <BiShare className="text-sm md:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
