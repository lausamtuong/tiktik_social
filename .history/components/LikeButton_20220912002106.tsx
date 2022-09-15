import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { AiOutlineComment, AiFillTwitterCircle } from "react-icons/ai";
import { ImEmbed2 } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";
import { NextPage } from "next";
import useAuthStore from "../store/authStore";

interface IProps {
  likes: any;
  flex: string;
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton: NextPage<IProps> = ({
  likes,
  flex,
  handleLike,
  handleDislike,
}) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  let filterLikes = likes?.filter(
    (item: any) => item._ref === userProfile?._id
  );

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="flex justify-between items-center">
      <div className={`${flex} gap-6`}>
        <div className="mt-4 flex gap-2 justify-center items-center   cursor-pointer">
          {alreadyLiked ? (
            <div
              className="bg-primary rounded-full hover:bg-gray-200 p-2 md:p-3 text-[#F51997] "
              onClick={handleDislike}
            >
              <MdFavorite className="text-lg md:text-xl" />
            </div>
          ) : (
            <div
              className="bg-primary rounded-full hover:bg-gray-200 p-2 md:p-3 "
              onClick={handleLike}
            >
              <MdFavorite className="text-lg md:text-xl" />
            </div>
          )}
          <p className="text-md font-semibold ">{likes?.length || 0}</p>
        </div>
        <div className="mt-4 flex gap-2 justify-center items-center   cursor-pointer">
          <div
            className="bg-primary rounded-full hover:bg-gray-200 p-2 md:p-3 text-black "
            onClick={handleDislike}
          >
            <AiOutlineComment className="text-lg md:text-xl" />
          </div>

          <p className="text-md font-semibold ">{likes?.length || 0}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
 <Tooltip content={"Embed"} css={{te}} rounded color="invert">
        <div className="bg-primary rounded-full p-2 md:p-3  hover:bg-gray-200 cursor-pointer text-[#161823] "
          onClick={handleDislike}
          >
          <ImEmbed2 className="text-lg md:text-xl" />
        </div>
          </Tooltip>
         <Tooltip content={"Developers love Next.js"} rounded color="invert">
        <div className="bg-primary rounded-full p-2 md:p-3  hover:bg-gray-200 cursor-pointer text-[#fe2c55] "
          onClick={handleDislike}
          >
          <FiSend className="text-lg md:text-xl" />
        </div>
          </Tooltip>
         <Tooltip content={"Developers love Next.js"} rounded color="invert">
        <div className="bg-primary rounded-full p-2 md:p-3   cursor-pointer hover:bg-gray-200 text-[#0075fa] ">
          <BsFacebook className="text-lg md:text-xl" />
        </div>
        </Tooltip>
         <Tooltip content={"Developers love Next.js"} rounded color="invert">
   
        <div className="bg-primary rounded-full p-2 md:p-3  hover:bg-gray-200 cursor-pointer text-[#25d366] ">
          <BsWhatsapp className="text-lg md:text-xl" />
        </div></Tooltip>
         <Tooltip content={"Developers love Next.js"} rounded color="invert">

        <div className="bg-primary rounded-full p-2 md:p-3  hover:bg-gray-200 cursor-pointer text-[#1da1f2] ">
          <AiFillTwitterCircle className="text-lg md:text-2xl" />
        </div>
        </Tooltip>
       
          <div className="bg-primary rounded-full p-2 md:p-3  hover:bg-gray-200 cursor-pointer  ">
         
            <FaShare className="text-lg md:text-xl" />
          </div>
        
      </div>
    </div>
  );
};

export default LikeButton;
