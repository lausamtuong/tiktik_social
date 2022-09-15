import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import { AiOutlineLock } from 'react-icons/ai';
import axios from 'axios';

import VideoList from '../../components/VideoList.tsx';
import NoResults from '../../components/NoResult';
import { IUser, Video } from '../../types';
import { BASE_URL } from '../../utils';

interface IProps {
  data: {
    user: IUser;
    userVideos: Video[];
    userLikedVideos: Video[];
  };
}

const Profile = ({ data }: IProps) => {
  const [showUserVideos, setShowUserVideos] = useState<Boolean>(true);
  const [videosList, setVideosList] = useState<Video[]>([]);
  
  const { user, userVideos, userLikedVideos } = data;
  const videos = showUserVideos ? 'before:translate-x-[5%]' : 'before:translate-x-[110%]';
 

  useEffect(() => {
    const fetchVideos = async () => {
      if (showUserVideos) {
        setVideosList(userVideos);
      } else {
        setVideosList(userLikedVideos);
      }
    };

    fetchVideos();
  }, [showUserVideos, userLikedVideos, userVideos]);

  return (
    <div className='w-full'>
      <div className='flex gap-6 md:gap-10 mb-4 bg-white w-full'>
        <div className='w-16 h-16 md:w-32 md:h-32'>
          <Image
            width={120}
            height={120}
            layout='responsive'
            className='rounded-full'
            src={user.image}
            alt='user-profile'
          />
        </div>

        <div className='flex flex-col justify-start items-start gap-1'>
          <div className='text-4xl md:text-2xl font-bold tracking-wider flex gap-2 items-center justify-center lowercase'>
            <span className='text-4xl'>{user.userName.replace(/\s+/g, '')} </span>
            <GoVerified className='text-blue-400 md:text-xl text-md' />
          </div>
          <p className='text-md font-medium'> {user.userName}</p>
        <div className='bg-white w-[200px] text-center cursor-pointer font-bold text-xl text-[#F51997] border-[1px] border-[#F51997]  px-6 py-2 rounded-md outline-none  mt-3 hover:text-white hover:bg-[#F51997]'>
         Follow
        </div>
        </div>
      </div>
      <div>
        <div className={`relative flex gap-40 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-[45%] pb-[5px] before:content-[""]
        before:bottom-[-2px]  ${videos}  before:duration-200 before:ease-linear before:absolute before:bg-black before:w-[220px] before:h-[3px] before:rounded`}>
          <p className={`text-xl font-semibold cursor-pointer  mt-2 ml-[90px]`} onClick={() => setShowUserVideos(true)}>
            Videos
          </p>
          <p 
           className={`text-xl flex justify-center items-center font-semibold cursor-pointer  mt-2`} onClick={() => setShowUserVideos(false)}>
            <AiOutlineLock/>
            Liked
          </p>
          
        </div>
        <div className='flex gap-6 flex-wrap md:justify-start'>
          {videosList.length > 0 ? (
            videosList.map((post: Video, idx: number) => (
              <VideoList key={idx} post={post} />
            ))
          ) : (
            <NoResults
              text={`No ${showUserVideos ? '' : 'Liked'} Videos Yet`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/profile/${userId}`);

  return {
    props: { data: res.data },
  };
};
export default Profile;