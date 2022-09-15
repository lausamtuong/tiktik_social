import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineCancel } from "react-icons/md";

import CardInfo from '../../components/CardInfo'
// import Comments from '../../components/Comments';
import { BASE_URL } from "../../utils";
import LikeButton from '../../components/LikeButton';
import useAuthStore from "../../store/authStore";
import { Video } from "../../types";
import axios from "axios";
interface IProps {
  postDetails: Video;
}
const Details = ({ postDetails }: IProps) => {
  console.log(postDetails)
  const [post, setPost] = useState(postDetails);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const { userProfile }: any = useAuthStore();
  const handleLike = async (like: boolean) => {
    if (userProfile) {
      const res = await axios.put(`http://localhost:3000/api/like`, {
        userId: userProfile._id,
        postId: post._id,
        like
      });
      console.log(res)
      setPost({ ...post, likes: res.data.likes });
    }
  };
   useEffect(() => {
    if (post && videoRef?.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [post, isVideoMuted]);
  
  return (
    <>
      {post && (
        <div className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
          <div className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center">
            <div className="opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 z-50">
              <p className="cursor-pointer " onClick={() => router.back()}>
                <MdOutlineCancel className="text-white text-[35px] hover:opacity-90" />
              </p>
            </div>
            <div className="relative">
              <div className="lg:h-[100vh] h-[60vh]">
                <video
                  ref={videoRef}               
                  loop
                  src={post?.video?.asset.url}
                  className=" h-full cursor-pointer mx-auto object-cover w-[60%]"
                  controls
                ></video>
              </div>
            </div>
          </div>
          <div className="relative w-[1000px] md:w-[900px] lg:w-[700px]">
            <div className="lg:mt-20 mt-10">
              <CardInfo post={post}/>
              <div className=" px-5">
                {userProfile && (
                  <LikeButton
                    likes={post.likes}
                    flex="flex"
                    handleLike={() => handleLike(true)}
                    handleDislike={() => handleLike(false)}
                  />
                )}
                <div className="flex text-[14px] text-[#161823bf] mt-[16px] rounded-[2px] border-1 border-gray-300">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap bg-[#1618230f]">1233333333333333333333333333333333333333333333333333333323123213213</p>
                  <button className-''></button>
                </div>
              </div>
              {/* <Comments
                comment={comment}
                setComment={setComment}
                addComment={addComment}
                comments={post.comments}
                isPostingComment={isPostingComment}
              /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const data = await axios.get(`${BASE_URL}/api/post/${id}`);

  return {
    props: {
      postDetails: data.data,
    },
  };
};
export default Details;
