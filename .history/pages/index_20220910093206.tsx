import { Modal, Button, Image, Text, Link } from "@nextui-org/react";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResult from "../components/NoResult";
import React from "react";
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
        <Modal noPadding open={visible} onClose={closeHandler}>
          <Modal.Header
          // css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
          >
            <div className="flex justify-around gap-20 p-[15px] border-2px border-bottom-gray-400">
              <p className="font-bold text-2xl">Get The TikTik App</p>
              <p>x</p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Image
              showSkeleton
              src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
              width={200}
              height={490}
              className="rounded"
              css={{ borderRadius: "$xs", height: "auto" }}
            />
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
