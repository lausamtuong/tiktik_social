import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineCancel } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { Input, Spacer, Tooltip,Button } from "@nextui-org/react";
import CardInfo from "../../components/CardInfo";
// import Comments from '../../components/Comments';
import { Popover= } from "@nextui-org/react";

import Picker from 'emoji-picker-react';
import { BASE_URL } from "../../utils";
import LikeButton from "../../components/LikeButton";
import useAuthStore from "../../store/authStore";
import { Video } from "../../types";
import axios from "axios";
import copy from "copy-to-clipboard";
import CommentBox from "../../components/CommentBox";
interface IProps {
  postDetails: Video;
}
const Details = ({ postDetails }: IProps) => {
  const [state,setState] = useState('')
  const [post, setPost] = useState(postDetails);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
  const [text, setText] = useState("");
  const [copyText, setCopyText] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const { userProfile }: any = useAuthStore();
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event:any, emojiObject:any) => {
    setState(prev=>prev+emojiObject.emoji);
  };
  const handleLike = async (like: boolean) => {
    if (userProfile) {
      const res = await axios.put(`http://localhost:3000/api/like`, {
        userId: userProfile._id,
        postId: post._id,
        like,
      });

      setPost({ ...post, likes: res.data.likes });
    }
  };
  useEffect(() => {
    if (post && videoRef?.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [post, isVideoMuted]);
  useEffect(() => {
    setCopyText(window.location.href);
  }, []);
  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  }
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
            <div className="gap-[20px] flex flex-col h-[100%] ">
              <CardInfo post={post} />
              <div className=" px-5">
                {true && (
                  <LikeButton
                    likes={post.likes}
                    flex="flex"
                    handleLike={() => handleLike(true)}
                    handleDislike={() => handleLike(false)}
                  />
                )}
                <div className="flex text-[14px] text-[#161823bf] mt-[16px] rounded-[2px] border-[1px] border-gray-300">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap bg-[#1618230f] pt-[7px] pr-[5px] pl-[12px] flex-auto">
                    {window.location.href}
                  </p>
                  <button
                    className="text-black px-[18px] py-[7px] cursor-pointer hover:bg-gray-200 font-bold  whitespace-nowrap"
                    onClick={copyToClipboard}
                  >
                    Copy Link
                  </button>
                </div>
              </div>
              <div className="h-[330px]  border-[1px] border-gray-300 scrollbar scrollbar-medium scrollbar-color overflow-hidden  bg-gray-100">
                <CommentBox post={post} />
              </div>
              <div className="flex items-center justify-center flex-1 gap-[10px]">
                <Spacer y={1.5} />
                <Input
                  clearable
                  css={{ width: "80%" }}
                  labelPlaceholder="Thêm bình luận..."
                  contentRightStyling={false}
                  contentLeftStyling={false}
                  value={state}
                  contentRight={
                    <Tooltip css={{fontWeight:'bold'}} content={"Nhấp để thêm Emoji"}>
                       <Picker onEmojiClick={onEmojiClick} />
                       <Popover>
      <Popover.Trigger>
        <Button auto flat>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: "$10" }}>This is the content of the popover.</Text>
      </Popover.Content>
    </Popover>
                      </Tooltip>
                  }
                  contentLeft={
                    <Tooltip css={{fontWeight:'bold'}} content={"Dùng @ để gắn thẻ người dùng"}>
                      <HiAtSymbol className='text-2xl ' onClick={()=>setState(prev=>prev+'@')}/>
                     
                      </Tooltip>
                  }
                  onChange={(e)=>{setState(e.target.value)}}
                />
               
                <Button disabled={state?false:true} css={{maxWidth:'20px'}} color="error">Post</Button>;
              
                
              </div>
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
