import React, { useState, useRef } from "react";
import { Video } from "../types";
import { NextPage } from "next";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { Waypoint } from "react-waypoint";
import { Popover, User, Button, Grid } from "@nextui-org/react";
import { UserTwitterCard } from "./UserCard";
interface IProps {
  post: Video;
}
const VideoCard: NextPage<IProps> = ({ post }) => {
  const [follow,setFollow]=useState(false)
  const [isHover, setIsHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onVideoPress = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  };
  const [like, setLike] = useState<Boolean>(false);
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6 ">
      <div className="">
        <div className="flex gap-3 p-2 font-semibold rounded">
          <div className="md:w-[65px] md:h-[65px] rounded-full  w-12 h-12 cursor-pointer hover:bg-gray-100">
            <Link href="/">
              <Grid.Container gap={2} alignContent="center">
                <Grid>
                  <div className="cursor-pointer">
                    <Popover>
                      <Popover.Trigger>
                        <User
                          as="button"
                          src={post.postedBy.image}
                          name={""}
                          description=""
                        />
                      </Popover.Trigger>
                      <Popover.Content css={{ px: "$4" }}>
                        <UserTwitterCard />
                      </Popover.Content>
                    </Popover>
                  </div>
                </Grid>
              </Grid.Container>
            </Link>
          </div>
          <div className="flex justify-between">
            
          </div>
          <div className="">
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className="hover:underline cursor-pointer underline-offset-1 flex gap-2 items-center mid:text-md font-bold text-primary">
                  {post.postedBy.userName.replace(/\s+/g, "")}{" "}
                  <GoVerified className="text-md text-blue-400" />
                </p>
                <p className="text-gray-500 capitalize font-medium text-xs hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
            <div className="font-normal">Title</div>
            <div className="">Music</div>
          </div>
         {!follow? <Button color="error" auto ghost onClick={()=>setFollow(prev=>!prev)}>
          Follow
        </Button>: <Button color="success" auto bordered onClick={()=>setFollow(prev=>!prev)}>
          Following
        </Button>}
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <Link href={`/details/${post._id}`}>
          <div
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
            className="overflow-hidden  h-[500px] w-[300px] rounded-[7px] cursor-pointer bg-gray-100"
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
              />
            </Waypoint>
           
          </div>
        </Link>
        {isHover && (
              <div
                className="absolute bottom-14 md:bottom-16
            cursor-pointer left-0 flex gap-[200px]
            w-[100px] md:w-[50px] p-3 rounded"
            onMouseEnter={() => {
              setIsHover(true);
            }}
              >
                {isPlaying ? (
                  <button onClick={onVideoPress}>
                    <BsFillPauseFill className="text-white text-2xl lg:text-4xl" />
                  </button>
                ) : (
                  <button onClick={onVideoPress}>
                    <BsFillPlayFill className="z-10 text-white text-2xl lg:text-4xl" />
                  </button>
                )}
                {isMuted ? (
                  <button onClick={() => setIsMuted(false)}>
                    <HiVolumeOff className="text-white text-2xl lg:text-4xl" />
                  </button>
                ) : (
                  <button onClick={() => setIsMuted(true)}>
                    <HiVolumeUp className="text-white text-2xl lg:text-4xl" />
                  </button>
                )}
              </div>
            )}
        <div className="flex flex-col justify-end gap-6">
          <div
            onClick={() => {
              setLike((prev) => !prev);
            }}
            className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full w-[40px] h-[40px] p-[6px] md:w-[60px] md:h-[60px] flex items-center justify-center"
          >
            {like ? (
              <AiFillHeart className="text-xl md:text-3xl" />
            ) : (
              <AiOutlineHeart className="text-xl md:text-3xl" />
            )}
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full w-[40px] h-[40px] p-[6px] md:w-[60px] md:h-[60px] flex items-center justify-center">
            <AiOutlineComment className="text-xl md:text-3xl" />
          </div>
          <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full w-[40px] h-[40px] p-[6px] md:w-[60px] md:h-[60px] flex items-center justify-center">
            <BiShare className="text-xl md:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;