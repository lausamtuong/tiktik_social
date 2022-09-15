import React, { useState, useEffect, useRef } from 'react';

const VideoList: NextPage<IProps> = ({ post }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <div>
            <video
                ref={videoRef}
                loop
                className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[450px] w-[300px] rounded-2xl cursor-pointer bg-gray-100"
                src={post.video?.asset?.url}
              />
        </div>
    );
}

export default VideoList;
