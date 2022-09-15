import { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import { Video } from "../types";
interface IProps {
    post: Video;
  }
const VideoList:NextPage<IProps> = ({ post }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <div className=' overflo lg:w-[220px] h-[340px] lg:h-[260px] w-[300px] rounded-2xl cursor-pointer bg-gray-100'>
            <video
                ref={videoRef}
                loop
                className=" object-cover -right-0 bottom-0 min-w-full min-h-full"
                src={post.video?.asset?.url}
              />
        </div>
    );
}

export default VideoList;
