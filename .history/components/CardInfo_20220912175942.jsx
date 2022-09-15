import React from 'react';
import Link from "next/link";
import { Popover, User, Button, Grid } from "@nextui-org/react";
import { UserTwitterCard } from "./UserCard";
import { GoVerified } from "react-icons/go";
const CardInfo = ({post}) => {
    const [follow, setFollow] = React.useState(false);
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
          <div className="flex  w-full sm:justify-between gap-[100px] items-center sm:gap-0">
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
            <div className="mr-[70px]">
              {!follow ? (
                <Button
                  color="error"
                  auto
                  ghost
                  onClick={() => setFollow((prev) => !prev)}
                >
                  Follow
                </Button>
              ) : (
                <Button
                  color="success"
                  auto
                  bordered
                  onClick={() => setFollow((prev) => !prev)}
                >
                  Following
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardInfo;
