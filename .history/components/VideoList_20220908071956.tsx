import { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import { Video } from "../types";
interface IProps {
    post: Video;
  }
const VideoList:NextPage<IProps> = ({ post }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <div>
            <video
                ref={videoRef}
                loop
                className="lg:w-[20px] h-[340px] lg:h-[260px] w-[300px] rounded-2xl cursor-pointer bg-gray-100"
                src={post.video?.asset?.url}
              />
        </div>
    );
}

export default VideoList;
