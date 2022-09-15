import React from 'react';
import Link from "next/link";
import { Popover, User, Button, Grid } from "@nextui-org/react";
import { UserTwitterCard } from "./UserCard";
import { GoVerified } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
const UserComment = ({post}) => {
   
    return (
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
          <div className="flex  w-full sm:justify-between gap-[190px]  sm:gap-0">
            <div className="">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <p className="hover:underline cursor-pointer underline-offset-1 flex gap-2 items-center text-xl font-bold text-primary">
                    {post.postedBy.userName.replace(/\s+/g, "")}{" "}
                    <GoVerified className="text-md text-blue-400" />
                  </p>
                  <p className="text-gray-500 capitalize font-medium text-xs hidden md:block">
                    {post.postedBy.userName}
                  </p>
                </div>
              </Link>
              <div className="font-normal">Title</div>
              <div className="flex gap-[30px]">
                <p className='text-gray-400 font-normal'>5-10</p>
                <p className='text-gray-400 font-normal cursor-pointer'>Reply</p>
                
              </div>
            </div>
            <div className="mr-[50px] flex flex-col justify-start">
                <div>
                    <FiMoreHorizontal className='text-2xl font-bold'/>
                </div>
            {true ? (
            <div
              className="bg-primary rounded-full cursor-pointer text-[#F51997] "
              ///onClick={handleDislike}
            >
              <MdFavorite className="text-lg md:text-2xl" />
            </div>
          ) : (
            <div
              className="bg-primary rounded-full hover:bg-gray-200 p-2 md:p-3 "
             // onClick={handleLike}
            >
              <MdFavorite className="text-lg md:text-xl" />
            </div>
          )}
          <p className=''>12.3k</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UserComment;
