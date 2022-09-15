import { Modal, Button, Image, Text, Link } from "@nextui-org/react";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResult from "../components/NoResult";
import React from "react";
import {RiCloseFill} from'react-icons/ri'
import Head from 'next/head'
import {BASE}
interface IProps {
  videos: Video[];
}
const Home = ({ videos }: IProps) => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
    <Head>
        <title>Demo TikTik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-10 videos h-full">
        {videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResult />
        )}
      </div>
      <div className="fixed bottom-4  right-8">
        <Button auto flat color="error" onClick={handler}>
          Get App
        </Button>
        <Modal
          noPadding
          open={visible}
          onClose={closeHandler}
          css={{ maxHeight: "600px" }}
        >
          <Modal.Header
            // css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
            css={{ display: "block" }}
          >
            <div className="flex items-center w-full justify-between gap-20 p-[25px] border-b-2 border-gray-200">
              <p className="font-bold text-2xl">Get the TikTik app</p>
             <RiCloseFill  onClick={closeHandler} className='text-2xl'/>
            </div>
            <div className="flex justify-center font-semibold text-xl pb-[30px] pt-[40px]">
              Scan QR code to download TikTik
            </div>
          </Modal.Header>
          <Modal.Body>
            <Image
              showSkeleton
              src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
              width={200}
              className="rounded"
              css={{ borderRadius: "$xs", height: "auto" }}
            />
            <div className="flex justify-center font-semibold text-xl pb-[30px] pt-[10px]">
              Download from app stores
            </div>
            <div className="flex justify-center gap-10 flex-wrap">
              <Image
                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                width={200}
                css={{
                  borderRadius: "$xs",
                  height: "auto",
                  paddingBottom: "12px",
                }}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};
export default Home;
