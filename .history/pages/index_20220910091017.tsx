import { Modal, Button, Image, Text, Link } from "@nextui-org/react";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResult from "../components/NoResult";
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
      <div className="fixed bottom-0 right-0">get APp</div>
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
