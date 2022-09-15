import React, { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { AiOutlineComment,AiFillTwitterCircle } from 'react-icons/ai';
import { ImEmbed2 } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { BsFacebook,BsWhatsapp } from 'react-icons/bs';

import { NextPage } from 'next';
import useAuthStore from '../store/authStore';

interface IProps{
  likes: any;
  flex: string;
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton: NextPage<IProps> = ({ likes, flex, handleLike, handleDislike }) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  let filterLikes = likes?.filter((item: any) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className={`${flex} gap-6`}>
      <div className='mt-4 flex gap-2 justify-center items-center cursor-pointer'>
                  
                        
        
          <div className='bg-primary rounded-full p-2 md:p-3 ' onClick={handleLike} >
            <MdFavorite className='text-lg md:text-xl' />
          </div>
        )}
        <p className='text-md font-semibold '>{likes?.length || 0}</p>
      </div>
      <div className='mt-4 flex gap-2 justify-center items-center cursor-pointer'>
        {alreadyLiked ? (
          <>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#F51997] ' onClick={handleDislike} >
            <MdFavorite className='text-lg md:text-xl' />
          </div>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#F51997] ' onClick={handleDislike} >
            <AiOutlineComment className='text-lg md:text-xl' />
          </div>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#1da1f2] ' onClick={handleDislike} >
            <AiFillTwitterCircle className='text-lg md:text-2xl' />
          </div>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#161823] ' onClick={handleDislike} >
            <ImEmbed2 className='text-lg md:text-xl' />
          </div>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#fe2c55] ' onClick={handleDislike} >
            <FiSend className='text-lg md:text-xl' />
          </div>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#25d366] ' onClick={handleDislike} >
            <BsWhatsapp className='text-lg md:text-xl' />
          </div>
          <div className='bg-primary rounded-full p-2 md:p-3 text-[#0075fa] ' onClick={handleDislike} >
            <BsFacebook className='text-lg md:text-xl' />
          </div>
          </>
        ) : (
          <div className='bg-primary rounded-full p-2 md:p-3 ' onClick={handleLike} >
            <MdFavorite className='text-lg md:text-xl' />
          </div>
        )}
        <p className='text-md font-semibold '>{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;